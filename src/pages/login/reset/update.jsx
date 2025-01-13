import React from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useRouter } from 'next/router';
import Head from 'next/head';

import useInputFormHandler from 'src/hooks/useInputFormHandler';

import Form from 'src/components/Form';
import FormMessage from 'src/components/FormMessage';
import { Password } from 'src/components/Inputs';

import query from './update.gql';
import * as S from './update.style';

const UpdateLoginResetPage = () => {
  const {
    query: { token },
  } = useRouter();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [handleSubmit, { loading, control, formMessage }] = useInputFormHandler(
    query.updateReset,
    {
      variables: async () => ({
        input: {
          token,
          captcha: await executeRecaptcha('updateReset'),
        },
      }),
      onCompleted: ({ router, addNotification }) => {
        addNotification({
          type: 'toast',
          level: 'success',
          timeout: 10000,
          content: 'Your password has been reset successfully.',
        });
        router.push('/login');
      },
    }
  );

  return (
    <S.UpdateLoginResetPage>
      <Head>
        <title>Reset Password | Agora Tutoring</title>
      </Head>
      <S.Title>Reset Your Password</S.Title>
      <S.Text>
        Enter a new password to use when logging into your account.
      </S.Text>
      <FormMessage message={formMessage} />
      <Form
        columns={1}
        template={['password', 'submit']}
        onSubmit={handleSubmit}
      >
        <Password
          required
          area="password"
          name="patch.password"
          placeholder="Password"
          displayName="Password"
          control={control}
        />
        <S.Button area="submit" type="submit" loading={loading}>
          Reset Password
        </S.Button>
      </Form>
    </S.UpdateLoginResetPage>
  );
};

UpdateLoginResetPage.getInitialProps = async ({
  redirect,
  query: { token },
}) => {
  if (!token) {
    redirect('/');
  }

  return {};
};

export default UpdateLoginResetPage;
