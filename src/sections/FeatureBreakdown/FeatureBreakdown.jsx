import React from 'react';
import propTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import useInputFormHandler from 'src/hooks/useInputFormHandler';

import Form from 'src/components/Form';
import query from '../../pages/profile/settings.gql';
import subscriptionQuery from '../../pages/profile/subscription.gql';
import subscribeQuery from './FeatureBreakdown.gql';

import * as S from './FeatureBreakdown.style';

/* eslint-disable react/no-array-index-key */
const FeatureBreakdown = ({ hideTitle }) => {
  const { data: viewerData } = useQuery(query.viewer);
  const { data: subscriptionData } = useQuery(subscriptionQuery.subscriptions);

  const isLoggedIn = viewerData?.viewer;

  let origin;
  let subscriptionPlanId;

  if (typeof window !== 'undefined') {
    origin = window.location.origin;
  }

  const [handleSubmit, { loading }] = useInputFormHandler(
    subscribeQuery.subscribe,
    {
      variables: async () => ({
        input: {
          userId: viewerData.viewer.id,
          subscriptionPlanId,
          origin,
          currency: 'CAD',
          type: 'subscription',
        },
      }),
      onCompleted: ({ data: session, addNotification }) => {
        const { payment } = session?.subscribe || {};
        if (!payment) {
          addNotification({
            type: 'toast',
            level: 'error',
            content: 'Something went wrong. Please try again later.',
          });
          return;
        }

        const { url } = payment;

        window.location.href = url;
      },
    }
  );

  if (!subscriptionData) return null;

  const head = [
    <S.Header key={0}>
      <S.TableTitle>Features</S.TableTitle>
    </S.Header>,
    ...subscriptionData.subscriptions.map((subscription, index) => {
      const isPaidSubscription = subscription.value > 0;

      const handleFormSubmit = (e) => {
        e.preventDefault();

        subscriptionPlanId = subscription.id;
        handleSubmit();
      };

      const button = !isLoggedIn ? (
        <S.Button outline href="/signup">
          Sign Up Now
        </S.Button>
      ) : (
        <Form columns={1} onSubmit={handleFormSubmit} template={[]}>
          <S.SubscriptionButtonWrapper>
            <S.Button outline type="submit" loading={loading}>
              Subscribe
            </S.Button>
          </S.SubscriptionButtonWrapper>
        </Form>
      );

      return (
        <S.Header key={index + 1}>
          {subscription.name}
          <S.Price>
            <span>${subscription.value}</span> / {subscription.type}
          </S.Price>
          {isPaidSubscription && button}
        </S.Header>
      );
    }),
  ];

  const allFeatures = Array.from(
    new Set(
      subscriptionData.subscriptions.flatMap((subscription) =>
        subscription.features.map((feature) => feature.name)
      )
    )
  );

  const body = allFeatures.map((featureName) => [
    featureName,
    ...subscriptionData.subscriptions.map((subscription) => {
      const feature = subscription.features.find((f) => f.name === featureName);
      return feature ? feature.available : false;
    }),
  ]);

  return (
    <S.FeatureBreakdown>
      {!hideTitle && <S.Title>Pricing and features.</S.Title>}
      <S.Wrapper>
        <S.Table>
          <S.Head>
            <S.Row>{head}</S.Row>
          </S.Head>
          <S.Body>
            {body.map((row, i) => (
              <S.Row key={i}>
                {row.map((column, j) => {
                  if (typeof column === 'boolean' && column === true) {
                    return (
                      <S.Data key={j}>
                        <S.Checkmark />
                      </S.Data>
                    );
                  }

                  if (typeof column === 'boolean' && column === false) {
                    return <S.Data key={j} />;
                  }

                  return <S.Data key={j}>{column}</S.Data>;
                })}
              </S.Row>
            ))}
          </S.Body>
        </S.Table>
      </S.Wrapper>
      <S.Indicator>
        <S.IndicatorIcon />
        <S.IndicatorText>Slide to the left to compare</S.IndicatorText>
      </S.Indicator>
    </S.FeatureBreakdown>
  );
};

FeatureBreakdown.defaultProps = {
  hideTitle: false,
};

FeatureBreakdown.propTypes = {
  hideTitle: propTypes.bool,
};

export default FeatureBreakdown;
