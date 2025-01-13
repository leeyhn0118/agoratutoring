import React, { useRef } from 'react';
import propTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import PostCard from 'src/components/PostCard';

import query from './PostOverlay.gql';
import * as S from './PostOverlay.style';

const PostOverlay = ({ posts, close }) => {
  const overlay = useRef();
  const { data, loading, fetchMore } = useQuery(query.posts, {
    ssr: false,
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
    variables: {
      input: { ids: posts },
      page: { first: 25 },
    },
  });

  if (loading) return null;

  return (
    <S.PostOverlay
      ref={overlay}
      onClick={(event) => {
        event.stopPropagation();

        if (event.target === overlay.current) {
          close();
        }
      }}
    >
      <S.PostContainer $multiple={data.posts.edges.length > 1}>
        <S.InfiniteScroll
          threshold={40}
          useWindow={false}
          hasMore={!loading && data?.posts.page.hasNextPage}
          loadMore={() => {
            if (!loading && data?.posts.page.hasNextPage) {
              fetchMore({
                variables: {
                  page: {
                    first: 25,
                    after: data.posts.page.endCursor,
                  },
                },
              });
            }
          }}
        >
          {data.posts.edges.map(({ node: post }) => (
            <PostCard key={post.id} post={post} family="condensed" />
          ))}
        </S.InfiniteScroll>
      </S.PostContainer>
    </S.PostOverlay>
  );
};

PostOverlay.propTypes = {
  posts: propTypes.arrayOf(propTypes.string).isRequired,
  close: propTypes.func.isRequired,
};

export default PostOverlay;
