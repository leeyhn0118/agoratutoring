import React from 'react';

import teamwork from 'src/assets/png/teamwork.png';

import * as S from './ValueProposition.style';

const propositions = [
  {
    icon: S.Learn,
    name: 'Learn',
    text: 'Level up in subjects that you need help with, or skills that you’d like to gain.',
  },
  {
    icon: S.Teach,
    name: 'Teach',
    text: 'Have something you’d like to share? Become a tutor!',
  },
  {
    icon: S.Connect,
    name: 'Connect',
    text: 'Discover the best tutors in your area and begin a conversation.',
  },
];

const ValueProposition = () => (
  <S.ValueProposition>
    <S.Wrapper>
      <S.Image src={teamwork} />
      <S.Content>
        <S.Title>Learn anything you’d like from experts in your area.</S.Title>
        <S.Subtitle>With Agora you can: </S.Subtitle>
        <S.Propositions>
          {propositions.map((proposition) => (
            <S.Proposition key={proposition.name}>
              <S.Header>
                <proposition.icon />
                <S.Name>{proposition.name}</S.Name>
              </S.Header>
              <S.Text>{proposition.text}</S.Text>
            </S.Proposition>
          ))}
        </S.Propositions>
      </S.Content>
    </S.Wrapper>
  </S.ValueProposition>
);

export default ValueProposition;
