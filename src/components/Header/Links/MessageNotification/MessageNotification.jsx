import { useQuery, useSubscription } from '@apollo/client';

import query from './MessageNotification.gql';
import * as S from './MessageNotification.style';

const MessageNotification = () => {
  const { data } = useQuery(query.viewer);
  useSubscription(query.chatUpdated, {
    shouldResubscribe: true,
  });

  if (!data?.viewer?.hasUnreadMessages) return null;

  return <S.MessageNotification />;
};

export default MessageNotification;
