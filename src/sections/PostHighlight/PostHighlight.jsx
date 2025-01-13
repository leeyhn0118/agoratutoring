import React from 'react';
import { useQuery } from '@apollo/client';

import PostCard from 'src/components/PostCard';

import query from './PostHighlight.gql';
import * as S from './PostHighlight.style';

const PostHighlight = () => {
  const { loading, data } = useQuery(query.allPosts);

  if (loading || !data?.allPosts?.edges?.length > 0) return null;

  return (
    <S.PostHighlight>
      <S.Window>
        <S.Track>
          {data.allPosts.edges.map(({ node: post }) => (
            <PostCard key={post.id} post={post} family="normal" />
          ))}
        </S.Track>
      </S.Window>
      <S.Button href="/search">See All Results →</S.Button>
    </S.PostHighlight>
  );
};

export default PostHighlight;
