import React, { useState, useRef } from 'react';
import propTypes from 'prop-types';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import { useRouter } from 'next/router';
import Fuse from 'fuse.js';

import {
  structuredCategoriesAndSubjects,
  flattenedCategoriesAndSubjects,
} from 'src/constants';

import Step from './Step';

import * as S from './Search.style';

const fuse = new Fuse(flattenedCategoriesAndSubjects, {
  keys: ['name'],
  includeScore: true,
});

const Search = ({ searchOpen, setSearchOpen }) => {
  const buttonRef = useRef();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  const [subjectInput, setSubjectInput] = useState('');

  const searchResults = fuse.search(subjectInput).splice(0, 6);

  const {
    value: locationInput,
    setValue: setLocationInput,
    suggestions: { data: locationResults = [] },
  } = usePlacesAutocomplete({ requestOptions: { types: ['(regions)'] } });

  const handleSubmit = async (event) => {
    event.preventDefault();
    let url = new URL(`/search`, window.location.origin);

    if (subjectInput !== '') {
      for (const subject of flattenedCategoriesAndSubjects) {
        if (subject.name === subjectInput) {
          url = new URL(`/search/${subject.slug}`, window.location.origin);
        }
      }
    }

    if (searchInput !== '') {
      url.searchParams.append('search', searchInput);
    }

    if (locationInput !== '') {
      const results = await getGeocode({ address: locationInput });
      const { lat, lng } = await getLatLng(results[0]);
      url.searchParams.append('address', locationInput);
      url.searchParams.append('coordinates', `${lat}_${lng}`);
    }

    router.push(url.href);
  };

  return (
    <S.Search autocomplete="off" onSubmit={handleSubmit}>
      <S.Text onClick={() => setSearchOpen(true)}>Begin your search...</S.Text>
      <Step
        id="search-step"
        type="search"
        active={searchOpen && step === 1}
        setSearchOpen={setSearchOpen}
        value={searchInput}
        setValue={setSearchInput}
        onBack={() => setSearchOpen(false)}
        onNext={() => setStep(2)}
        onFocus={() => {
          setSearchOpen(true);
          setStep(1);
        }}
      />
      <Step
        id="subject-step"
        type="subject"
        active={searchOpen && step === 2}
        setSearchOpen={setSearchOpen}
        value={subjectInput}
        setValue={setSubjectInput}
        suggestions={searchResults.map(({ item: result }) => ({
          icon: 'book',
          key: result.slug,
          value: result.name,
          onClick: () => {
            setSubjectInput(result.name);
            setStep(3);
          },
        }))}
        categories={structuredCategoriesAndSubjects.map((category) => ({
          key: category.slug,
          value: category.name,
          onClick: () => {
            setSubjectInput(category.name);
            setStep(3);
          },
          subcategories: category.subjects.map((subcategory) => ({
            key: subcategory.slug,
            value: subcategory.name,
            onClick: () => {
              setSubjectInput(subcategory.name);
              setStep(3);
            },
          })),
        }))}
        onBack={() => setStep(1)}
        onNext={() => setStep(3)}
        onFocus={() => {
          setSearchOpen(true);
          setStep(2);
        }}
      />
      <Step
        id="location-step"
        type="location"
        active={searchOpen && step === 3}
        setSearchOpen={setSearchOpen}
        value={locationInput}
        setValue={setLocationInput}
        suggestions={locationResults.map((result) => ({
          icon: 'pin',
          key: result.place_id,
          value: result.description,
          onClick: () => {
            setLocationInput(result.description);
            buttonRef.current.focus();
            setSearchOpen(false);
          },
        }))}
        onBack={() => setStep(2)}
        onFocus={() => {
          setSearchOpen(true);
          setStep(3);
        }}
      />
      <S.Submit ref={buttonRef} type="submit" aria-label="Search">
        <S.SearchIcon />
      </S.Submit>
    </S.Search>
  );
};

Search.propTypes = {
  searchOpen: propTypes.bool.isRequired,
  setSearchOpen: propTypes.func.isRequired,
};

export default Search;
