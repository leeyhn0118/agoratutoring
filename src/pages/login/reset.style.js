import styled from 'styled-components';

import COMP1 from 'src/components/Button';

export const LoginResetPage = styled.div`
  margin: 32px auto 120px;
  max-width: 408px;
  padding: 0 16px;
`;

export const Title = styled.h3`
  ${({ theme }) => theme.css.h3};

  margin: 0 0 24px;
`;

export const Text = styled.p`
  ${({ theme }) => theme.css.p1};

  margin: 0 0 24px;
`;

export const Button = styled(COMP1)`
  display: block;
  width: 100%;
  margin-bottom: 16px;
`;

export const ForgotLink = styled.a`
  display: block;
  width: fit-content;
  margin: 0 auto;
  text-align: center;
  color: ${({ theme }) => theme.color.blue.primary};
`;
