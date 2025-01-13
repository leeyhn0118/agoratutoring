import styled from 'styled-components';

import COMP1 from 'src/components/Button';

export const SearchMap = styled.div`
  position: relative;
  display: ${({ $show }) => $show ? 'block' : 'none'};

  width: 100%;
  height: 100%;

  @media(min-width: ${({ theme }) => theme.size.lg}) {
    display: block;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  left: 0;
  right: 0;
  top: 16px;
`;

export const Button = styled(COMP1)`

`;
