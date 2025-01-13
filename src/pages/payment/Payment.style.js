import styled from 'styled-components';

import SVG1 from 'src/assets/svg/success.svg';
import SVG2 from 'src/assets/svg/error.svg';

export const Container = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.grey};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const Success = styled(SVG1)`
  width: 60px;
  height: 60px;
`;

export const Error = styled(SVG2)`
  width: 60px;
  height: 60px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.text.primary};
  margin: 32px 0;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text.secondary};
  margin: 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Link = styled.a`
  position: relative;
  display: none;
  height: 34px;
  padding: 8px 16px;
  margin-top: 32px;
  line-height: 1;
  font-size: 14px;
  font-weight: 600;
  border-radius: 4px;
  vertical-align: center;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.text.primary};
  border: 2px solid ${({ theme }) => theme.color.yellow.primary};
  cursor: pointer;
  transition: background 0.25s;

  :hover {
    background: ${({ theme }) => theme.color.blue.hover.dark};
    color: ${({ theme }) => theme.text.white};
    border: 2px solid ${({ theme }) => theme.color.blue.hover.dark };
  }

  :active {
    background: ${({ theme }) => theme.color.blue.active.dark};
  }

  @media(min-width: ${({ theme }) => theme.size.sm}) {
    display: block;
  }
`;