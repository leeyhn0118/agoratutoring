import React from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';

import useMutationHandler from 'src/hooks/useMutationHandler';

import query from './Menu.gql';
import * as S from './Menu.style';

const Menu = ({ viewer, menuOpen }) => {
  const [logoutViewer] = useMutationHandler(query.logoutViewer, {
    onCompleted: () => {
      window.location.reload();
    },
  });

  if (!viewer) return null;

  const elements = [
    { value: 'My Posts', url: `/user/${viewer.username}#posts` },
    { value: 'My Profile', url: `/user/${viewer.username}` },
    { value: 'Profile Settings', url: '/profile/settings' },
    { value: 'Subscription', url: '/profile/subscription' },
    { value: 'Help Desk', url: '/help' },
    { value: 'Logout', onClick: logoutViewer },
  ];

  return (
    <S.Menu aria-hidden={!menuOpen} $menuOpen={menuOpen}>
      {elements.map((element) =>
        element.url ? (
          <Link key={element.value} passHref href={element.url}>
            <S.Link tabIndex={menuOpen ? '0' : '-1'}>{element.value}</S.Link>
          </Link>
        ) : (
          <S.Button
            key={element.value}
            tabIndex={menuOpen ? '0' : '-1'}
            onClick={element.onClick}
          >
            {element.value}
          </S.Button>
        )
      )}
    </S.Menu>
  );
};

Menu.defaultProps = {
  viewer: undefined,
};

Menu.propTypes = {
  viewer: propTypes.shape({
    username: propTypes.string.isRequired,
  }),
  menuOpen: propTypes.bool.isRequired,
};

export default Menu;
