import styled from 'styled-components';
import COMP1 from 'react-infinite-scroller';

export const Chat = styled.div`
  display: ${({ $hasChat }) => $hasChat ? 'flex' : 'none'};
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

export const TitleWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  flex-grow: 0;
  flex-shrink: 0;
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
    display: none;
  }
`;

export const ChatWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
  padding: 16px;
`;

export const InfiniteScroll = styled(COMP1)`
  display: flex;
  flex-direction: column-reverse;
`;

export const StartText = styled.p`
  font-size: 1rem;
  margin: 0 0 24px;
  text-align: center;
`;

export const MessageWrapper = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.bg.primary};
  border-radius: 0.25rem;
  box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.3);
`;

export const Error = styled.h4`
  text-align: center;
`;
