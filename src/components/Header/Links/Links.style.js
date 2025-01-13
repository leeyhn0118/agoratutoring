import styled from 'styled-components';

import COMP1 from 'src/components/Avatar';
import COMP2 from 'src/components/Button';

import { Favorite as SVG1, Inbox as SVG2 , PostAdd as SVG3 } from '@styled-icons/material-rounded';

export const Links = styled.div`
  grid-area: Links;
  display: flex;
  padding: 5px 0;
  justify-content: flex-end;

  @media(min-width: 340px) {
    gap: 8px;
  }
`;

export const TertiaryLink = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 34px;
  padding: 5px;
  line-height: 1;
  font-size: 14px;
  font-weight: 400;
  vertical-align: center;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.text.white};
  background: ${({ theme }) => theme.color.blue.dark};
  transition: background 0.25s;

  :hover {
    background: ${({ theme }) => theme.color.blue.hover.dark};
  }

  :active {
    background: ${({ theme }) => theme.color.blue.active.dark};
  }
`;

export const TertiaryButton = styled.button`
  position: relative;
  display: inline-flex
  align-items: center;
  height: 34px;
  padding: 5px;
  line-height: 1;
  font-size: 14px;
  font-weight: 400;
  vertical-align: center;
  text-transform: uppercase;
  background: none;
  border: none;
  border-radius: 17px;
  color: ${({ theme }) => theme.text.white};
  background: ${({ theme }) => theme.color.blue.dark};
  transition: background 0.25s;
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.color.blue.hover.dark};
  }

  :active {
    background: ${({ theme }) => theme.color.blue.active.dark};
  }
`;

export const SecondaryLink = styled.a`
  position: relative;
  display: inline-block;
  height: 34px;
  padding: 10px;
  line-height: 1;
  font-size: 14px;
  font-weight: 400;
  vertical-align: center;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.text.white};
  transition: color 0.25s;

  :hover {
    color: ${({ theme }) => theme.text.hover.white};
  }

  :active {
    color: ${({ theme }) => theme.text.active.white};
  }
`;

export const MobileLink = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 34px;
  padding: 5px;
  line-height: 1;
  font-size: 14px;
  font-weight: 400;
  vertical-align: center;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.text.white};
  background: ${({ theme }) => theme.color.blue.dark};
  transition: background 0.25s;

  :hover {
    background: ${({ theme }) => theme.color.blue.hover.dark};
  }

  :active {
    background: ${({ theme }) => theme.color.blue.active.dark};
  }

  @media(min-width: ${({ theme }) => theme.size.sm}) {
    display: none;
  }
`;

export const DesktopLink = styled.a`
  position: relative;
  display: none;
  height: 34px;
  padding: 8px;
  line-height: 1;
  font-size: 14px;
  font-weight: 400;
  border-radius: 4px;
  vertical-align: center;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.text.white};
  border: 2px solid ${({ theme }) => theme.color.yellow.primary};
  transition: background 0.25s;

  :hover {
    background: ${({ theme }) => theme.color.blue.hover.dark};
  }

  :active {
    background: ${({ theme }) => theme.color.blue.active.dark};
  }

  @media(min-width: ${({ theme }) => theme.size.sm}) {
    display: block;
  }
`;

export const PrimaryLink = styled.a`
  position: relative;
  display: inline-block;
  height: 34px;
  padding: 8px;
  line-height: 1;
  font-size: 14px;
  font-weight: 400;
  border-radius: 4px;
  vertical-align: center;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.text.white};
  border: 2px solid ${({ theme }) => theme.color.yellow.primary};
  transition: background 0.25s;

  :hover {
    background: ${({ theme }) => theme.color.blue.hover.dark};
  }

  :active {
    background: ${({ theme }) => theme.color.blue.active.dark};
  }
`;

export const SavedPosts = styled(SVG1)`
  width: 24px;
  height: 24px;
`;

export const Messages = styled(SVG2)`
  width: 24px;
  height: 24px;
`;

export const CreatePost = styled(SVG3)`
  width: 24px;
  height: 24px;
`;

export const Avatar = styled(COMP1)`
  width: 24px;
  height: 24px;
  border-radius: 12px;
`;

export const Button = styled(COMP2)`
  height: 34px;
  padding: 8px 12px;
  line-height: 1;
  font-size: 14px;
  font-weight: 600;
  border-radius: 4px;
`;