import React, { useRef, useState, useEffect } from 'react';
import propTypes from 'prop-types';

import * as S from './DragScroll.style';

const initialState = {
  scrolling: false,
  startPageX: undefined,
  startScrollLeft: undefined,
};

const DragScroll = ({ className, children }) => {
  const dragScroll = useRef();
  const [state, setState] = useState(initialState);

  const onMouseDown = (e) => {
    setState({
      scrolling: true,
      startPageX: e.pageX,
      startScrollLeft: dragScroll.current.scrollLeft,
    });
  };

  const onMouseUpOrLeave = () => {
    setState(initialState);
  };

  const onMouseMove = (e) => {
    dragScroll.current.scrollLeft =
      state.startScrollLeft + (state.startPageX - e.pageX);
  };

  useEffect(() => {
    if (state.scrolling) {
      dragScroll.current.addEventListener('mousemove', onMouseMove);

      return () => {
        dragScroll.current.removeEventListener('mousemove', onMouseMove);
      };
    }

    return undefined;
  }, [state]);

  return (
    <S.DragScroll
      ref={dragScroll}
      className={className}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUpOrLeave}
      onMouseLeave={onMouseUpOrLeave}
      $scrolling={state.scrolling}
    >
      {children}
    </S.DragScroll>
  );
};

DragScroll.defaultProps = {
  className: undefined,
};

DragScroll.propTypes = {
  className: propTypes.string,
  children: propTypes.node.isRequired,
};

export default DragScroll;
