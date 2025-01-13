import styled, { css } from 'styled-components';

import COMP1 from 'src/components/Avatar';

export const ChatExcerpt = styled.div`
  display: flex;
  padding: 8px;
  cursor: pointer;
  align-items: center;
  background: transparent;
  transition: background 0.25s;
  border-bottom: 1px solid ${({ theme }) => theme.bg.medium};
  border-radius: 8px;

  :hover {
    background: ${({ theme }) => theme.bg.hover.medium};
  }

  ${({ $active }) => $active && css`
    pointer-events: none;
    background: ${({ theme }) => theme.bg.active.medium};
  `}
`;

export const AvatarLink = styled.a`
  display: block;
  line-height: 1;
  margin-right: 0.5rem;
  position: relative;
`;

export const Avatar = styled(COMP1)`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  &:hover {
    border: 0.0625rem solid ${({ theme }) => theme.color.yellow.primary};
  }
`;

export const UnreadIndicator = styled.div`
  position: absolute;
  width: 0.6875rem;
  height: 0.6875rem;
  border-radius: 50%;
  top: 0;
  right: 0;
  background: ${({ theme }) => theme.color.yellow.primary};
  display: ${({ hasUnreadMessages }) => (hasUnreadMessages ? 'block' : 'none')};
`;

export const MetaWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

export const Title = styled.span`
  margin: 0;
  font-size: 1rem;
  overflow: hidden;
  line-height: 1.15;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Excerpt = styled.p`
  margin: 0;
  line-height: 1.15;
  font-size: 0.875rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${({ theme }) => theme.text.medium};
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  margin-left: 8px;
`;
