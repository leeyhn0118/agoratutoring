import React from 'react';
import propTypes from 'prop-types';

import * as S from './Suggestions.style';

// The blur event first first onMouseDown which would close the menu before
// the onClick would be called. This prevents the issue by disabling it.
function onMouseDown(event) {
  event.preventDefault();
}

const Suggestions = ({ id, open, suggestions, activeDescendant }) => (
  <S.Suggestions
    $open={open && suggestions?.length > 0}
    role="listbox"
    aria-labelledby={`${id}-label`}
  >
    {suggestions.map((suggestion, i) => (
      <S.Suggestion
        key={suggestion.key}
        role="option"
        onMouseDown={onMouseDown}
        onClick={suggestion.onClick}
        id={`header-suggestion-${i}`}
        $active={activeDescendant && activeDescendant.key === suggestion.key}
      >
        {suggestion.icon === 'pin' && <S.Pin />}
        {suggestion.icon === 'book' && <S.Book />}
        {suggestion.value}
      </S.Suggestion>
    ))}
  </S.Suggestions>
);

Suggestions.defaultProps = {
  activeDescendant: undefined,
};

Suggestions.propTypes = {
  id: propTypes.string.isRequired,
  open: propTypes.bool.isRequired,
  suggestions: propTypes.arrayOf(
    propTypes.shape({
      key: propTypes.string.isRequired,
      value: propTypes.string.isRequired,
      icon: propTypes.oneOf(['book', 'pin']).isRequired,
      onClick: propTypes.func.isRequired,
    })
  ).isRequired,
  activeDescendant: propTypes.shape({
    index: propTypes.number.isRequired,
    type: propTypes.string.isRequired,
    key: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
  }),
};

export default Suggestions;
