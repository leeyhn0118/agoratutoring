import styled from 'styled-components';

export const ProfilePage = styled.div`
  display: grid;
  gap: 16px;
  padding: 0 16px;
  max-width: 1200px;
  margin: 32px auto 120px;
  align-items: start;
  grid-template-areas: "UserDetails" "UserMeta" "ProfilePosts";
  grid-template-columns: 1fr;

  @media(min-width: ${({ theme }) => theme.size.lg}) {
    grid-template-areas: "UserDetails UserDetails" "UserMeta ProfilePosts";
    grid-template-columns: 352px 1fr;
    align-content: start;
    column-gap: 48px;
    row-gap: 16px;
  }
`;
