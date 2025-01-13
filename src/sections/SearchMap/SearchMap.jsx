import { useEffect, useRef, useState } from 'react';
import propTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { getBoundsOfDistance } from 'geolib';
import { GoogleMap, Circle, OverlayView, Marker } from '@react-google-maps/api';

import pinTutor from 'src/assets/png/pin-tutor.png';
import pinStudent from 'src/assets/png/pin-student.png';
import pinMultiple from 'src/assets/png/pin-multiple.png';

import PostOverlay from './PostOverlay';

import query from './SearchMap.gql';
import * as S from './SearchMap.style';

const icons = {
  tutor: pinTutor.src,
  student: pinStudent.src,
  multiple: pinMultiple.src,
};

const SearchMap = ({ show, filter, setFilter }) => {
  const map = useRef();
  const [pin, setPin] = useState();
  const [bound, setBound] = useState(false);
  const [loading, setLoading] = useState(true);
  const [changed, setChanged] = useState(false);

  const { data: { coordinates: defaultCoordinates } = {} } = useQuery(
    query.coordinates,
    {
      ssr: false,
      skip: Boolean(filter.coordinates),
    }
  );

  const { data } = useQuery(query.allPins, {
    ssr: false,
    variables: {
      filter: {
        ...filter,
        address: undefined,
        distance: filter.distance || 30000,
      },
    },
  });

  const coordinates = filter.coordinates || defaultCoordinates;

  useEffect(() => {
    if (!loading && data && coordinates) {
      const distance = filter.distance || 30000;

      const bounds = getBoundsOfDistance(
        { latitude: coordinates[0], longitude: coordinates[1] },
        distance * 0.65
      );

      map.current.fitBounds({
        north: bounds[1].latitude,
        east: bounds[1].longitude,
        south: bounds[0].latitude,
        west: bounds[0].longitude,
      });

      if (!bound) {
        setTimeout(() => {
          setBound(true);
        }, 100);
      }
    }
  }, [loading, data, coordinates]);

  if (!coordinates) return null;

  return (
    <S.SearchMap $show={show}>
      <GoogleMap
        options={{ disableDefaultUI: true, gestureHandling: 'greedy' }}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        onLoad={(mapReference) => {
          map.current = mapReference;
          setLoading(false);
        }}
        onCenterChanged={() => {
          if (bound) setChanged(true);
        }}
        onBoundsChanged={() => {
          if (bound) setChanged(true);
        }}
        onClick={() => {
          if (pin) setPin();
        }}
      >
        <Circle
          radius={filter.distance || 30000}
          options={{
            clickable: false,
            fillOpacity: 0.1,
            strokeWeight: 2,
            strokeOpacity: 0.3,
            fillColor: '#0974D6',
            strokeColor: '#0974D6',
          }}
          center={{ lat: coordinates[0], lng: coordinates[1] }}
        />
        {pin && (
          <OverlayView
            onCloseClick={() => {
              setPin();
            }}
            position={{
              lat: pin.coordinates[0],
              lng: pin.coordinates[1],
            }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            getPixelPositionOffset={() => ({
              x: pin.posts.length > 1 ? -180 : -160,
              y: 0,
            })}
          >
            <PostOverlay posts={pin.posts} close={() => setPin()} />
          </OverlayView>
        )}
        {data?.allPins.map((node) => (
          <Marker
            position={{
              lat: node.coordinates[0],
              lng: node.coordinates[1],
            }}
            icon={{
              url: icons[node.type],
            }}
            onClick={() => {
              setPin(node);
            }}
          />
        ))}
      </GoogleMap>
      <S.ButtonWrapper>
        {changed && (
          <S.Button
            onClick={() => {
              const { lat, lng } = map.current.getCenter();

              setChanged(false);
              setBound(false);

              setFilter({
                ...filter,
                address: null,
                coordinates: [lat(), lng()],
              });
            }}
          >
            Search this area
          </S.Button>
        )}
      </S.ButtonWrapper>
    </S.SearchMap>
  );
};

SearchMap.propTypes = {
  show: propTypes.bool.isRequired,
  filter: propTypes.object.isRequired,
  setFilter: propTypes.func.isRequired,
};

export default SearchMap;
