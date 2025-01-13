import React, { useContext } from 'react';

import FacebookLogin from '@greatsumini/react-facebook-login';
import { useMutation } from '@apollo/client';

import NotificationContext from 'src/contexts/NotificationContext';
import config from 'src/config';

import {
  useGoogleLoginHandler,
  useLinkedInLoginHandler,
  LoginFacebookSuccessHandler,
  LoginLinkedInSuccessHandler,
  ErrorHandler,
} from 'src/utilities/social/signup';
import customLoginQuery from './custom-login.gql';
import * as S from './SocialLogin.style';

const SocialLogin = () => {
  const { addNotification } = useContext(NotificationContext);

  const [customLogin] = useMutation(customLoginQuery.customLoginViewer, {
    onCompleted: () => {
      window.location.href = '/signup/flow';
    },
    onError: () => {
      ErrorHandler(addNotification);
    },
  });

  const googleLogin = useGoogleLoginHandler(
    config,
    customLogin,
    addNotification
  );
  const { linkedInLogin } = useLinkedInLoginHandler(
    config,
    (code) => LoginLinkedInSuccessHandler(code, customLogin),
    addNotification
  );

  return (
    <>
      <S.SocialLoginText>Or</S.SocialLoginText>
      <S.SocialLoginWrapper>
        <S.SocialLogin>
          <S.iconWrapper>
            <S.GoogleIcon onClick={() => googleLogin()} />
          </S.iconWrapper>
          <S.iconWrapper>
            <FacebookLogin
              appId={config.FACEBOOK_APP_ID}
              onFail={() => ErrorHandler(addNotification)}
              onProfileSuccess={(response) =>
                LoginFacebookSuccessHandler(response, customLogin)
              }
              render={(renderProps) => (
                <S.FacebookIcon onClick={renderProps.onClick} />
              )}
            />
          </S.iconWrapper>
          <S.iconWrapper>
            <S.LinkedinIcon onClick={linkedInLogin} />
          </S.iconWrapper>
        </S.SocialLogin>
      </S.SocialLoginWrapper>
    </>
  );
};

export default SocialLogin;
