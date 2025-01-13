import propTypes from 'prop-types';
import Head from 'next/head';
import Script from 'next/script';
import { ThemeProvider } from 'styled-components';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { NextQueryParamProvider } from 'next-query-params';
import Donation from 'src/components/Donation';

import theme from 'src/theme';
import config from 'src/config';

import { NotificationProvider } from 'src/contexts/NotificationContext';

import Header from 'src/components/Header';
import Notifications from 'src/components/Notifications';

import { useState } from 'react';
import * as S from './Layout.style';

const Layout = ({ children }) => {
  const [openDonationModal, setOpenDonationModal] = useState(false);

  return (
    <NextQueryParamProvider>
      <GoogleReCaptchaProvider reCaptchaKey={config.RECAPTCHA_KEY}>
        <ThemeProvider theme={theme}>
          <NotificationProvider>
            <S.GlobalStyle />
            <Head>
              <link
                crossOrigin="true"
                href="https://fonts.googleapis.com/css?family=Roboto:400,500,600&display=swap"
                rel="preconnect"
              />
              <meta charSet="utf-8" />
              <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
              <meta
                content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
                name="viewport"
              />
            </Head>
            <Script
              strategy="beforeInteractive"
              src={`https://maps.googleapis.com/maps/api/js?key=${config.GOOGLE_API_KEY}&libraries=places`}
            />
            <Header setOpenDonationModal={() => setOpenDonationModal(true)} />
            <Donation
              open={openDonationModal}
              close={() => setOpenDonationModal(false)}
            />
            <Notifications />
            {children}
          </NotificationProvider>
        </ThemeProvider>
      </GoogleReCaptchaProvider>
    </NextQueryParamProvider>
  );
};

Layout.propTypes = {
  children: propTypes.node.isRequired,
};

export default Layout;
