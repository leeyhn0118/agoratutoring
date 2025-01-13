import styled, { css } from 'styled-components';

import COMP1 from 'react-infinite-scroller';

export const PostOverlay = styled.div`
  border-radius: 8px;
  overflow: hidden;
`;

export const PostContainer = styled.div`
  ${({ $multiple }) => $multiple && css`
    background: ${({ theme }) => theme.bg.base};
    overflow-y: auto;
    width: 100%;
    max-height: 100%;
    padding: 16px;
    overflow-x: hidden;
    max-height: 40vh;
  `}
`;

export const InfiniteScroll = styled(COMP1)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 320px;
`;

export const Text = styled.h3`
  ${({ theme }) => theme.css.h3};

  margin: 0;
`;