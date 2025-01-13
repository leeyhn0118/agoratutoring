import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';
import { useLinkedIn } from 'react-linkedin-login-oauth2';

export const ErrorHandler = (addNotification) => {
  addNotification({
    type: 'toast',
    level: 'error',
    content: `Something went wrong. Check your internet connection.`,
  });
};

export const useGoogleLoginHandler = (config, customLogin, addNotification) => {
  const LoginGoogleSuccessHandler = async (response) => {
    const { access_token: accessToken } = response;
    const { data } = await axios.get(
      'https://www.googleapis.com/oauth2/v1/userinfo',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const {
      given_name: firstName,
      family_name: lastName,
      email,
      picture: avatarUrl,
    } = data;

    const input = {
      firstName,
      lastName,
      email,
      avatarUrl,
      socialMediaAccountType: 'google',
    };

    await customLogin({ variables: { input } });
  };

  return useGoogleLogin({
    onSuccess: LoginGoogleSuccessHandler,
    onError: (error) => ErrorHandler(addNotification, error),
  });
};

export const useLinkedInLoginHandler = (
  config,
  LoginLinkedInSuccess,
  addNotification
) =>
  useLinkedIn({
    clientId: config.LINKEDIN_CLIENT_ID,
    scope: 'email openid profile w_member_social',
    redirectUri: `${
      typeof window === 'object' && window.location.origin
    }/linkedin`,
    onSuccess: (code) => LoginLinkedInSuccess(code),
    onError: (error) => ErrorHandler(addNotification, error),
  });

export const LoginFacebookSuccessHandler = async (response, customLogin) => {
  const { name, email, picture } = response;
  const input = {
    firstName: name.split(' ')[0],
    lastName: name.split(' ')[1],
    email,
    avatarUrl: picture?.data?.url,
    socialMediaAccountType: 'facebook',
  };

  await customLogin({ variables: { input } });
};

export const LoginLinkedInSuccessHandler = async (code, customLogin) => {
  const input = {
    code,
    redirectUri: `${
      typeof window === 'object' && window.location.origin
    }/linkedin`,
    socialMediaAccountType: 'linkedin',
  };

  await customLogin({ variables: { input } });
};
