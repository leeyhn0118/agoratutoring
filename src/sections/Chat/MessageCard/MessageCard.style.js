import styled, { css } from 'styled-components';

import COMP1 from 'src/components/Avatar';

export const MessageCard = styled.div`
  display: grid;
  max-width: 416px;
  justify-items: start;
  grid-template-columns: 48px auto;
  grid-template-rows: repeat(4, 'auto');
  margin: 0 auto 24px 0;
  grid-template-areas:
    'avatar username'
    'avatar created'
    'content content'
    'status status';

  ${({ isSender }) =>
    isSender &&
    css`
      justify-items: end;
      grid-template-columns: auto 48px;
      margin: 0 0 24px auto;
      grid-template-areas:
        'username avatar'
        'created avatar'
        'content content'
        'status status';
    `};
`;

export const Avatar = styled(COMP1)`
  grid-area: avatar;
  height: 40px;
  width: 40px;
  border-radius: 20px;
`;

export const Username = styled.span`
  grid-area: username;
  font-size: 1.25rem;
  line-height: 1;
  align-self: start;
`;

export const Created = styled.span`
  grid-area: created;
  font-size: 0.875rem;
  line-height: 1;
  align-self: end;
  color: ${({ theme }) => theme.text.light};
`;

export const Content = styled.p`
  grid-area: content;
  display: inline-block;
  white-space: pre-line;
  padding: 8px;
  background: ${({ theme }) => theme.color.blue.light};
  margin: 8px 0;
  border-radius: 8px;
`;

export const Status = styled.span`
  grid-area: status;
  font-size: 0.875rem;
  line-height: 1;
  color: ${({ theme }) => theme.text.light};
`;
