import styled, { css } from 'styled-components';

import { Close as SVG1 } from '@styled-icons/material-outlined';

export const Modal = styled.div`
  position: relative;
  overflow-y: auto;
  background: white;
  padding: 16px;
  max-width: 512px;
  width: calc(100vw - 32px);

  ${({ $position }) => $position === 'center' && css`
    border-radius: 8px;
    max-height: calc(100vh - 32px);
  `}

  ${({ $position }) => ($position === 'start' || $position === 'end') && css`
    height: 100vh;
    overflow-y: scroll;
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => theme.css.h3}

  line-height: 1;
  padding: 0 32px;
  margin: 0 0 32px;
  text-align: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

export const CloseIcon = styled(SVG1)`
  width: 24px;
  height: 24px;
  padding: 4px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.bg.dark};
  fill: 1px solid ${({ theme }) => theme.bg.dark};
`;
