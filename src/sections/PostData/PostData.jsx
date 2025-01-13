import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import {
  Paid,
  Work,
  Place,
  Today,
  Category,
  HomeWork,
  Favorite,
  FavoriteBorder,
} from '@styled-icons/material-outlined';

import theme from 'src/theme';

import NotificationContext from 'src/contexts/NotificationContext';

import useMutationHandler from 'src/hooks/useMutationHandler';

import query from './PostData.gql';
import * as S from './PostData.style';

const color = {
  student: theme.color.green.primary,
  tutor: theme.color.blue.primary,
};

const PostData = ({ post }) => {
  const { addNotification } = useContext(NotificationContext);

  const { data } = useQuery(query.viewer, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
  });
  const [savePost] = useMutationHandler(query.savePost, {
    variables: () => ({ input: { id: post.id } }),
  });
  const [unsavePost] = useMutationHandler(query.unsavePost, {
    variables: () => ({ input: { id: post.id } }),
  });

  const handleClick = () => {
    if (!data.viewer) {
      addNotification({
        type: 'toast',
        timeout: 4000,
        level: 'error',
        content: 'Login to save posts',
      });
    } else if (post.context.hasSaved) {
      unsavePost();
    } else {
      savePost();
    }
  };

  return (
    <S.PostData>
      <S.TypeIndicator $color={color[post.type]} />
      <S.Content>
        <S.Title>
          {post.type.charAt(0).toUpperCase() + post.type.substr(1)} -{' '}
          {post.title}
        </S.Title>
        <S.SectionTitle>Post Description</S.SectionTitle>
        <S.Description dangerouslySetInnerHTML={{ __html: post.description }} />
        <S.SectionTitle>Post Tags</S.SectionTitle>
        <S.Tags>
          {post.subjects.map((subject) => (
            <S.Tag $color="#BCCCEA" key={subject}>
              {subject}
            </S.Tag>
          ))}
          {post.levels.map((subject) => (
            <S.Tag $color="#EFE1C3" key={subject}>
              {subject}
            </S.Tag>
          ))}
          {post.courses.map((subject) => (
            <S.Tag $color="#D1E2C7" key={subject}>
              {subject}
            </S.Tag>
          ))}
        </S.Tags>
        <S.SectionTitle>Post Details</S.SectionTitle>
        <S.Details>
          <S.Detail>
            <S.Icon as={Category} />
            <S.DetailContainer>
              <S.DetailTitle>Post Category</S.DetailTitle>
              {post.category}
            </S.DetailContainer>
          </S.Detail>
          <S.Detail>
            <S.Icon as={Paid} />
            <S.DetailContainer>
              <S.DetailTitle>Hourly Rate</S.DetailTitle>$
              {(post.rate / 100).toFixed(2)} / hr
            </S.DetailContainer>
          </S.Detail>
          <S.Detail>
            <S.Icon as={Work} />
            <S.DetailContainer>
              <S.DetailTitle>Experience</S.DetailTitle>
              {post.experience}
            </S.DetailContainer>
          </S.Detail>
          <S.Detail>
            <S.Icon as={Today} />
            <S.DetailContainer>
              <S.DetailTitle>Created On</S.DetailTitle>
              {new Date(parseInt(post.created, 10)).toDateString()}
            </S.DetailContainer>
          </S.Detail>
          <S.Detail>
            <S.Icon as={Place} />
            <S.DetailContainer>
              <S.DetailTitle>Will Travel</S.DetailTitle>
              {post.options.willTravel ? 'Yes' : 'No'}
            </S.DetailContainer>
          </S.Detail>
          <S.Detail>
            <S.Icon as={HomeWork} />
            <S.DetailContainer>
              <S.DetailTitle>Has Location</S.DetailTitle>
              {post.options.hasLocation ? 'Yes' : 'No'}
            </S.DetailContainer>
          </S.Detail>
        </S.Details>
      </S.Content>
      <S.SaveButton onClick={handleClick}>
        <S.SaveIcon
          as={post.context.hasSaved ? Favorite : FavoriteBorder}
          aria-label={`${post.context.hasSaved ? 'Save' : 'Unsave'} Post`}
        />
      </S.SaveButton>
    </S.PostData>
  );
};

PostData.propTypes = {
  post: propTypes.shape({
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
    experience: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    created: propTypes.string.isRequired,
    creator: propTypes.shape({
      avatarUrl: propTypes.string,
      name: propTypes.string.isRequired,
    }).isRequired,
    subjects: propTypes.arrayOf(propTypes.string).isRequired,
    levels: propTypes.arrayOf(propTypes.string).isRequired,
    courses: propTypes.arrayOf(propTypes.string).isRequired,
    rate: propTypes.number.isRequired,
    options: propTypes.shape({
      willTravel: propTypes.bool.isRequired,
      hasLocation: propTypes.bool.isRequired,
    }).isRequired,
    context: propTypes.shape({
      distance: propTypes.number.isRequired,
      hasSaved: propTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PostData;
