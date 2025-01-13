import styled from 'styled-components';

import COMP1 from 'src/components/Avatar';
import COMP2 from 'src/components/Button';

export const UserDetails = styled.div`
  grid-area: UserDetails;
  background: ${({ theme }) => theme.bg.light};
  border-radius: 8px;
  padding: 16px;

  @media(min-width: ${({ theme }) => theme.size.md}) {
    display: grid;
    grid-template-columns: auto 1fr 2fr auto;
    align-items: center;
    gap: 48px;
  }
`;

export const Avatar = styled(COMP1)`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);
  margin: -22px auto 8px;

  @media(min-width: ${({ theme }) => theme.size.md}) {
    margin: -22px;
  }
`;

export const Names = styled.div`

`;

export const Name = styled.h2`
  ${({ theme }) => theme.css.h2}

  text-align: center;
  margin: 0 0 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media(min-width: ${({ theme }) => theme.size.md}) {
    text-align: left;
    margin: 0;
  }
`;

export const Username = styled.h4`
  ${({ theme }) => theme.css.p1}

  text-align: center;
  margin: 0 0 32px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media(min-width: ${({ theme }) => theme.size.md}) {
    text-align: left;
    margin: 0;
  }
`;

export const Details = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-around;
  margin: 0 0 48px;

  @media(min-width: ${({ theme }) => theme.size.md}) {
    margin: 0;
  }
`;

export const Detail = styled.button`
  display: block;
  border: none;
  background: none;
  margin: 0 auto;
  cursor: pointer;

  :disabled {
    cursor: default;
    color: ${({ theme }) => theme.text.base};
  }
`;

export const DetailTitle = styled.p`
  ${({ theme }) => theme.css.overline}

  text-align: center;
  color: ${({ theme }) => theme.color.blue.primary};
`;

export const DetailValue = styled.p`
  ${({ theme }) => theme.css.overline}

  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media(min-width: ${({ theme }) => theme.size.lg}) {
    align-items: flex-end;
  }
`;

export const Button = styled(COMP2)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ButtonIcon = styled.svg`
  width: 24px;
  margin: -4px 8px -4px 0;
  line-height: 24px;
`;
