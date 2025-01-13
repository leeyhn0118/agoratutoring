import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Error from 'next/error';

import UserDetails from 'src/sections/UserDetails';
import UserMeta from 'src/sections/UserMeta';
import ProfilePosts from 'src/sections/ProfilePosts';

import query from './[username].gql';
import * as S from './[username].style';

const ProfilePage = () => {
  const {
    query: { username },
  } = useRouter();
  const [sort, setSort] = useState('NEWEST');

  const { data, loading, fetchMore, refetch, error } = useQuery(query.user, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
    variables: {
      input: { username },
      page: { first: 10 },
      sort,
    },
  });

  const fetchMorePosts = () =>
    fetchMore({
      variables: {
        input: { username },
        page: { first: 10, after: data.user.posts.page.endCursor },
        sort,
      },
    });

  useEffect(refetch, [sort]);

  if (loading) return null;

  if (error) {
    return <Error statusCode={error.networkError ? 500 : 404} />;
  }

  return (
    <S.ProfilePage>
      <Head>
        <title>{`${data.user.name} | Agora Tutoring`}</title>
      </Head>
      <UserDetails user={data.user} context="user" />
      <UserMeta user={data.user} />
      <ProfilePosts
        user={data.user}
        sort={sort}
        setSort={setSort}
        fetchMorePosts={fetchMorePosts}
      />
    </S.ProfilePage>
  );
};

export default ProfilePage;
