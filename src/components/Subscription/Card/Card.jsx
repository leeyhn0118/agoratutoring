import React from 'react';
import propTypes from 'prop-types';

import useInputFormHandler from 'src/hooks/useInputFormHandler';
import { convertTimestampToDate } from 'src/utilities/convertTimestampToDate';

import Form from 'src/components/Form';

import query from './Card.gql';

import * as S from './Card.style';

const Card = ({ userSubscription, userSubscriptionData }) => {
  let origin;

  if (typeof window !== 'undefined') {
    origin = window.location.origin;
  }

  const [handleSubmit, { loading }] = useInputFormHandler(
    query.manageSubscription,
    {
      variables: async () => ({
        input: {
          origin,
        },
      }),
      onCompleted: ({ data: session, addNotification }) => {
        const { subscription } = session?.manageSubscription || {};
        if (!subscription) {
          addNotification({
            type: 'toast',
            level: 'error',
            content: 'Something went wrong. Please try again later.',
          });
          return;
        }

        const { url } = subscription;

        window.location.href = url;
      },
    }
  );

  return (
    <>
      <S.Title>Your subscription plan:</S.Title>
      <S.SubscriptionCard>
        <S.CardTitle>{userSubscription.name}</S.CardTitle>
        <S.Price>
          <span>${userSubscription.value}</span> / {userSubscription.type}
        </S.Price>
        <S.CardDescription>
          You have access to all our features till{' '}
          {convertTimestampToDate(
            userSubscriptionData?.userSubscription?.endDate
          )?.slice(0, 10)}
          !
        </S.CardDescription>

        <Form columns={1} template={['submit']} onSubmit={handleSubmit}>
          <S.Button outline area="submit" type="submit" loading={loading}>
            Manage Subscription
          </S.Button>
        </Form>
      </S.SubscriptionCard>
    </>
  );
};

Card.propTypes = {
  userSubscription: propTypes.object.isRequired,
  userSubscriptionData: propTypes.object.isRequired,
};

export default Card;
