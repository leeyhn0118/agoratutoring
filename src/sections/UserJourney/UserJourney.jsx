import React from 'react';

import theme from 'src/theme';

import studentGrid from 'src/assets/png/grid-green.png';
import tutorGrid from 'src/assets/png/grid-blue.png';

import * as S from './UserJourney.style';

const journeys = [
  {
    type: 'students',
    text: 'Find A Tutor',
    background: studentGrid,
    color: theme.color.green.primary,
    steps: [
      {
        name: 'Search for a tutor',
        text: 'Whether you know what you want to learn or want to explore what’s out there, use Agora to find your next tutor.',
      },
      {
        name: 'Start a conversation',
        text: 'Message them to start talking about what you’d like to learn. Work out logistics like where and how often you’d like to meet, as well as preferred methods of payment.',
      },
      {
        name: 'Begin learning',
        text: 'Get together with your tutor in public or at your home, and level up your skills and knowledge with the help of local expertise.',
      },
    ],
  },
  {
    type: 'Tutors',
    text: 'Become A Tutor',
    background: tutorGrid,
    color: theme.color.blue.primary,
    steps: [
      {
        name: 'Search for a student',
        text: 'There are always students in need and Agora Tutoring makes it easy for you to find your next client.',
      },
      {
        name: 'Make the connection',
        text: 'We make it easy to make the initial connection through our private messages or direct phone number.',
      },
      {
        name: 'Start earning',
        text: 'All of our tutors are self representing, which means that we do not take a cut in the tutors pay. This allows all of our tutors to earn their maximum earning potential!',
      },
    ],
  },
];

const UserJourney = () => (
  <S.UserJourney>
    <S.Title>Here&apos;s how it works.</S.Title>
    <S.Journeys>
      {journeys.map((journey) => (
        <S.Journey key={journey.type}>
          <S.Background
            src={journey.background}
            $color={journey.color}
            layout="fill"
          />
          <S.Type>For {journey.type}</S.Type>
          {journey.steps.map((step, i) => (
            <S.Step key={step.name}>
              <S.Counter $color={journey.color}>{i + 1}</S.Counter>
              <S.Name>{step.name}</S.Name>
              <S.Text>{step.text}</S.Text>
            </S.Step>
          ))}
          <S.Button href="/signup">{journey.text}</S.Button>
        </S.Journey>
      ))}
    </S.Journeys>
  </S.UserJourney>
);

export default UserJourney;
