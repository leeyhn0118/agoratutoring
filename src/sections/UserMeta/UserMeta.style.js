import styled from 'styled-components';

export const UserMeta = styled.div`
  grid-area: UserMeta;
  display: grid;
  gap: 16px;
`;

export const Details = styled.div`

`;

export const Detail = styled.div`
  display: flex;
  margin: 32px 0 0;

  :first-child {
    margin: 16px 0 0;
  }
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  margin: 0 8px 0 0;
  color: ${({ theme }) => theme.color.blue.dark};
`;

export const Text =  styled.div`
  width: calc(100% - 32px);
`;

export const Title = styled.p`
  ${({ theme }) => theme.css.overline}

  margin: 0;
  color: ${({ theme }) => theme.color.blue.primary};
`;

export const Value = styled.p`
  ${({ theme }) => theme.css.p1}

  margin: 0;
`;
