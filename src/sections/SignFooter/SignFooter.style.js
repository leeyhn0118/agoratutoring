import styled from 'styled-components';

import SVG1 from 'src/assets/svg/logo-light.svg';
import SVG2 from 'src/assets/svg/Winsta.svg';
import SVG3 from 'src/assets/svg/Wfbook.svg';
import SVG4 from 'src/assets/svg/Wtwitter.svg';
import SVG5 from 'src/assets/svg/pint.svg';

export const SignFooter = styled.div`
  background-color: ${({ theme }) => theme.color.blue.dark};
  color: ${({ theme }) => theme.text.white};
  margin-top: 80px;
  padding: 80px 32px 120px 32px;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: 16px;
  padding-top: 15px;

  &&::after {
    position: absolute;
    bottom: -30%;
    content: '';
    display: block;
    width: 15%;
    height: 1px;
    background-color: ${({ theme }) => theme.bg.base};   
}
`;


export const LogoIcon = styled(SVG1)`
  width: 200px;
  height: 80px;
`;

export const InstaIcon = styled(SVG2)`
  width: 45px;
  height: 45px;
  cursor: pointer;
  padding:5px;
  background-color: ${({ theme }) => theme.color.blue.light_dark};
  border-radius: 50%;
`;

export const FacebookIcon = styled(SVG3)`
  width: 45px;
  height: 45px;
  cursor: pointer;
  padding:5px;
  background-color: ${({ theme }) => theme.color.blue.light_dark};
  border-radius: 50%;
`;

export const TwitterIcon = styled(SVG4)`
  width: 45px;
  height: 45px;
 cursor: pointer;
  padding:5px;
  background-color: ${({ theme }) => theme.color.blue.light_dark};
  border-radius: 50%;
`;

export const PintIcon = styled(SVG5)`
  width: 45px;
  height: 45px;
 cursor: pointer;
  padding:5px;
  background-color: ${({ theme }) => theme.color.blue.light_dark};
  border-radius: 50%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FooterTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

export const FooterText = styled.div`
  font-size: 12px;
`;
