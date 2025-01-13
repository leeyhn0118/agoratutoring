import styled from 'styled-components';

import COMP1 from 'react-infinite-scroller';

import SVG1 from 'src/assets/svg/message.svg';

export const ChatList = styled.div`
  display: ${({ $hasChat }) => $hasChat ? 'none' : 'flex'};
  flex-direction: column;
  justify-content: stretch;
  height: 100%;

  @media(min-width: ${({ theme }) => theme.size.lg}) {
    display: flex;
    background: ${({ theme }) => theme.bg.medium};
    border-radius: 8px;
    overflow: hidden;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: ${({ theme }) => theme.bg.base};
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.3);

  @media(min-width: ${({ theme }) => theme.size.lg}) {
    padding: 16px;
    background: ${({ theme }) => theme.color.blue.dark};
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;

  @media(min-width: ${({ theme }) => theme.size.lg}) {
    color: ${({ theme }) => theme.text.white};
  }
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  margin: 0 8px 0 0;

  @media(min-width: ${({ theme }) => theme.size.lg}) {
    color: ${({ theme }) => theme.text.white};
  }
`;

export const ChatContainer = styled.div`
  height: 100%;
  overflow-y: scroll;
`;

export const InfiniteScroll = styled(COMP1)`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const Message = styled(SVG1)`
  
`;

export const Error = styled.p`
  
`;
