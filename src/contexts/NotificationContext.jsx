import React, { createContext, useState, useRef, useEffect } from 'react';
import propTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import query from './NotificationContext.gql';

const NotificationContext = createContext();

function generateNotificationId() {
  return Math.random().toString(36).substring(2, 9);
}

function getNotificationsByType(queue, type) {
  return Object.values(queue)
    .filter((value) => value !== null && value.type === type)
    .slice(0, 3)
    .reverse();
}

export const NotificationProvider = ({ children }) => {
  const timers = useRef({});
  const router = useRouter();
  const [queue, setQueue] = useState({});
  const { data } = useQuery(query.viewer, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
  });

  const toasts = getNotificationsByType(queue, 'toast');
  const banners = getNotificationsByType(queue, 'banner');

  const addNotification = (notification, inputId) => {
    const id = inputId || generateNotificationId();
    setQueue((state) => ({ ...state, [id]: { id, ...notification } }));
  };

  const getNotification = (id) => queue[id];

  const updateNotification = (id, patch) => {
    if (queue[id]) {
      setQueue((state) => ({ ...state, [id]: { ...state[id], ...patch } }));
    }
  };

  const removeNotification = (id) => {
    if (timers.current[id]) {
      clearTimeout(timers.current[id]);
      timers.current[id] = null;
    }

    setQueue((state) => ({ ...state, [id]: null }));
  };

  for (const { id, timeout } of [...toasts, ...banners]) {
    if (timeout && !timers.current[id]) {
      timers.current[id] = setTimeout(() => {
        removeNotification(id);
      }, timeout);
    }
  }

  // This code shows a notification if an incomplete profile
  // tries to navigate to a page other than the signup flow
  useEffect(() => {
    if (
      data?.viewer &&
      router.pathname !== '/signup/flow' &&
      !getNotification('complete-profile') &&
      !data.viewer.roles.includes('completed')
    ) {
      addNotification(
        {
          type: 'banner',
          level: 'info',
          content: 'You must complete your profile before continuing.',
        },
        'complete-profile'
      );
    }
  }, [router]);

  useEffect(
    () => () => {
      for (const timer of Object.values(timers.current)) {
        if (timer !== null) {
          clearTimeout(timer);
        }
      }
    },
    []
  );

  return (
    <NotificationContext.Provider
      value={{
        toasts,
        banners,
        addNotification,
        getNotification,
        updateNotification,
        removeNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

NotificationProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default NotificationContext;
