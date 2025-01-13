import { useRouter } from 'next/router';
import {
  useQueryParam,
  useQueryParams,
  encodeQueryParams,
  StringParam,
  NumberParam,
  withDefault,
  BooleanParam,
  DelimitedNumericArrayParam,
} from 'next-query-params';

import { flattenedCategoriesAndSubjects } from 'src/constants';

import SearchMap from 'src/sections/SearchMap';
import SearchList from 'src/sections/SearchList';
import SearchFilter from 'src/sections/SearchFilter';

import * as S from './search.style';

function getNameBySlug(slug) {
  return (
    flattenedCategoriesAndSubjects.find((item) => item.slug.endsWith(slug)) ||
    {}
  ).name;
}

function getSlugByName(name) {
  return (
    flattenedCategoriesAndSubjects.find((item) => item.name === name) || {}
  ).slug;
}

const paramsSchema = {
  saved: withDefault(BooleanParam, false),
  search: withDefault(StringParam, null),
  distance: withDefault(NumberParam, null),
  rateMin: withDefault(NumberParam, null),
  rateMax: withDefault(NumberParam, null),
  level: withDefault(StringParam, null),
  address: withDefault(StringParam, null),
  coordinates: withDefault(DelimitedNumericArrayParam, null),
  type: withDefault(StringParam, null),
};

const SearchPage = () => {
  const router = useRouter();
  const [view, setView] = useQueryParam(
    'view',
    withDefault(StringParam, 'map')
  );
  const [sort, setSort] = useQueryParam(
    'sort',
    withDefault(StringParam, 'NEWEST')
  );
  const [params] = useQueryParams(paramsSchema);

  const filter = {
    ...params,
    category: getNameBySlug(router.query.category) || null,
    subject: getNameBySlug(router.query.subject) || null,
  };

  const setFilter = ({ category, subject, ...newParams }) => {
    let base = `/search`;
    if (category && !subject) base += `/${getSlugByName(category)}`;
    if (category && subject) base += `/${getSlugByName(subject)}`;

    const encodedParams = Object.entries(
      encodeQueryParams(paramsSchema, newParams)
    ).reduce(
      (acc, [key, value]) => (value !== null ? { ...acc, [key]: value } : acc),
      {}
    );

    if (view !== 'map') encodedParams.view = view;
    if (sort !== 'NEWEST') encodedParams.sort = sort;

    let stringParams = new URLSearchParams(encodedParams).toString();

    if (stringParams !== '') stringParams = `?${stringParams}`;

    router.push(base + stringParams);
  };

  return (
    <S.SearchPage>
      <S.GlobalStyle />
      <S.ScrollableArea>
        <SearchFilter
          filter={filter}
          setFilter={setFilter}
          sort={sort}
          setSort={setSort}
          view={view}
          setView={setView}
        />
        <SearchList
          show={view === 'list'}
          filter={filter}
          setFilter={setFilter}
          sort={sort}
        />
      </S.ScrollableArea>
      <SearchMap show={view === 'map'} filter={filter} setFilter={setFilter} />
    </S.SearchPage>
  );
};

export default SearchPage;
