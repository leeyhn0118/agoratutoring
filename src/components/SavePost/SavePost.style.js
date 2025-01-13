import styled from 'styled-components';

import SVG1 from 'src/assets/svg/star.svg';

export const SavePost = styled.button`
  background: none;
  border: none;
  display: block;
  cursor: pointer;
  padding: 0;
  line-height: 1;
`;

export const Star = styled(SVG1)`
  width: 2rem;
  height: 2rem;
  color: white !important;
  path {
    fill: ${({ theme, saved }) => (saved ? theme.color.yellow.primary : theme.text.primary)};
  }
`;
