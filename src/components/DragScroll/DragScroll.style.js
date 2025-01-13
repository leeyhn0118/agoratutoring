import styled from 'styled-components';

export const DragScroll = styled.div`
  cursor: grab;

  :active {
    cursor: grabbing;
  }

  user-select: ${({ $scrolling }) => $scrolling ? 'none' : 'auto'};

  /* Hide scrollbar for Chrome */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for Edge and Firefox */
  overflow-style: none;
  scrollbar-width: none;
`;
