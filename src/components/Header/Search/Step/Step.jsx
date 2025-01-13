import React, { useRef, useState, useEffect } from 'react';
import propTypes from 'prop-types';

import Suggestions from './Suggestions';
import Categories from './Categories';
import MobileMenu from './MobileMenu';

import * as S from './Step.style';

const KEYS = {
  ENTER: 13,
  ESCAPE: 27,
  UP: 38,
  DOWN: 40,
};

function getDescendants(array, type) {
  let index = 0;
  return array.reduce((descendants, object) => {
    descendants.push({ index, type, key: object.key, value: object.value });
    index += 1;

    if (object.subcategories) {
      object.subcategories.forEach((subcategory) => {
        descendants.push({
          index,
          type,
          key: subcategory.key,
          value: subcategory.value,
        });
        index += 1;
      });
    }

    return descendants;
  }, []);
}

const Step = ({
  id,
  type,
  active,
  value,
  setValue,
  setSearchOpen,
  suggestions,
  categories,
  onBack,
  onNext,
  onFocus,
}) => {
  const wrapperRef = useRef();
  const [focused, setFocused] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);
  const [activeDescendant, setActiveDescendant] = useState();

  useEffect(() => {
    if (active) document.getElementById(`${id}-input`).focus();
    if (!active && hasChanged) setHasChanged(false);
  }, [active]);

  useEffect(() => {
    const { current: wrapper } = wrapperRef;

    if (!focused && wrapper.contains(document.activeElement)) {
      setFocused(true);
    } else if (focused && !wrapper.contains(document.activeElement)) {
      setFocused(false);
    }
  }, []);

  const handleKeyDown = (event) => {
    let descendants;

    if (categories && value === '') {
      descendants = getDescendants(categories, 'category');
    } else if (suggestions && value !== '') {
      descendants = getDescendants(suggestions, 'suggestion');
    }

    if (event.keyCode === KEYS.ENTER) {
      if (activeDescendant) setValue(activeDescendant.value);
    } else if (event.keyCode === KEYS.ESCAPE) {
      setValue('');
      setSearchOpen(false);
      document.activeElement.blur();
    } else if (descendants) {
      const { length } = descendants;

      if (event.keyCode === KEYS.UP) {
        event.preventDefault();

        if (!activeDescendant) {
          setActiveDescendant(descendants[length - 1]);
        } else if (activeDescendant.index !== 0) {
          setActiveDescendant(descendants[activeDescendant.index - 1]);
        } else {
          setActiveDescendant();
        }
      } else if (event.keyCode === KEYS.DOWN) {
        if (!activeDescendant) {
          setActiveDescendant(descendants[0]);
        } else if (activeDescendant.index !== length - 1) {
          setActiveDescendant(descendants[activeDescendant.index + 1]);
        } else {
          setActiveDescendant();
        }
      }
    }
  };

  return (
    <S.Step ref={wrapperRef} $active={active} id={`${id}-step`}>
      <S.InputWrapper>
        <S.BackButton type="button" aria-label="Go Back" onClick={onBack}>
          <S.Back />
        </S.BackButton>
        <S.Combobox
          id={`${id}-combobox`}
          role="combobox"
          aria-expanded={!!value}
          aria-haspopup="listbox"
          aria-owns={`${id}-listbox`}
        >
          <S.Label
            $hidden={activeDescendant || value !== ''}
            htmlFor={`${id}-input`}
          >
            {type === 'search' && (
              <>
                <S.Search />
                Search for ...
              </>
            )}
            {type === 'subject' && (
              <>
                <S.Category />
                All Subjects
                <S.Arrow />
              </>
            )}
            {type === 'location' && (
              <>
                <S.Location />
                My Location
                <S.Arrow />
              </>
            )}
          </S.Label>
          <S.Input
            id={`${id}-input`}
            type="text"
            autoComplete="off"
            aria-controls={`${id}-listbox`}
            aria-activedescendant={
              activeDescendant &&
              `header-${activeDescendant.type}-${activeDescendant.index}`
            }
            value={(activeDescendant && activeDescendant.value) || value}
            onFocus={() => {
              setFocused(true);
              onFocus();
            }}
            $seperator={type !== 'search'}
            onKeyDown={handleKeyDown}
            onChange={({ target: { value: newValue } }) => {
              if (activeDescendant) {
                setActiveDescendant(undefined);
              }
              setValue(newValue);
              setHasChanged(true);
            }}
            onBlur={() => {
              setFocused(false);
              if (activeDescendant) {
                setValue(activeDescendant.value);
                setActiveDescendant(undefined);
              }
            }}
          />
        </S.Combobox>
        <S.ClearButton
          type="button"
          aria-label="Clear Search"
          onClick={() => setValue('')}
          $open={active && (activeDescendant || value !== '')}
        >
          <S.Clear />
        </S.ClearButton>
      </S.InputWrapper>
      {categories && value === '' && (
        <Categories
          id={id}
          categories={categories}
          open={active && !hasChanged}
          activeDescendant={activeDescendant}
        />
      )}
      {suggestions && value !== '' && (
        <Suggestions
          id={id}
          suggestions={suggestions}
          open={focused && active && hasChanged}
          activeDescendant={activeDescendant}
        />
      )}
      <MobileMenu onNext={onNext} />
    </S.Step>
  );
};

Step.defaultProps = {
  suggestions: undefined,
  categories: undefined,
  onNext: undefined,
};

Step.propTypes = {
  id: propTypes.string.isRequired,
  active: propTypes.bool.isRequired,
  type: propTypes.oneOf(['search', 'subject', 'location']).isRequired,
  value: propTypes.string.isRequired,
  setValue: propTypes.func.isRequired,
  setSearchOpen: propTypes.func.isRequired,
  suggestions: propTypes.arrayOf(propTypes.object),
  categories: propTypes.arrayOf(propTypes.object),
  onBack: propTypes.func.isRequired,
  onNext: propTypes.func,
  onFocus: propTypes.func.isRequired,
};

export default Step;
