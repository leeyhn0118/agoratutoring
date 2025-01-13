import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Error from 'next/error';

import UserDetails from 'src/sections/UserDetails';
import MapMeta from 'src/sections/MapMeta';
import UserMeta from 'src/sections/UserMeta';
import PostData from 'src/sections/PostData';

import query from './[id].gql';
import * as S from './[id].style';

const ProfilePage = () => {
  const {
    query: { id },
  } = useRouter();

  const { data, loading, error } = useQuery(query.post, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
    variables: {
      input: { id },
    },
  });

  if (loading) return null;

  if (error) {
    return <Error statusCode={error.networkError ? 500 : 404} />;
  }

  return (
    <S.ProfilePage>
      <Head>
        <title>{`${data.post.title} | Agora Tutoring`}</title>
      </Head>
      <UserDetails user={data.post.creator} post={data.post} context="post" />
      <MapMeta post={data.post} />
      <UserMeta user={data.post.creator} />
      <PostData post={data.post} />
    </S.ProfilePage>
  );
};

export default ProfilePage;
