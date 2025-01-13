import React from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';

import MessageNotification from './MessageNotification';

import * as S from './Links.style';

const Links = ({
  viewer,
  menuOpen,
  setMenuOpen,
  setSearchOpen,
  setOpenDonationModal,
}) => (
  <S.Links>
    {viewer ? (
      <>
        <Link passHref href="/search/saved">
          <S.TertiaryLink>
            <S.SavedPosts />
          </S.TertiaryLink>
        </Link>
        <Link passHref href="/inbox">
          <S.TertiaryLink>
            <MessageNotification />
            <S.Messages />
          </S.TertiaryLink>
        </Link>
        <Link passHref href="/post/create">
          <S.MobileLink>
            <S.CreatePost />
          </S.MobileLink>
        </Link>
        <Link passHref href="/post/create">
          <S.DesktopLink>Create Post</S.DesktopLink>
        </Link>
        <S.Button onClick={() => setOpenDonationModal(true)}>Donate</S.Button>
        <S.TertiaryButton
          aria-label={`${menuOpen ? 'Close' : 'Open'} menu`}
          onClick={() => {
            setSearchOpen(false);
            setMenuOpen(!menuOpen);
          }}
        >
          <S.Avatar url={viewer.avatarUrl} />
        </S.TertiaryButton>
      </>
    ) : (
      <>
        <S.Button onClick={() => setOpenDonationModal(true)}>
          Donate Us
        </S.Button>
        <Link passHref href="/login">
          <S.SecondaryLink>Login</S.SecondaryLink>
        </Link>
        <Link passHref href="/signup">
          <S.PrimaryLink>Sign Up</S.PrimaryLink>
        </Link>
      </>
    )}
  </S.Links>
);

Links.defaultProps = {
  viewer: undefined,
};

Links.propTypes = {
  viewer: propTypes.shape({
    avatarUrl: propTypes.string,
  }),
  menuOpen: propTypes.bool.isRequired,
  setMenuOpen: propTypes.func.isRequired,
  setSearchOpen: propTypes.func.isRequired,
  setOpenDonationModal: propTypes.func.isRequired,
};

export default Links;
