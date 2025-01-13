import React from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import Head from 'next/head';
import Link from 'next/link';

import useInputFormHandler from 'src/hooks/useInputFormHandler';

import Form from 'src/components/Form';
import FormMessage from 'src/components/FormMessage';
import { Text, Password } from 'src/components/Inputs';
import SocialLogin from 'src/sections/SocialLogin/SocialLogin';
import SignFooter from 'src/sections/SignFooter';

import query from './login.gql';
import * as S from './login.style';

const LoginPage = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [handleSubmit, { loading, control, formMessage }] = useInputFormHandler(
    query.loginViewer,
    {
      variables: async () => ({
        input: {
          captcha: await executeRecaptcha('loginViewer'),
        },
      }),
      update: (cache) => {
        cache.modify({
          id: 'ROOT_QUERY',
          fields: { viewer: () => ({ __ref: 'Viewer:{}' }) },
        });
      },
      onCompleted: ({ data, router }) => {
        const completed = data.loginViewer.viewer.roles.includes('completed');
        router.push(completed ? '/' : '/signup/flow');
      },
    }
  );

  return (
    <>
      <S.LoginPage>
        <Head>
          <title>Login | Agora Tutoring</title>
        </Head>
        <FormMessage message={formMessage} />
        <S.Hero>
          <S.HeroTitle>
            <S.StudentsWrapper>
              <S.TitleText>For</S.TitleText>
              <S.TitleText>Students</S.TitleText>
            </S.StudentsWrapper>
            <S.TitleWrapper>
              <S.TitleText>For</S.TitleText>
              <S.TitleText>Tutors</S.TitleText>
            </S.TitleWrapper>
          </S.HeroTitle>
          <S.HeroContent>
            <S.ContentWrapper>
              <S.Glasses />
              <S.ContentTitle>Search for a tutor</S.ContentTitle>
              <S.ContentText>
                Whether you know what you want to learn or want to explore
                what’s out there, use Agora to find your tutor.
              </S.ContentText>
            </S.ContentWrapper>
            <S.ContentWrapper>
              <S.Message />
              <S.ContentTitle>Start a conversation</S.ContentTitle>
              <S.ContentText>
                We make it easy to make the initial connection through our
                private messages or direct contact.
              </S.ContentText>
            </S.ContentWrapper>
            <S.ContentWrapper>
              <S.Books />
              <S.ContentTitle>Begin learning!</S.ContentTitle>
              <S.BookContentText>
                Get together with your tutor in public or at your home, and
                level up your skills and knowledge with the help of local
                expertise.
              </S.BookContentText>
            </S.ContentWrapper>
          </S.HeroContent>
        </S.Hero>
        <S.FormWrapper>
          <Form
            columns={1}
            template={['email', 'password', 'persist', 'submit']}
            onSubmit={handleSubmit}
          >
            <S.FormTitle>Sign in to Agora</S.FormTitle>
            <S.TextWrapper>
              <Text
                required
                area="email"
                name="email"
                placeholder="E-mail"
                displayName="E-mail"
                control={control}
              />
              <S.emailIcon />
            </S.TextWrapper>
            <S.TextWrapper>
              <Password
                required
                area="password"
                name="password"
                placeholder="Password"
                displayName="Password"
                control={control}
                validators={false}
              />
              <S.lockIcon />
            </S.TextWrapper>
            <S.Button area="submit" type="submit" loading={loading}>
              SIGN IN BY EMAIL
            </S.Button>
            <SocialLogin />
            <S.SignUpWrapper>
              <S.ForgotLink>Don’t have an account yet?</S.ForgotLink>
              <Link passHref href="/signup" style={{ textDecoration: 'none' }}>
                <S.SignUpLink>Sign-Up</S.SignUpLink>
              </Link>
            </S.SignUpWrapper>
          </Form>
        </S.FormWrapper>
      </S.LoginPage>
      <SignFooter />
    </>
  );
};

LoginPage.getInitialProps = async ({ redirect, apolloClient }) => {
  const { data } = await apolloClient.query({ query: query.viewer });

  if (data && data.viewer) {
    redirect('/');
  }

  return {};
};

export default LoginPage;
