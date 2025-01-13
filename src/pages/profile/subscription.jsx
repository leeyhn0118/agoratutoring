import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/client';

import Card from 'src/components/Subscription/Card/Card';
import PaymentHistory from 'src/components/Subscription/PaymentHistory/PaymentHistory';
import FeatureBreakdown from 'src/sections/FeatureBreakdown';

import query from './subscription.gql';
import viewerQuery from './settings.gql';

import * as S from './subscription.style';

const emptyState = (
  <>
    <S.Title>No subscription plan :(</S.Title>
    <S.EmptyStateDescription>
      Compare our plans and choose the one that fits your needs!
    </S.EmptyStateDescription>
    <FeatureBreakdown hideTitle />
  </>
);

const SubscriptionPage = () => {
  const { data: paymentData } = useQuery(query.payments);
  const { data: userSubscriptionData } = useQuery(query.userSubscription);
  const { data: subscriptionsData } = useQuery(query.subscriptions);
  let userSubscription = null;

  if (
    userSubscriptionData?.userSubscription?.subscriptionPlanId &&
    subscriptionsData?.subscriptions
  ) {
    [userSubscription] = subscriptionsData?.subscriptions?.filter(
      (subscription) =>
        subscription.id ===
        userSubscriptionData.userSubscription.subscriptionPlanId
    );
  }

  const paymentsList = paymentData?.payments || [];

  return (
    <S.SubscriptionPage>
      <Head>
        <title>Profile Subscription | Agora Tutoring</title>
      </Head>
      <S.SubscriptionWrapper>
        {userSubscription ? (
          <Card
            userSubscription={userSubscription}
            userSubscriptionData={userSubscriptionData}
          />
        ) : (
          emptyState
        )}
      </S.SubscriptionWrapper>
      {paymentsList.length > 0 && (
        <PaymentHistory paymentsList={paymentsList} />
      )}
    </S.SubscriptionPage>
  );
};

SubscriptionPage.getInitialProps = async ({ redirect, apolloClient }) => {
  const { data } = await apolloClient.query({ query: viewerQuery.viewer });

  if (!data || !data.viewer) {
    redirect('/login');
  }

  return {};
};

export default SubscriptionPage;
