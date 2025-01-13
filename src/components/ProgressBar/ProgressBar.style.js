import styled from 'styled-components';

export const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  overflow: hidden;
  border-radius: 5px;
  margin: 0 auto 32px;
  border: 1px solid ${({ theme }) => theme.bg.dark};
  transition: background 0.25s;

  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.color.blue.primary} ${({ $width }) => $width}%,
    ${({ theme }) => theme.bg.light} ${({ $width }) => $width}%
  );
`;
