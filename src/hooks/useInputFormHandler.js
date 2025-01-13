import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import merge from 'lodash/merge';

import NotificationContext from 'src/contexts/NotificationContext';

const useInputFormHandler = (
  mutation,
  { update, defaultValues, variables, onCompleted } = {}
) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formMessage, setFormMessage] = useState();
  const { addNotification } = useContext(NotificationContext);

  const [mutate] = useMutation(mutation, {
    update,
    onCompleted: (data) => {
      setFormMessage();

      if (onCompleted) {
        try {
          onCompleted({
            router,
            setFormMessage,
            addNotification,
            data,
          });
        } catch {
          addNotification({
            type: 'toast',
            level: 'error',
            content: `Something went wrong. Check your internet connection.`,
          });
        }
      }
    },
    onError: (errors) => {
      if (errors.networkError) {
        addNotification({
          type: 'toast',
          level: 'error',
          content: `Something went wrong. Check your internet connection.`,
        });
      }

      if (errors.graphQLErrors?.length > 0) {
        setFormMessage({
          level: 'error',
          content: errors.graphQLErrors.reduce(
            (acc, { message }) => `${acc}${message}\n`,
            ''
          ),
        });
      }
    },
  });

  const {
    watch,
    control,
    handleSubmit,
    formState: { errors: inputErrors },
  } = useForm({ defaultValues });

  return [
    handleSubmit(async (data) => {
      setLoading(true);

      try {
        await mutate({
          variables: merge({ input: data }, await variables?.()),
        });
      } catch {
        addNotification({
          type: 'toast',
          level: 'error',
          content: `Something went wrong. Check your internet connection.`,
        });
      }

      setLoading(false);
    }),
    {
      watch,
      loading,
      control,
      inputErrors,
      formMessage,
    },
  ];
};

export default useInputFormHandler;
