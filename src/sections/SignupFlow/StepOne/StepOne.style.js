import styled from 'styled-components';

import COMP1 from 'src/components/Button';
import SVG1 from "src/assets/svg/logo-dark.svg"

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const BackgroundBlur = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(1px); /* Assuming blur-lg applies an 8px Gaussian blur */
`;

export const StepOne = styled.div`
  max-width: 468px;
  margin: 0 auto 24px;
  position: absolute;
  top: 35%;
  left: 35%;
  background-color: ${({ theme }) => theme.bg.base};
  border: 2px solid black;
  border-radius: 20px;
  padding: 24px;
`;

export const Logo = styled(SVG1)`
  display: block;
  width: 100%;
  max-width: 376px;
  margin: 0 auto 24px;
`;

export const Title = styled.h3`
  ${({ theme }) => theme.css.h3};
  max-width: 468px;
  margin: 24px 0;
  text-align: center;
  font-weight: bold;
`;

export const Text = styled.div`
  font-size: 12px;
  margin: 12px 0;
  text-align: center;
`;

export const InlineButton = styled.button`
  cursor: pointer;
  display: inline;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: underline;
  color: ${({ theme }) => theme.color.blue.primary};
`;

export const Button = styled(COMP1)`
  display: block;
  width: 100%;
  margin: 0 auto;
  max-width: 320px; 
`;
