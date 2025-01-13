import styled, { css } from "styled-components";

import COMP1 from 'src/components/Button';
import COMP2 from 'src/components/Sort';

export const SearchFilter = styled.div`
  ${({ $show }) => $show && css`
    padding: 0 16px;
    margin: 24px 0 60px;
    border-bottom: 2px solid ${({ theme }) => theme.bg.medium};
  `}
  

  @media(min-width: ${({ theme }) => theme.size.lg}) {
    padding: 0 48px;
    margin: 24px 0 60px;
    border-bottom: 2px solid ${({ theme }) => theme.bg.medium};
  }
`;

export const Title = styled.h2`
  ${({ theme }) => theme.css.h2}

  display: ${({ $show }) => $show ? 'block' : 'none'};
  margin: 0 0 32px;

  @media(min-width: ${({ theme }) => theme.size.lg}) {
    display: block;
  }
`;

export const Wrapper = styled.div`
  display: block;

  ${({ $show }) => $show && css`
    margin: 0 0 24px;
  `};

  @media(min-width: ${({ theme }) => theme.size.lg}) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-direction: row-reverse;
    margin: 0 0 24px;
  }
`;

export const FilterMenu = styled.div`
  position: fixed;
  bottom:0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  padding: 8px 16px;
  justify-content: space-between;
  background: ${({ theme }) => theme.bg.base};
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.3);

  @media(min-width: ${({ theme }) => theme.size.lg}) {
    position: static;
    bottom: auto;
    left: auto;
    right: auto;
    background: none;
    box-shadow: none;
    padding: 0;
  }
`;

export const Sort = styled(COMP2)`
  display: ${({ $show }) => $show ? 'block' : 'none'};

  @media(min-width: ${({ theme }) => theme.size.lg}) {
    display: block;
  }
`;

export const Button = styled(COMP1)`
  width: auto;
  display: flex;
  text-transform: none;
`;

export const ViewButton = styled(COMP1)`
  width: auto;
  display: flex;
  text-transform: none;

  @media(min-width: ${({ theme }) => theme.size.lg}) {
    display: none;
  }
`;

export const SubmitButton = styled(COMP1)`
  width: 100%;
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  margin: -4px 4px -4px -4px;
`;