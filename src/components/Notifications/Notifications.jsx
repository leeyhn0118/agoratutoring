import React, { useContext } from 'react';
import { Info, Error, Check } from '@styled-icons/material-outlined';

import theme from 'src/theme';

import NotificationContext from 'src/contexts/NotificationContext';

import * as S from './Notifications.style';

const icon = {
  info: Info,
  error: Error,
  success: Check,
};

const color = {
  info: theme.color.blue.dark,
  error: theme.color.red.dark,
  success: theme.color.green.dark,
};

const Notifications = () => {
  const { toasts, banners, removeNotification } =
    useContext(NotificationContext);

  const displayNotification = (notification) => (
    <S.Notification key={notification.id} onClick={notification.onClick}>
      <S.Icon as={icon[notification.level]} $color={color[notification.level]}>
        {notification.content}
      </S.Icon>
      <S.Content>{notification.content}</S.Content>
      <S.CloseButton>
        <S.CloseIcon onClick={() => removeNotification(notification.id)} />
      </S.CloseButton>
    </S.Notification>
  );

  return (
    <>
      <S.Toasts>
        {toasts.length > 0 && (
          <S.Wrapper>{toasts.map(displayNotification)}</S.Wrapper>
        )}
      </S.Toasts>
      <S.Banners>
        {banners.length > 0 && (
          <S.Wrapper>{banners.map(displayNotification)}</S.Wrapper>
        )}
      </S.Banners>
    </>
  );
};

export default Notifications;
