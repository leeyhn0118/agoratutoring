import styled from 'styled-components';

import { KeyboardArrowDown as SVG1 } from '@styled-icons/material-outlined';

export const Section = styled.div`
  padding: 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.bg.light};
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.p`
  ${({ theme }) => theme.css.h4}

  margin: 0;
  padding: 8px 0;
  color: ${({ theme }) => theme.bg.dark};

  @media(min-width: ${({ theme }) => theme.size.lg}) {
    padding: 0;
    margin: 0 0 8px;
  }
`;

export const ArrowIcon = styled(SVG1)`
  width: 24px;
  color: ${({ theme }) => theme.bg.dark};
  transition: transform 0.25s;
  transform: rotate(${({ $open }) => $open ? '180deg' : '0deg'});

  @media(min-width: ${({ theme }) => theme.size.lg}) {
    display: none;
  }
`;

export const Content = styled.div`
  max-height: ${({ $maxHeight }) => $maxHeight};
  overflow: hidden;
  transition: max-height 0.25s;

  @media(min-width: ${({ theme }) => theme.size.lg}) {
    overflow: auto;
    max-height: none;
  }
`;
