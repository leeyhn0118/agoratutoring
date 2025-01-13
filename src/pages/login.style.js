import styled from 'styled-components';

import COMP1 from 'src/components/Button';
import SVG1 from 'src/assets/svg/search.svg';
import SVG2 from 'src/assets/svg/Messages.svg';
import SVG3 from 'src/assets/svg/openBook.svg';
import SVG4 from 'src/assets/svg/regEmail.svg';
import SVG5 from 'src/assets/svg/lock.svg';

export const LoginPage = styled.div`
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
`;

export const HeroTitle = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.bg.active.base};
  border-radius: 20px;
  width: 60%;
  justify-content: space-evenly;
  align-items: center;
  padding: 3px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const StudentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.blue.primary};
  width: 50%;
  border-radius: 20px;
`;


export const TitleText = styled.div`
  line-height: 1.8;
  color: ${({ theme }) => theme.text.white};
  font-weight: 600;
  font-size: 16px;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

export const Glasses = styled(SVG1)`
  width: 100px;
  height: 100px;
`;

export const Message = styled(SVG2)`
  width: 100px;
  height: 100px;
`;

export const Books = styled(SVG3)`
  width: 100px;
  height: 100px;
`;

export const ContentTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

export const ContentText = styled.div`
  font-size: 16px;
  text-align: center;
  width: 60%;
  margin-top: 16px;
`;


export const BookContentText = styled.div`
  font-size: 16px;
  text-align: center;
  width: 70%;
  margin-top: 16px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 50%;
`;

export const FormTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-top: 40px;
  color: ${({ theme }) => theme.color.blue.primary};
`;

export const TextWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const emailIcon = styled(SVG4)`
  width: 35px;
  height: 35px;
  padding: 5px;
  position: absolute;
  top: 16%;
  left: 14%;
`;
export const lockIcon = styled(SVG5)`
  width: 35px;
  height: 35px;
  padding: 5px;
  position: absolute;
  top: 15%;
  left: 14%;

`;


export const Button = styled(COMP1)`
  display: block;
  width: 80%;
  font-weight: 600;
  font-size: 14px;
  padding: 16px;
`;

export const SignUpWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 32px 0;
`;

export const SignUpLink = styled.a`
  text-decoration: underline;
  font-weight: 600;
`;

export const ForgotLink = styled.a`
  display: block;
  width: fit-content;
  margin: 0 auto;
  text-align: center;
  color: ${({ theme }) => theme.color.blue.primary};
`;
