import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import Head from 'next/head';
import Link from 'next/link';
import SignFooter from 'src/sections/SignFooter';
import StepOne from 'src/sections/SignupFlow/StepOne/StepOne';
import { isUsername } from 'src/utilities/validators';

import useInputFormHandler from 'src/hooks/useInputFormHandler';

import Form from 'src/components/Form';
import FormMessage from 'src/components/FormMessage';
import { Text, Email, Password } from 'src/components/Inputs';
import SocialSignup from 'src/sections/SocialLogin/SocialSignup';
import { useQuery } from '@apollo/client';
import vrquery from '../sections/SignupFlow/SignupFlow.gql';
import query from './signup.gql';
import * as S from './signup.style';

const SignupPage = () => {
  const [step, setStep] = useState(false);
  const [portalRoot, setPortalRoot] = useState(null);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const [handleSubmit, { loading, control, formMessage }] = useInputFormHandler(
    query.createViewer,
    {
      variables: async () => ({
        input: {
          captcha: await executeRecaptcha('createViewer'),
        },
      }),
      update: (cache) => {
        cache.modify({
          id: 'ROOT_QUERY',
          fields: { viewer: () => ({ __ref: 'Viewer:{}' }) },
        });
      },
      onCompleted: ({ router }) => {
        if (step && data?.viewer?.roles?.includes('verified')) {
          router.push('/signup/flow');
        }
      },
    }
  );

  useEffect(() => {
    const rootElem = document.getElementById('__next');
    setPortalRoot(rootElem);
  }, []);

  const { data } = useQuery(vrquery.viewer, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
  });

  return (
    <>
      {step ? ReactDOM.createPortal(<StepOne />, portalRoot) : null}
      <S.SignupPage>
        <Head>
          <title>Sign Up | Agora Tutoring</title>
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
            columns={2}
            template={[
              'username username',
              'email email',
              'password password',
              'submit submit',
            ]}
            onSubmit={handleSubmit}
          >
            <S.FormTitle>Create your profile</S.FormTitle>
            <S.TextWrapper>
              <Text
                required
                area="username"
                name="username"
                placeholder="FULL NAME"
                displayName="Username"
                control={control}
                validators={[isUsername]}
              />
              <S.humanIcon />
            </S.TextWrapper>
            <S.TextWrapper>
              <Email
                required
                area="email"
                name="email"
                placeholder="Email"
                displayName="Email"
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
              />
              <S.lockIcon />
            </S.TextWrapper>
            <S.Button area="submit" type="submit" loading={loading}>
              Create Account
            </S.Button>
            <SocialSignup onSignup={() => setStep(true)} />
            <S.SignUpWrapper>
              <S.ForgotLink>Already have an account?</S.ForgotLink>
              <Link passHref href="/login" style={{ textDecoration: 'none' }}>
                <S.SignUpLink>Sign-In</S.SignUpLink>
              </Link>
            </S.SignUpWrapper>
          </Form>
        </S.FormWrapper>
      </S.SignupPage>
      <SignFooter />
    </>
  );
};

SignupPage.getInitialProps = async ({ redirect, apolloClient }) => {
  const { data } = await apolloClient.query({ query: query.viewer });

  if (data && data.viewer) {
    redirect('/');
  }

  return {};
};

export default SignupPage;
