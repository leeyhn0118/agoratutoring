import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useLazyQuery } from '@apollo/client';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import { Email, Edit, Person } from '@styled-icons/material-outlined';

import ChatModal from './ChatModal';

import query from './UserDetails.gql';
import * as S from './UserDetails.style';

const UserDetails = ({ user, post, context }) => {
  const [open, setOpen] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [mutate, { data }] = useLazyQuery(query.user, {
    ssr: false,
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
  });

  const handleClick = async () => {
    mutate({
      variables: {
        input: {
          username: user.username,
          captcha: await executeRecaptcha('user'),
        },
      },
    });
  };

  return (
    <S.UserDetails>
      {context === 'post' && (
        <ChatModal post={post} open={open} setOpen={setOpen} />
      )}
      <S.Avatar url={user.avatarUrl} />
      <S.Names>
        <S.Name>{user.name}</S.Name>
        <S.Username>@{user.username}</S.Username>
      </S.Names>
      <S.Details>
        <S.Detail
          disabled={Boolean(data?.user?.contactEmail)}
          onClick={handleClick}
        >
          <S.DetailTitle>Email Address</S.DetailTitle>
          <S.DetailValue>{data?.user?.contactEmail || 'Reveal'}</S.DetailValue>
        </S.Detail>
        <S.Detail
          disabled={Boolean(data?.user?.contactEmail)}
          onClick={handleClick}
        >
          <S.DetailTitle>Phone Number</S.DetailTitle>
          <S.DetailValue>{data?.user?.contactPhone || 'Reveal'}</S.DetailValue>
        </S.Detail>
      </S.Details>
      <S.ButtonWrapper>
        {user.context.isViewer && context === 'user' && (
          <S.Button href="/profile/settings">
            <S.ButtonIcon as={Edit} />
            Edit Profile
          </S.Button>
        )}
        {!user.context.isViewer && context === 'post' && (
          <>
            <S.Button onClick={() => setOpen(true)}>
              <S.ButtonIcon as={Email} />
              Message User
            </S.Button>
            <S.Button outline href={`/user/${user.username}`}>
              <S.ButtonIcon as={Person} />
              View Profile
            </S.Button>
          </>
        )}
        {user.context.isViewer && context === 'post' && (
          <>
            <S.Button href={`/post/${post.id}/update`}>
              <S.ButtonIcon as={Edit} />
              Update Post
            </S.Button>
            <S.Button outline href={`/user/${user.username}`}>
              <S.ButtonIcon as={Person} />
              View Profile
            </S.Button>
          </>
        )}
      </S.ButtonWrapper>
    </S.UserDetails>
  );
};

UserDetails.defaultProps = {
  post: undefined,
};

UserDetails.propTypes = {
  user: propTypes.shape({
    username: propTypes.string.isRequired,
    avatarUrl: propTypes.string,
    name: propTypes.string.isRequired,
    context: propTypes.shape({
      isViewer: propTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  post: propTypes.shape({
    id: propTypes.string.isRequired,
  }),
  context: propTypes.oneOf(['user', 'post']).isRequired,
};

export default UserDetails;
