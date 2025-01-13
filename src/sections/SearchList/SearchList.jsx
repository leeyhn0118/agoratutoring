import propTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import PostCard from 'src/components/PostCard';

import query from './SearchList.gql';
import * as S from './SearchList.style';

const SearchList = ({ show, filter, setFilter, sort }) => {
  const { data, loading, fetchMore } = useQuery(query.allPosts, {
    variables: {
      sort,
      filter: {
        ...filter,
        address: undefined,
        distance: filter.distance || 30000,
      },
      page: { first: 25 },
    },
  });

  if (!data) return null;

  if (data.allPosts.edges.length === 0) {
    return (
      <S.SearchList $show={show}>
        <S.Text>Couldn&apos;t find any posts with those filters</S.Text>
        <S.Button
          onClick={() => {
            setFilter({});
          }}
        >
          Reset Filters
        </S.Button>
      </S.SearchList>
    );
  }

  return (
    <S.InfiniteScroll
      $show={show}
      threshold={40}
      useWindow={false}
      hasMore={!loading && data.allPosts.page.hasNextPage}
      loadMore={() => {
        if (!loading && data.allPosts.page.hasNextPage) {
          fetchMore({
            variables: {
              page: {
                first: 25,
                after: data.allPosts.page.endCursor,
              },
            },
          });
        }
      }}
    >
      {data.allPosts.edges.map(({ node }) => (
        <PostCard key={node.id} family="complete" post={node} />
      ))}
      {!data.allPosts.page.hasNextPage && (
        <S.EndOfResults>End of results</S.EndOfResults>
      )}
    </S.InfiniteScroll>
  );
};

SearchList.propTypes = {
  show: propTypes.bool.isRequired,
  filter: propTypes.object.isRequired,
  setFilter: propTypes.func.isRequired,
  sort: propTypes.string.isRequired,
};

export default SearchList;
