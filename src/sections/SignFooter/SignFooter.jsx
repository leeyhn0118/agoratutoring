import React from 'react';
import * as S from './SignFooter.style';

const SignFooter = () => (
  <S.SignFooter>
    <S.FooterWrapper>
      <div>
        <S.LogoIcon />
        <S.LogoWrapper>
          <S.InstaIcon />
          <S.FacebookIcon />
          <S.TwitterIcon />
          <S.PintIcon />
        </S.LogoWrapper>
      </div>
      <S.TextWrapper>
        <S.FooterTitle>AGORA TUTORING</S.FooterTitle>
        <S.FooterText>Find a tutor</S.FooterText>
        <S.FooterText>Become a tutor</S.FooterText>
        <S.FooterText>Safety & security</S.FooterText>
        <S.FooterText>Help Desk</S.FooterText>
      </S.TextWrapper>
      <S.TextWrapper>
        <S.FooterTitle>TUTORS BY SUBJECT</S.FooterTitle>
        <S.FooterText>Math & science Tutors</S.FooterText>
        <S.FooterText>Language Tutors</S.FooterText>
        <S.FooterText>Art Tutors</S.FooterText>
        <S.FooterText>Life skills Tutors</S.FooterText>
      </S.TextWrapper>
      <S.TextWrapper>
        <S.FooterTitle>TUTORS BY LOCATION</S.FooterTitle>
        <S.FooterText>Edmonton Tutors</S.FooterText>
        <S.FooterText>Calgary Tutors</S.FooterText>
        <S.FooterText>Vancouver Tutors</S.FooterText>
      </S.TextWrapper>
    </S.FooterWrapper>
  </S.SignFooter>
);

export default SignFooter;
