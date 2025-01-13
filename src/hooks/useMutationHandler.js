import { useState, useContext } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

import NotificationContext from 'src/contexts/NotificationContext';

const useMutationHandler = (
  mutation,
  { update, variables, onCompleted } = {}
) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { addNotification } = useContext(NotificationContext);

  const [mutate] = useMutation(mutation, {
    update,
    onCompleted: (data) => {
      onCompleted({ data, router, addNotification });
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
        addNotification({
          type: 'toast',
          level: 'error',
          content: errors.graphQLErrors.reduce(
            (acc, { message }) => `${acc}${message}\n`,
            ''
          ),
        });
      }
    },
  });

  return [
    async (options) => {
      setLoading(true);

      try {
        await mutate({
          variables: await variables?.(),
          ...(options || {}),
        });
      } catch (e) {
        addNotification({
          type: 'toast',
          level: 'error',
          content: `Something went wrong. Check your internet connection.`,
        });
      }

      setLoading(false);
    },
    {
      loading,
    },
  ];
};

export default useMutationHandler;
