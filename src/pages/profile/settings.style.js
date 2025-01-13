import styled from 'styled-components';

import COMP1 from 'src/components/Button';
import COMP2 from 'src/components/Form';

export const ProfileSettingsPage = styled.div`
  max-width: 768px;
  padding: 0 16px;
  margin: 48px auto 120px;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.css.h2}

  margin: 0 0 32px;
`;

export const Form = styled(COMP2)`
  margin: 0 auto 64px;
`;

export const Button = styled(COMP1)`
  display: block;
  width: 100%;
`;

export const Options = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr;
  margin: 0 auto 120px;

  @media(min-width: ${({ theme }) => theme.size.lg}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Option = styled.button`
  display: flex;
  gap: 8px;
  width: 100%;
  text-align: left;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  padding: 8px;
  background: ${({ theme }) => theme.bg.base};
  border: 1px solid ${({ theme }) => theme.color.blue.dark};
  transition: background 0.25s;

  :hover {
    border: 1px solid ${({ theme }) => theme.color.blue.dark};
    background: ${({ theme }) => theme.bg.hover.base};
  }
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.color.blue.dark};
`;

export const OptionName = styled.span`
  flex-grow: 1;
`;