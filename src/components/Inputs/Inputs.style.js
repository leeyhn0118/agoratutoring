import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  // ${({ $area }) => $area && css`
  //   grid-area: ${$area};
  // `}
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  line-height: 1;
  margin: 0 0 8px;
  font-weight: 500;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.text.medium};
`;

export const Error = styled.span`
  margin-top: 4px;
  display: block;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.color.red.dark};
`;
