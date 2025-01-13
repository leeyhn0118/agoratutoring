import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import useMutationHandler from 'src/hooks/useMutationHandler';

import query from './verify.gql';
import * as S from './verify.style';

const ProfileVerifyPage = () => {
  const {
    query: { token },
  } = useRouter();
  const [updateVerify, { loading }] = useMutationHandler(query.updateVerify, {
    variables: () => ({ input: { token } }),
    onCompleted: ({ router, addNotification }) => {
      addNotification({
        type: 'toast',
        level: 'success',
        timeout: 10000,
        content: 'Your email has been verified successfully.',
      });
      router.push('/signup/flow');
    },
  });

  return (
    <S.ProfileVerifyPage>
      <Head>
        <title>Verify Email | Agora Tutoring</title>
      </Head>
      <S.Title>Verify Your Email Address</S.Title>
      <S.Text>
        Click the button below to verify your email address and continue the
        account registration process.
      </S.Text>
      <S.Button loading={loading} onClick={updateVerify}>
        Verify Email Address
      </S.Button>
    </S.ProfileVerifyPage>
  );
};

ProfileVerifyPage.getInitialProps = async ({ redirect, query: { token } }) => {
  if (!token) {
    redirect('/');
  }

  return {};
};

export default ProfileVerifyPage;
