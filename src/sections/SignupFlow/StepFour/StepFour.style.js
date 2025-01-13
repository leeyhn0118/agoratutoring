import styled from 'styled-components';

import COMP1 from 'src/components/Button';

export const StepFour = styled.div`
  max-width: 640px;
  margin: 0 auto;
`;

export const Title = styled.h4`
  ${({ theme }) => theme.css.h4};

  text-align: center;
`;

export const ButtonWrapper = styled.div`
  margin: 0 0 40px;

  @media(min-width: ${({ theme }) => theme.size.md}) {
    display: flex;
    gap: 32px;
  }
`;

export const Button = styled(COMP1)`
  display: block;
  width: 100%;
  margin: 0 0 16px;

  @media(min-width: ${({ theme }) => theme.size.md}) {
    width: 50%;
  }
`;

export const FullButton = styled(COMP1)`
  display: block;
  width: 100%;

  @media(min-width: ${({ theme }) => theme.size.md}) {
    width: 50%;
    margin: 0 auto;
  }
`;
