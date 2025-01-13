import styled from 'styled-components';

import SVG2 from 'src/assets/svg/linkedin.svg';
import SVG3 from 'src/assets/svg/google.svg';
import SVG4 from 'src/assets/svg/facebook.svg';

export const SocialLoginButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`;

export const SocialLogin = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
`;

export const SocialLoginText = styled.span`
  font-size: 18px;
  margin: 16px 0;
  text-align: center;
  display: block;

  ::before,
  ::after {
    content: '';
    display: inline-block;
    width: 20%;
    height: 1px;
    margin: 0 12px;
    background-color: ${({ theme }) => theme.color.blue.primary};
    vertical-align: middle;
  }
`;

export const LinkedinIcon = styled(SVG2)`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const GoogleIcon = styled(SVG3)`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const FacebookIcon = styled(SVG4)`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const SocialLoginButton = styled.button`
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.blue.primary};
  border-radius: 6px;
  padding: 8px 16px;
  margin: 8px 0;
  width: 370px;
  max-width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.4s;

  :hover {
    background-color: ${({ theme }) => theme.color.blue.light};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export const SocialLoginButtonText = styled.span`
  font-size: 16px;
  margin-left: 32px;
  font-weight: 600;
  text-align: center;
`;

export const Icon = styled.svg`
  width: 32px;
  height: 32px;
  margin-left: auto;
`;

export const Tooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.75);
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;

  ${(props) =>
    props.visible &&
    `
    opacity: 1;
    pointer-events: all;
  `}
`;

export const SocialLoginButtonWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${Tooltip} {
    opacity: 1;
  }
`;
