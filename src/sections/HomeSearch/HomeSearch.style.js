import styled, { css } from 'styled-components';

import COMP1 from 'src/components/Image';
import COMP2 from 'src/components/Button';
import COMP3 from 'src/components/StaticMap';
import { H1, P2, Overline } from 'src/components/Text';

export const HomeSearch = styled.div`
  padding: 16px;
  max-width: 1200px;
  margin: 0 auto 100px;
  position: relative;

  @media(min-width: ${({ theme }) => theme.size.lg}) {
    display: flex;
    padding: 48px 16px 16px;
  }
`;

export const Title = styled(H1)`
  margin: 0 0 24px;
`;

export const Form = styled.form`
  width: fit-content;
  max-width: 100%;
  margin: 0 auto;

  @media(min-width: ${({ theme }) => theme.size.lg}) {
    padding-right: 80px;
  }
`;

export const Label = styled(Overline).attrs(() => ({
  as: 'label',
}))`
  display: block;
  margin: 0 0 8px;
`;

export const Input = styled.input`
  width: 100%;
  display: block;
  max-width: 440px;
  font-size: 16px;
  margin: 0 0 24px;
  padding: 8px 16px;
  line-height: 1.25;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.bg.dark};
`;

export const CategoriesTitle = styled(Overline)`
  display: block;
  margin: 0 0 8px;
`;

export const Categories = styled.div`
  overflow-x: auto;
  margin: 0 -16px 32px;
  width: calc(100% + 32px);
  padding: 0 16px 16px;
`;

export const Track = styled.div`
  gap: 16px;
  display: flex;
  width: fit-content;
`;

export const Category = styled.button`
  width: 120px;
  cursor: pointer;
  border-radius: 4px;
  background: ${({ theme }) => theme.bg.base};
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.25);
  transition: border-width 0.25s;
  border: none;
  padding: 0;
  margin: 0;

  ${({ $active }) => $active && css`
    border: 2px solid ${({ theme }) => theme.color.yellow.primary};
  `}
`;

export const Image = styled(COMP1)`
  border-radius: 4px 4px 0 0;
  overflow: hidden;
  display: block;
  width: 100%;
`;

export const CategoryName = styled(P2)`
  margin: 0;
  padding: 6px 8px;
  text-align: center;
  white-space: nowrap;
  background: ${({ theme }) => theme.bg.medium};
`;

export const Button = styled(COMP2)`

`;

export const StaticMap = styled(COMP3)`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  overflow: hidden;

  :after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.6);
  }

  @media(min-width: ${({ theme }) => theme.size.lg}) {
    position: static;
    width: 580px;
    height: 380px;
    flex: 1;
    z-index: 0;
    border-radius: 8px;
    border: 2px solid rgba(0, 0, 0, 0.4);

    :after {
      display: none;
    }
  }
`;
