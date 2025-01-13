import React, { useRef } from 'react';
import propTypes from 'prop-types';

import StaticMap from 'src/components/StaticMap';

import useAccordion from 'src/hooks/useAccordion';

import * as S from './MapMeta.style';

const MapMeta = ({ post }) => {
  const content = useRef();
  const [maxHeight, open, toggleOpen] = useAccordion(content, false);

  return (
    <S.MapMeta>
      <S.TitleWrapper onClick={toggleOpen}>
        <S.Title>Location</S.Title>
        <S.ArrowIcon $open={open} />
      </S.TitleWrapper>
      <S.Content ref={content} $maxHeight={maxHeight}>
        <S.MapWrapper>
          <StaticMap
            zoom={10}
            pins={[
              {
                coordinates: post.location.geometry.coordinates,
                type: post.type,
              },
            ]}
            center={post.location.geometry.coordinates}
          />
        </S.MapWrapper>
      </S.Content>
    </S.MapMeta>
  );
};

MapMeta.propTypes = {
  post: propTypes.shape({
    type: propTypes.string.isRequired,
    location: propTypes.shape({
      geometry: propTypes.shape({
        coordinates: propTypes.arrayOf(propTypes.string).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default MapMeta;
