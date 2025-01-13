import styled from 'styled-components';

export const SignupFlowPage = styled.div`
  margin: 0 auto;
  padding: 32px 16px 120px;

  min-height: calc(100vh - 96px);
  background: ${({ theme }) => theme.bg.medium};

  @media(min-width: ${({ theme }) => theme.size.md}) {
    min-height: calc(100vh - 60px);
  }
`;
