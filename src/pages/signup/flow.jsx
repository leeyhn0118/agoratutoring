import React from 'react';
import Head from 'next/head';

import SignupFlow from 'src/sections/SignupFlow';

import query from './flow.gql';
import * as S from './flow.style';

const SignupFlowPage = () => (
  <S.SignupFlowPage>
    <Head>
      <title>Signup | Agora Tutoring</title>
    </Head>
    <SignupFlow />
  </S.SignupFlowPage>
);

SignupFlowPage.getInitialProps = async ({ redirect, apolloClient }) => {
  const { data } = await apolloClient.query({ query: query.viewer });

  if (!data || !data.viewer) {
    redirect('/');
  }

  if (data.viewer.roles.includes('completed')) {
    redirect('/profile/settings');
  }

  return {};
};

export default SignupFlowPage;
