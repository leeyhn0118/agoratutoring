import React from 'react';

import Head from 'next/head';
import * as S from './Payment.style';

const SuccessPaymentPage = () => (
  <S.Container>
    <Head>
      <title>Payment Success | Agora Tutoring</title>
    </Head>
    <S.ImageWrapper>
      <S.Success />
    </S.ImageWrapper>
    <S.Title>Payment Successful</S.Title>
    <S.Subtitle>Thank you for your payment. You help us grow!</S.Subtitle>
    <S.ButtonWrapper>
      <S.Link href="/">Back to Home</S.Link>
    </S.ButtonWrapper>
  </S.Container>
);

export default SuccessPaymentPage;
