import React, { useContext } from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import {
  Paid,
  Work,
  Place,
  HomeWork,
  Favorite,
  FavoriteBorder,
  ArrowRightAlt,
} from '@styled-icons/material-outlined';

import theme from 'src/theme';

import NotificationContext from 'src/contexts/NotificationContext';

import useMutationHandler from 'src/hooks/useMutationHandler';

import query from './PostCard.gql';
import * as S from './PostCard.style';

const color = {
  student: theme.color.green.primary,
  tutor: theme.color.blue.primary,
};

const PostCard = ({ post, family }) => {
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
    <S.PostCard $family={family}>
      <Link passHref href={`/post/${post.id}`}>
        <S.Link>
          <S.TypeIndicator $color={color[post.type]} />
          <S.Info $family={family}>
            <S.Creator>
              <S.Avatar $family={family} url={post.creator.avatarUrl} />
              <S.Meta>
                <S.Name>{post.creator.name}</S.Name>
                <S.Distance>
                  {family === 'condensed' && post.category}
                  {(family === 'normal' || family === 'complete') &&
                    `${parseInt(post.context.distance / 1000, 10)} km away`}
                </S.Distance>
              </S.Meta>
            </S.Creator>
            {(family === 'normal' || family === 'complete') && (
              <S.Data>
                <S.Label>Category</S.Label>
                <S.Category>{post.category}</S.Category>
              </S.Data>
            )}
            {(family === 'condensed' || family === 'normal') && (
              <S.Data>
                {family === 'normal' && <S.Label>Subjects</S.Label>}
                <S.Tags $family={family}>
                  {post.subjects.map((subject) => (
                    <S.Tag $color="#BCCCEA" key={subject}>
                      {subject}
                    </S.Tag>
                  ))}
                </S.Tags>
              </S.Data>
            )}
            {(family === 'normal' || family === 'complete') && (
              <S.Details>
                <S.Detail>
                  <S.Icon as={Paid} />${(post.rate / 100).toFixed(2)} / hr
                </S.Detail>
                <S.Detail>
                  <S.Icon as={Work} />
                  {post.experience}
                </S.Detail>
                <S.Detail>
                  <S.Icon as={Place} />
                  {post.options.willTravel ? 'Will' : 'Wont'} Travel
                </S.Detail>
                <S.Detail>
                  <S.Icon as={HomeWork} />
                  {post.options.hasLocation ? 'Has' : 'Needs'} Location
                </S.Detail>
              </S.Details>
            )}
          </S.Info>
          {family === 'complete' && (
            <S.Content>
              <S.Title>{post.title}</S.Title>
              <S.Description>{post.description}</S.Description>
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
            </S.Content>
          )}
          <S.ButtonWrapper $family={family}>
            <S.ViewButton $family={family}>
              {family === 'condensed' && (
                <S.ActionIcon as={ArrowRightAlt} arial-label="view post" />
              )}
              {(family === 'normal' || family === 'complete') && 'View Post'}
            </S.ViewButton>
          </S.ButtonWrapper>
        </S.Link>
      </Link>
      <S.SaveButton $family={family} onClick={handleClick}>
        <S.ActionIcon
          $family={family}
          as={post.context.hasSaved ? Favorite : FavoriteBorder}
          aria-label={`${post.context.hasSaved ? 'Save' : 'Unsave'} Post`}
        />
      </S.SaveButton>
    </S.PostCard>
  );
};

PostCard.propTypes = {
  post: propTypes.shape({
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
    experience: propTypes.string.isRequired,
    title: propTypes.string,
    description: propTypes.string,
    creator: propTypes.shape({
      avatarUrl: propTypes.string,
      name: propTypes.string.isRequired,
    }).isRequired,
    subjects: propTypes.arrayOf(propTypes.string).isRequired,
    levels: propTypes.arrayOf(propTypes.string),
    courses: propTypes.arrayOf(propTypes.string),
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
  family: propTypes.oneOf(['condensed', 'normal', 'complete']).isRequired,
};

export default PostCard;
