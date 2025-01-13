import styled from 'styled-components';

export const MessageNotification = styled.div`
  width: 10px;
  height: 10px;
  top: 4px;
  left: 4px;
  position: absolute;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.yellow.primary};
`;