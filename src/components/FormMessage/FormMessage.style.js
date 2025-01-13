import styled from 'styled-components';

export const FormMessage = styled.div`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  background: ${({ $color }) => $color};
  color: ${(props) => props.theme.text.white};
  margin: 0 0 24px;
`;

export const Message = styled.p`
  margin: 0;
`;
