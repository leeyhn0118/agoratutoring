import styled from 'styled-components';

import COMP1 from 'src/components/DragScroll';
import COMP2 from 'src/components/Button';

export const PostHighlight = styled.div`
  position: relative;
  margin: 0 0 140px;
`;

export const Window = styled(COMP1)`
  overflow-y: auto;
  margin-bottom: 64px;

  @media(min-width: ${({ theme }) => theme.size.xl}) {
    :before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: calc((100% - 1200px) / 2);
      background: linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 65%, rgba(255,255,255,1) 100%);
    }

    :after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: calc((100% - 1200px) / 2);
      background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 85%, rgba(255,255,255,1) 100%);
    }
  }
`;

export const Track = styled.div`
  display: grid;
  padding: 0 16px;
  width: fit-content;
  grid-column-gap: 16px;
  grid-auto-flow: column;
  grid-auto-columns: 260px;
  align-items: start;
  margin-left: max(calc((100% - 1200px) / 2), 0px);
  padding-right: max(calc((100% - 1200px) / 2), 0px);
`;

export const Button = styled(COMP2)`
  display: block;
  margin: 0 auto;
  width: fit-content;
`;
