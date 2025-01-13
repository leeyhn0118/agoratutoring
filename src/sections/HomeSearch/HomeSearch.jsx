import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import { structuredCategoriesAndSubjects } from 'src/constants';

import { createSearchUrl } from 'src/utilities/search';

import query from './HomeSearch.gql';
import * as S from './HomeSearch.style';

const HomeSearch = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState();
  const { loading, data } = useQuery(query, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
    variables: { filter: { distance: 30000 } },
  });

  return (
    <S.HomeSearch>
      <S.Form
        onSubmit={(event) => {
          event.preventDefault();
          router.push(createSearchUrl({ search, subject: selectedCategory }));
        }}
      >
        <S.Title>Find the right tutor for you.</S.Title>
        <S.Label htmlFor="HomeSearchInput">I need tutoring in</S.Label>
        <S.Input
          value={search}
          id="HomeSearchInput"
          placeholder="Search for anything..."
          onChange={({ target: { value: newValue } }) => setSearch(newValue)}
        />
        <S.CategoriesTitle>Popular categories</S.CategoriesTitle>
        <S.Categories>
          <S.Track>
            {structuredCategoriesAndSubjects.map(
              (category, i) =>
                i < 4 && (
                  <S.Category
                    key={category.slug}
                    type="button"
                    onClick={() =>
                      setSelectedCategory(
                        selectedCategory === category.slug
                          ? undefined
                          : category.slug
                      )
                    }
                    $active={selectedCategory === category.slug}
                  >
                    <S.Image src={category.image} />
                    <S.CategoryName>{category.name}</S.CategoryName>
                  </S.Category>
                )
            )}
          </S.Track>
        </S.Categories>
        <S.Button type="submit">Find all tutors near me</S.Button>
      </S.Form>
      <S.StaticMap
        zoom={10}
        loading={loading}
        pins={data?.allPins}
        center={data?.coordinates || [-113.44087219238281, 53.58702087402344]}
      />
    </S.HomeSearch>
  );
};

export default HomeSearch;
