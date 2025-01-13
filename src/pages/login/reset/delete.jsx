import React from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useRouter } from 'next/router';
import Head from 'next/head';

import useMutationHandler from 'src/hooks/useMutationHandler';

import query from './delete.gql';
import * as S from './delete.style';

const DeleteLoginResetPage = () => {
  const {
    query: { token },
  } = useRouter();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [deleteReset, { loading }] = useMutationHandler(query.deleteReset, {
    variables: async () => ({
      input: {
        token,
        captcha: await executeRecaptcha('deleteReset'),
      },
    }),
    onCompleted: ({ router, addNotification }) => {
      addNotification({
        type: 'toast',
        level: 'success',
        timeout: 10000,
        content: 'Your reset request has been removed successfully.',
      });
      router.push('/');
    },
  });

  return (
    <S.DeleteLoginResetPage>
      <Head>
        <title>Reset Password | Agora Tutoring</title>
      </Head>
      <S.Title>Reset Your Password</S.Title>
      <S.Text>
        If you did not request the password reset that was sent to your email
        address click the button below to remove it.
      </S.Text>
      <S.Button loading={loading} onClick={deleteReset}>
        Reset Password
      </S.Button>
    </S.DeleteLoginResetPage>
  );
};

DeleteLoginResetPage.getInitialProps = async ({
  redirect,
  query: { token },
}) => {
  if (!token) {
    redirect('/');
  }

  return {};
};

export default DeleteLoginResetPage;
