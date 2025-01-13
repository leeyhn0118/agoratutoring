import React from 'react';
import propTypes from 'prop-types';

import config from 'src/config';
import theme from 'src/theme';

import * as S from './StaticMap.style';

const base = `https://maps.googleapis.com/maps/api/staticmap?key=${config.GOOGLE_API_KEY}&size=800x800`;

const colors = {
  multiple: theme.color.yellow.primary,
  student: theme.color.green.primary,
  tutor: theme.color.blue.primary,
};

function generateUrl(zoom, center, pins) {
  let markers = '';

  if (pins && pins.length > 0) {
    markers = pins.reduce(
      (acc, pin) =>
        `${acc}&markers=color:0x${colors[pin.type].substr(
          1
        )}|${pin.coordinates.toString()}`,
      ''
    );
  }

  return `${base}${markers}&zoom=${zoom}&center=${center?.toString()}`;
}

const StaticMap = ({ loading, zoom, center, pins, className }) => (
  <S.StaticMap className={className}>
    {!loading && (
      <S.Image
        src={generateUrl(zoom, center, pins)}
        alt="Map showing local posts"
      />
    )}
  </S.StaticMap>
);

StaticMap.defaultProps = {
  loading: false,
  pins: undefined,
  className: undefined,
};

StaticMap.propTypes = {
  loading: propTypes.bool,
  zoom: propTypes.number.isRequired,
  center: propTypes.arrayOf(propTypes.number).isRequired,
  pins: propTypes.arrayOf(
    propTypes.shape({
      type: propTypes.string.isRequired,
      coordinates: propTypes.arrayOf(propTypes.number),
    })
  ),
  className: propTypes.string,
};

export default StaticMap;
