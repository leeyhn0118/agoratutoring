import styled from 'styled-components';

import COMP1 from 'src/components/ProgressBar';

export const SignupFlow = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 16px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text.light};
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const PageIndicator = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text.light};
`;

export const Title = styled.h3`
  ${({ theme }) => theme.css.h3};
  font-size: 36px;
  font-weight: bold;
  max-width: 640px;
  margin: 0 auto 32px;
  text-align: left;
  letter-spacing: -1.5px;
  margin-top: 30px;
`;

export const ProgressBar = styled(COMP1)`
  max-width: 640px;
  margin: 0 auto 20px;
`;
