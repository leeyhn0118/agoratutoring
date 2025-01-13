import React from 'react';

import Head from 'next/head';
import * as S from './Payment.style';

const FailPaymentPage = () => (
  <S.Container>
    <Head>
      <title>Payment Failed | Agora Tutoring</title>
    </Head>
    <S.ImageWrapper>
      <S.Error />
    </S.ImageWrapper>
    <S.Title>Payment Failed</S.Title>
    <S.Subtitle>Something went wrong. Please try again later.</S.Subtitle>
    <S.ButtonWrapper>
      <S.Link href="/">Back to Home</S.Link>
    </S.ButtonWrapper>
  </S.Container>
);

export default FailPaymentPage;
