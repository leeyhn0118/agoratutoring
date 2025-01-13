import styled from 'styled-components';

import SVG2 from 'src/assets/svg/linkedin.svg';
import SVG3 from 'src/assets/svg/google.svg';
import SVG4 from 'src/assets/svg/facebook.svg';
import SVG5 from 'src/assets/svg/email.svg';

export const SocialLoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

export const SocialLoginButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 56px;
`;

export const SocialLogin = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
`;

export const SocialLoginText = styled.span`
  font-size: 18px;
  margin: 12px 0 12px 0;
  text-align: center;
  display: block;
  font-weight: 600;

  // ::before,
  // ::after {
  //   content: '';
  //   display: inline-block;
  //   width: 20%;
  //   height: 1px;
  //   margin: 0 12px;
  //   background-color: ${({ theme }) => theme.color.blue.primary};
  //   vertical-align: middle;
  // }
`;

export const iconWrapper = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.bg.light};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20%;
`;

export const LinkedinIcon = styled(SVG2)`
  width: 35px;
  height: 35px;
  cursor: pointer;
  padding:5px;
`;

export const GoogleIcon = styled(SVG3)`
  width: 35px;
  height: 35px;
  cursor: pointer;
  padding:5px;
`;

export const FacebookIcon = styled(SVG4)`
  width: 35px;
  height: 35px;
 cursor: pointer;
  padding:5px;
`;

export const EmailIcon = styled(SVG5)`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const SocialLoginButton = styled.button`
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.blue.primary};
  border-radius: 6px;
  padding: 8px 24px;
  margin: 8px 0;
  width: 300px;
  max-width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.4s;

  :hover {
    background-color: ${({ theme }) => theme.color.blue.secondary};
    color: #fff;
  }
`;

export const SocialLoginButtonText = styled.span`
  font-size: 16px;
  margin-left: 32px;
  font-weight: 600;
  text-align: center;
`;
