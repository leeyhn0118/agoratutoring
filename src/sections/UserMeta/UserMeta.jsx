import React from 'react';
import propTypes from 'prop-types';
import {
  History,
  Language,
  HistoryEdu,
  Work,
} from '@styled-icons/material-rounded';

import Section from './Section';

import * as S from './UserMeta.style';

const UserMeta = ({ user }) => {
  const details = [
    {
      icon: History,
      title: 'Member Since',
      value: new Date(parseInt(user.created, 10)).toDateString(),
    },
  ];

  if (user.languages) {
    details.push({
      icon: Language,
      title: 'Languages',
      value: user.languages.join(', '),
    });
  }

  if (user.education?.level) {
    details.push({
      icon: Work,
      title: 'Education Level',
      value: user.education.level,
    });
  }

  if (user.education?.description) {
    details.push({
      icon: HistoryEdu,
      title: 'Education Description',
      value: user.education.description,
    });
  }

  return (
    <S.UserMeta>
      <Section title="User Details">
        <S.Details>
          {details.map((detail) => (
            <S.Detail>
              <S.Icon as={detail.icon} />
              <S.Text>
                <S.Title>{detail.title}</S.Title>
                <S.Value>{detail.value}</S.Value>
              </S.Text>
            </S.Detail>
          ))}
        </S.Details>
      </Section>
      {user.description && (
        <Section title="Description">{user.description}</Section>
      )}
    </S.UserMeta>
  );
};

UserMeta.propTypes = {
  user: propTypes.shape({
    created: propTypes.string.isRequired,
    languages: propTypes.arrayOf(propTypes.string),
    education: propTypes.shape({
      level: propTypes.string,
      description: propTypes.string,
    }),
    description: propTypes.string,
  }).isRequired,
};

export default UserMeta;
