import React from 'react';
import propTypes from 'prop-types';

import * as S from './Categories.style';

// The blur event first first onMouseDown which would close the menu before
// the onClick would be called. This prevents the issue by disabling it.
function onMouseDown(event) {
  event.preventDefault();
}

function isActive(activeDescendant, key) {
  return activeDescendant && activeDescendant.key === key;
}

const Categories = ({ open, categories, activeDescendant }) => (
  <S.Categories $open={open}>
    {categories.map((category) => (
      <S.Category key={category.key}>
        <S.Name
          onMouseDown={onMouseDown}
          onClick={category.onClick}
          $active={isActive(activeDescendant, category.key)}
        >
          {category.value}
        </S.Name>
        {category.subcategories.map((subcategory) => (
          <S.Subcategory
            key={subcategory.key}
            onMouseDown={onMouseDown}
            onClick={subcategory.onClick}
            $active={isActive(activeDescendant, subcategory.key)}
          >
            {subcategory.value}
          </S.Subcategory>
        ))}
      </S.Category>
    ))}
  </S.Categories>
);

Categories.defaultProps = {
  activeDescendant: undefined,
};

Categories.propTypes = {
  open: propTypes.bool.isRequired,
  categories: propTypes.arrayOf(
    propTypes.shape({
      key: propTypes.string.isRequired,
      value: propTypes.string.isRequired,
      onClick: propTypes.func.isRequired,
      subcategories: propTypes.arrayOf(
        propTypes.shape({
          key: propTypes.string.isRequired,
          value: propTypes.string.isRequired,
          onClick: propTypes.func.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  activeDescendant: propTypes.shape({
    index: propTypes.number.isRequired,
    type: propTypes.string.isRequired,
    key: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
  }),
};

export default Categories;
