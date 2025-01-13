import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import merge from 'lodash/merge';
import clone from 'lodash/clone';

import NotificationContext from 'src/contexts/NotificationContext';

function removeTypename(inputObject) {
  const object = clone(inputObject);

  for (const key of Object.keys(object)) {
    if (key === '__typename') delete object[key];
    else if (object[key] !== null && typeof object[key] === 'object') {
      object[key] = removeTypename(object[key]);
    }
  }

  return object;
}

function transformDataToPatch(data) {
  const patch = Object.values(data).reduce(
    (acc, value) => ({ ...acc, ...value }),
    []
  );

  return removeTypename(patch);
}

const usePatchFormHandler = (
  mutation,
  query,
  { update, variables, queryVariables, onCompleted } = {}
) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formMessage, setFormMessage] = useState();
  const { addNotification } = useContext(NotificationContext);

  const { data: queryData } = useQuery(query, {
    variables: queryVariables,
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
  });

  const [mutate, { data }] = useMutation(mutation, {
    update,
    onCompleted: (mutationData) => {
      setFormMessage();

      if (onCompleted) {
        try {
          onCompleted({
            router,
            setFormMessage,
            addNotification,
            data: mutationData,
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
  } = useForm({
    defaultValues: queryData && { patch: transformDataToPatch(queryData) },
  });

  return [
    handleSubmit(async (submitData) => {
      setLoading(true);

      try {
        await mutate({
          variables: merge({ input: submitData }, await variables?.()),
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
      data,
      watch,
      loading,
      control,
      inputErrors,
      formMessage,
    },
  ];
};

export default usePatchFormHandler;
