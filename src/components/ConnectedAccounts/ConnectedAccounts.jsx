import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { Check, Close } from '@styled-icons/material-rounded';

import { useMutation } from '@apollo/client';
import FacebookLogin from '@greatsumini/react-facebook-login';

import NotificationContext from 'src/contexts/NotificationContext';
import config from 'src/config';
import Modal from 'src/components/Modal';

import {
  useGoogleLoginHandler,
  useLinkedInLoginHandler,
  LoginFacebookSuccessHandler,
  LoginLinkedInSuccessHandler,
  ErrorHandler,
} from 'src/utilities/social/signup';
import query from './ConnectedAccounts.gql';
import * as S from './ConnectedAccounts';

const ConnectedAccounts = ({
  open,
  close,
  className,
  socialMediaAccounts,
  isPasswordRequired,
}) => {
  const { addNotification } = useContext(NotificationContext);
  const tooltipMessage = 'You cannot disconnect your only connected account.';

  const [disconnectAccount] = useMutation(query.disconnectSocialMediaAccount, {
    onCompleted: () => {
      window.location.reload();
    },
    onError: () => {
      ErrorHandler(addNotification);
    },
  });

  const [connectAccount] = useMutation(query.connectSocialMediaAccount, {
    onCompleted: () => {
      window.location.reload();
    },
    onError: () => {
      ErrorHandler(addNotification);
    },
  });

  const googleLogin = useGoogleLoginHandler(
    config,
    connectAccount,
    addNotification
  );
  const { linkedInLogin } = useLinkedInLoginHandler(
    config,
    (code) => LoginLinkedInSuccessHandler(code, connectAccount),
    addNotification
  );

  const disconnectAccountHandler = async (socialMediaAccountType) => {
    const input = {
      socialMediaAccountType,
    };
    await disconnectAccount({ variables: { input } });
  };

  const handleFacebookClick = (facebookProps, renderProps) => {
    if (facebookProps.type === 'connect') {
      return renderProps.onClick();
    }
    return disconnectAccountHandler('facebook');
  };

  const getSocialMediaButtonProps = (socialMediaAccount) => {
    const isConnected = socialMediaAccounts.includes(socialMediaAccount);

    return {
      label: isConnected ? 'Disconnect' : 'Connect',
      icon: isConnected ? Check : Close,
      iconColor: isConnected ? 'green' : 'red',
      type: isConnected ? 'disconnect' : 'connect',
      disabled:
        isConnected && !isPasswordRequired && socialMediaAccounts.length < 2,
    };
  };

  const googleProps = getSocialMediaButtonProps('google');
  const facebookProps = getSocialMediaButtonProps('facebook');
  const linkedInProps = getSocialMediaButtonProps('linkedin');

  return (
    <Modal
      title="Your Connected Accounts"
      position="center"
      open={open}
      close={close}
      className={className}
      contentLabel="Connected Accounts Modal"
    >
      <S.SocialLoginButtonsContainer>
        <S.SocialLoginButtonWrapper>
          <S.SocialLoginButton
            onClick={() =>
              googleProps.type === 'connect'
                ? googleLogin()
                : disconnectAccountHandler('google')
            }
            disabled={googleProps.disabled}
          >
            <S.GoogleIcon />
            <S.SocialLoginButtonText>
              {googleProps.label} Google Account
            </S.SocialLoginButtonText>
            <S.Icon as={googleProps.icon} color={googleProps.iconColor} />
          </S.SocialLoginButton>
          {googleProps.disabled && <S.Tooltip>{tooltipMessage}</S.Tooltip>}
        </S.SocialLoginButtonWrapper>
        <FacebookLogin
          appId={config.FACEBOOK_APP_ID}
          onFail={() => ErrorHandler(addNotification)}
          onProfileSuccess={(response) =>
            LoginFacebookSuccessHandler(response, connectAccount)
          }
          render={(renderProps) => (
            <S.SocialLoginButtonWrapper>
              <S.SocialLoginButton
                onClick={() => handleFacebookClick(facebookProps, renderProps)}
                disabled={facebookProps.disabled}
              >
                <S.FacebookIcon />
                <S.SocialLoginButtonText>
                  {facebookProps.label} Facebook Account
                </S.SocialLoginButtonText>
                <S.Icon
                  as={facebookProps.icon}
                  color={facebookProps.iconColor}
                />
              </S.SocialLoginButton>
              {facebookProps.disabled && (
                <S.Tooltip>{tooltipMessage}</S.Tooltip>
              )}
            </S.SocialLoginButtonWrapper>
          )}
        />
        <S.SocialLoginButtonWrapper>
          <S.SocialLoginButton
            onClick={
              linkedInProps.type === 'connect'
                ? linkedInLogin
                : () => disconnectAccountHandler('linkedin')
            }
            disabled={linkedInProps.disabled}
          >
            <S.LinkedinIcon />
            <S.SocialLoginButtonText>
              {linkedInProps.label} LinkedIn Account
            </S.SocialLoginButtonText>
            <S.Icon as={linkedInProps.icon} color={linkedInProps.iconColor} />
          </S.SocialLoginButton>
          {linkedInProps.disabled && <S.Tooltip>{tooltipMessage}</S.Tooltip>}
        </S.SocialLoginButtonWrapper>
      </S.SocialLoginButtonsContainer>
    </Modal>
  );
};

ConnectedAccounts.defaultProps = {
  className: undefined,
};

ConnectedAccounts.propTypes = {
  open: propTypes.bool.isRequired,
  close: propTypes.func.isRequired,
  className: propTypes.string,
  socialMediaAccounts: propTypes.arrayOf(propTypes.string).isRequired,
  isPasswordRequired: propTypes.bool.isRequired,
};

export default ConnectedAccounts;
