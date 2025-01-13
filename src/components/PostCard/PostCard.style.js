import styled, { css } from 'styled-components';

import COMP1 from 'src/components/Avatar';

export const PostCard = styled.div`
  position: relative;
`;

export const Link = styled.a`
  display: block;
  background: ${({ theme }) => theme.bg.medium};
  color: inherit;
  margin: 2px 2px;
  user-drag: none;
  user-select: none;
  border-radius: 8px;
  text-decoration: inherit;

  overflow: hidden;

  :hover {
    box-shadow: 0 0px 4px 0px rgba(0, 0, 0, 0.2);
  }
`;

export const TypeIndicator = styled.span`
  display: block;
  height: 6px;
  width: 100%;
  background: ${({ $color }) => $color};
`;

export const Info = styled.div`
  padding: 16px;
  border-bottom: 2px solid #ACB7C6;

  ${({ $family }) => $family === 'condensed' && css`
    border-bottom: none;
    padding: 12px 76px 12px 16px;
  `}

  ${({ $family }) => $family === 'complete' && css`
    padding: 16px 0;
    margin: 0 16px;

    @media(min-width: ${({ theme }) => theme.size.xl}) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-right: 60px;
    }
  `}
`;

export const Creator = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 12px;
`;

export const Avatar = styled(COMP1)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 8px;

  ${({ $family }) => $family === 'condensed' && css`
    width: 40px;
    height: 40px;
  `}
`;

export const Meta = styled.div`
  overflow: hidden;
`;

export const Name = styled.span`
  ${({ theme }) => theme.css.h3};

  display: block;
  line-height: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0 0 6px;
`;

export const Distance = styled.span`
  ${({ theme }) => theme.css.overline};

  display: block;
  line-height: 1;
  color: ${({ theme }) => theme.text.light};
`;

export const Data = styled.div`

`;

export const Label = styled.span`
  ${({ theme }) => theme.css.caption};

  display: block;
`;

export const Category = styled.span`
  ${({ theme }) => theme.css.p1};

  display: block;
  margin: 0 0 8px;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 4px 0 16px;

  ${({ $family }) => $family === 'condensed' && css`
    margin: 4px 0 0;
    flex-wrap: nowrap;
    overflow: hidden;
  `}
`;

export const Tag = styled.span`
  ${({ theme }) => theme.css.p2};
  
  line-height: 1;
  padding: 4px;
  border-radius: 2px;
  white-space: nowrap;
  background: ${({ $color }) => $color};
`;

export const Details = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 8px;
  justify-content: space-between;

  @media(min-width: ${({ theme }) => theme.size.xl }) {
    column-gap: 32px;
  }
`;

export const Detail = styled.span`
  ${({ theme }) => theme.css.p2};

  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Icon = styled.svg`
  width: 18px;
  height: 18px;
  fill: ${({ theme }) => theme.color.blue.dark};
`;

export const Content = styled.div`
  padding: 16px 16px 0;
`;

export const Title = styled.h3`
  ${({ theme }) => theme.css.h3}

  margin: 0 0 12px;
`;

export const Description = styled.p`
  ${({ theme }) => theme.css.p1}

  margin: 0 0 20px;
`;

export const ButtonWrapper = styled.div`
  padding: 6px;

  ${({ $family }) => $family === 'condensed' && css`
    padding: 0;
  `}

  ${({ $family }) => $family === 'complete' && css`
    border-top: 2px solid #ACB7C6;
    
    @media(min-width: ${({ theme }) => theme.size.xl }) {
      display: none;
    }
  `}
`;

export const ViewButton = styled.div`
  display: block;
  height: 34px;
  line-height: 1;
  padding: 9px 0;
  text-align: center;
  margin: 0 64px 0 0;
  border-right: 2px solid #ACB7C6;
  color: ${({ theme }) => theme.color.blue.dark};
  text-transform: uppercase;
  transition: color 0.25s;
  font-weight: 500;

  :hover {
    color: ${({ theme }) => theme.color.yellow.dark};
  }

  ${({ $family }) => $family === 'condensed' && css`
    position: absolute;
    display: block;
    right: 2px;
    bottom: 2px;
    border-right: none;
    border-top: 2px solid #ACB7C6;
    border-left: 2px solid #ACB7C6;
    padding: 7px 0;
    height: 48px;
    margin: 0;
  `}
`;

export const SaveButton = styled.button`
  position: absolute;
  display: inline-block;
  right: 8px;
  bottom: 8px;
  padding: 0;
  border: none;
  background: none;

  ${({ $family }) => $family === 'condensed' && css`
    display: block;
    top: 8px;
    right: 2px;
    bottom: auto;
    border-left: 2px solid #ACB7C6;
    padding: 7px 0;
    height: 48px;
  `}

  ${({ $family }) => $family === 'complete' && css`
    @media(min-width: ${({ theme }) => theme.size.xl }) {
      top: 8px;
      right: 16px;
      bottom: auto;
    }
  `}
`;

export const ActionIcon = styled.svg`
  width: 58px;
  height: 34px;
  cursor: pointer;
  padding: 2px 14px;
  color: ${({ theme }) => theme.color.blue.dark};
  transition: color 0.25s;

  :hover {
    color: ${({ theme }) => theme.color.yellow.dark};
  }

  ${({ $family }) => $family === 'complete' && css`
    @media(min-width: ${({ theme }) => theme.size.xl }) {
      width: 48px;
      height: 48px;
      padding: 10px;
    }
  `}
`;