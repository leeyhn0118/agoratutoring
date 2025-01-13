import styled from 'styled-components';

import { KeyboardArrowDown as SVG1 } from '@styled-icons/material-outlined';

export const MapMeta = styled.div`
  grid-area: MapMeta;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  background: ${({ theme }) => theme.bg.medium};
`;

export const TitleWrapper = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-between;

  @media(min-width: ${({ theme }) => theme.size.lg}) {
    display: none;
  }
`;

export const Title = styled.p`
  ${({ theme }) => theme.css.h4}

  margin: 0;
  padding: 8px 0;
  color: ${({ theme }) => theme.bg.dark};
`;

export const ArrowIcon = styled(SVG1)`
  width: 24px;
  color: ${({ theme }) => theme.bg.dark};
  transition: transform 0.25s;
  transform: rotate(${({ $open }) => $open ? '180deg' : '0deg'});
`;

export const Content = styled.div`
  overflow: hidden;
  transition: max-height 0.25s;
  max-height: ${({ $maxHeight }) => $maxHeight};

  @media(min-width: ${({ theme }) => theme.size.lg}) {
    overflow: auto;
    max-height: none;
  }
`;

export const MapWrapper = styled.div`
  height: 240px;
`;
