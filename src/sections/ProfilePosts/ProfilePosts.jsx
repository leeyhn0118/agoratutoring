import React from 'react';
import propTypes from 'prop-types';

import Sort from 'src/components/Sort';
import PostCard from 'src/components/PostCard';

import * as S from './ProfilePosts.style';

const ProfilePosts = ({ user, sort, setSort, fetchMorePosts }) => (
  <S.ProfilePosts>
    <S.Header>
      <S.Text>Active Posts</S.Text>
      <Sort closest={false} value={sort} onChange={setSort} />
    </S.Header>
    <S.Posts>
      {user.posts.edges.map(({ node: post }) => (
        <PostCard post={post} family="complete" />
      ))}
    </S.Posts>
    {user.posts.page.hasNextPage && (
      <S.Button onClick={fetchMorePosts}>Load More Posts</S.Button>
    )}
  </S.ProfilePosts>
);

ProfilePosts.propTypes = {
  user: propTypes.shape({
    posts: propTypes.shape({
      edges: propTypes.arrayOf(
        propTypes.shape({ node: propTypes.object.isRequired })
      ).isRequired,
      page: propTypes.shape({
        hasNextPage: propTypes.bool.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  sort: propTypes.string.isRequired,
  setSort: propTypes.func.isRequired,
  fetchMorePosts: propTypes.func.isRequired,
};

export default ProfilePosts;
