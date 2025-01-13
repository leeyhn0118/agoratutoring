import styled from 'styled-components';
import { Close as SVG1 } from '@styled-icons/material-outlined';

export const Toasts = styled.div`
  position: fixed;
  z-index: 20;
  left: 0;
  bottom: 0;
  width: 100%;

  @media(min-width: ${({ theme }) => theme.size.md}) {
    max-width: 360px;
  }
`;

export const Banners = styled.div`
  position: fixed;
  z-index: 20;
  top: 96px;
  left: 0;
  right: 0;

  @media(min-width: ${({ theme }) => theme.size.md}) {
    top: 60px;
    left: calc(50% - 256px);
    right: calc(50% - 256px);
  }
`;

export const Wrapper = styled.div`
  padding: 0 16px 16px;
`;

export const Notification = styled.div`
  display: flex;
  width: 100%;
  margin-top: 16px;
  padding: 12px 8px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  align-items: center;
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  color: ${({ $color }) => $color};
`;

export const Content = styled.p`
  width: calc(100% - 48px);
  line-height: 1.25;
  margin: 0;
  padding: 0 8px;
`;

export const CloseButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  padding-left: 7px;
  border-left: 1px solid #E0E0E0;
`;

export const CloseIcon = styled(SVG1)`
  width: 24px;
  height: 24px;
  padding: 2px;
  cursor: pointer;
  color: ${({ theme }) => theme.text.light};

  :hover {
    color: ${({ theme }) => theme.text.hover.light};
  }
`;
