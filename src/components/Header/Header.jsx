import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import propTypes from 'prop-types';

import Links from './Links';
import Search from './Search';
import Menu from './Menu';

import query from './Header.gql';
import * as S from './Header.style';

const Header = ({ setOpenDonationModal }) => {
  const header = useRef();
  const { data } = useQuery(query.viewer);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleResize = () => {
    if (header.current) {
      document.documentElement.style.scrollPadding = `${header.current.clientHeight}px`;
      document.body.style.paddingTop = `${header.current.clientHeight}px`;
    }
  };

  const handleClick = (event) => {
    if (!header.current.contains(event.target)) {
      document.removeEventListener('click', handleClick);
      event.preventDefault();
      setSearchOpen(false);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    if (menuOpen && searchOpen) {
      setMenuOpen(false);
    } else if (menuOpen || searchOpen) {
      document.addEventListener('click', handleClick);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClick);
    };
  });

  return (
    <S.Header ref={header}>
      <S.Wrapper>
        <S.Fade $open={menuOpen || searchOpen} />
        <Link passHref href="/">
          <S.LogoWrapper>
            <S.Logo />
          </S.LogoWrapper>
        </Link>
        <Search searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
        <Links
          viewer={data?.viewer}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          setSearchOpen={setSearchOpen}
          setOpenDonationModal={setOpenDonationModal}
        />
        <Menu viewer={data?.viewer} menuOpen={menuOpen} />
      </S.Wrapper>
    </S.Header>
  );
};
Header.propTypes = {
  setOpenDonationModal: propTypes.func.isRequired,
};
export default Header;
