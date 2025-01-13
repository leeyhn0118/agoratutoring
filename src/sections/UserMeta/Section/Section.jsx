import React, { useRef } from 'react';
import propTypes from 'prop-types';

import useAccordion from 'src/hooks/useAccordion';

import * as S from './Section.style';

const Section = ({ title, children }) => {
  const content = useRef();
  const [maxHeight, open, toggleOpen] = useAccordion(content, false);

  return (
    <S.Section>
      <S.TitleWrapper onClick={toggleOpen}>
        <S.Title>{title}</S.Title>
        <S.ArrowIcon $open={open} />
      </S.TitleWrapper>
      <S.Content ref={content} $maxHeight={maxHeight}>
        {children}
      </S.Content>
    </S.Section>
  );
};

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default Section;
