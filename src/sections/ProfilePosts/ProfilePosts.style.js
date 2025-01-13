import styled from 'styled-components';

import COMP1 from 'src/components/Button';

export const ProfilePosts = styled.div`
  grid-area: ProfilePosts;
  padding-top: 16px;
`;

export const Header = styled.div`
  padding: 0 0 16px;
  border-bottom: 2px solid ${({ theme }) => theme.bg.medium};

  @media(min-width: ${({ theme }) => theme.size.md}) {
    display: grid;
    grid-template-columns: 1fr 240px;
    align-items: end;
  }
`;

export const Text = styled.h4`
  ${({ theme }) => theme.css.h3}

  margin: 0 0 24px;

  @media(min-width: ${({ theme }) => theme.size.md}) {
    margin: 0;
  }
`;

export const Posts = styled.div`
  display: grid;
  gap: 24px;
  padding: 16px 0 0;
`;

export const Button = styled(COMP1)`
  display: block;
  margin: 0 auto;
`;
