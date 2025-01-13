import React from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import Head from 'next/head';
import Link from 'next/link';

import useInputFormHandler from 'src/hooks/useInputFormHandler';

import Form from 'src/components/Form';
import FormMessage from 'src/components/FormMessage';
import { Email } from 'src/components/Inputs';

import query from './reset.gql';
import * as S from './reset.style';

const LoginResetPage = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [handleSubmit, { loading, control, formMessage }] = useInputFormHandler(
    query.createReset,
    {
      variables: async () => ({
        input: {
          captcha: await executeRecaptcha('createReset'),
        },
      }),
      onCompleted: ({ setFormMessage }) => {
        setFormMessage({
          level: 'success',
          content: 'Password reset sent. Check your inbox.',
        });
      },
    }
  );

  return (
    <S.LoginResetPage>
      <Head>
        <title>Reset Password | Agora Tutoring</title>
      </Head>
      <S.Title>Reset Your Password</S.Title>
      <S.Text>
        Enter your email address and we will send you a link to reset your
        password.
      </S.Text>
      <FormMessage message={formMessage} />
      <Form columns={1} template={['email', 'submit']} onSubmit={handleSubmit}>
        <Email
          required
          area="email"
          name="email"
          placeholder="Email Address"
          displayName="Email Address"
          control={control}
        />
        <S.Button area="submit" type="submit" loading={loading}>
          Request Password Reset
        </S.Button>
      </Form>
      <Link passHref href="/login">
        <S.ForgotLink>Back to login</S.ForgotLink>
      </Link>
    </S.LoginResetPage>
  );
};

LoginResetPage.getInitialProps = async ({ redirect, apolloClient }) => {
  const { data } = await apolloClient.query({ query: query.viewer });

  if (data && data.viewer) {
    redirect('/');
  }

  return {};
};

export default LoginResetPage;
