import styled from "styled-components";

import COMP1 from 'src/components/Button';

import COMP2 from 'react-infinite-scroller';

export const SearchList = styled.div`
  display: ${({ $show }) => $show ? 'block' : 'none'};
  padding: 0 16px;

  @media(min-width: ${({ theme }) => theme.size.lg}) {
    display: block;
    padding: 0 48px;
  }
`;

export const Text = styled.p`
  ${({ theme }) => theme.css.h4};

  margin: 0 0 24px;
  text-align: center;
`;

export const Button = styled(COMP1)`
  display: block;
  margin: 0 auto;
  width: fit-content;
`;

export const InfiniteScroll = styled(COMP2)`
  display: ${({ $show }) => $show ? 'flex' : 'none'};
  flex-direction: column;
  padding: 0 16px;
  gap: 24px;

  margin: 0 0 120px;

  @media(min-width: ${({ theme }) => theme.size.lg}) {
    display: flex;
    padding: 0 48px;
  }
`;

export const EndOfResults = styled.p`
  ${({ theme }) => theme.css.p1}

  margin: 24px 0 0;
  text-align: center;
`;