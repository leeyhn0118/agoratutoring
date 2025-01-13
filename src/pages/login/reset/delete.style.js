import styled from 'styled-components';

import COMP1 from 'src/components/Button';

export const DeleteLoginResetPage = styled.div`
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
`;
