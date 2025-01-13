import React from 'react';

import * as S from './StepFour.style';

const StepFour = () => (
  <S.StepFour>
    <S.Title>I’m a tutor looking for students</S.Title>
    <S.ButtonWrapper>
      <S.Button outline href="/post/create?type=tutor">
        Create Tutor Post →
      </S.Button>
      <S.Button outline href="/search?type=tutor">
        Search Tutor Posts →
      </S.Button>
    </S.ButtonWrapper>
    <S.Title>I’m a student looking for tutors</S.Title>
    <S.ButtonWrapper>
      <S.Button outline href="/post/create?type=student">
        Create Student Post →
      </S.Button>
      <S.Button outline href="/search?type=student">
        Search Student Posts →
      </S.Button>
    </S.ButtonWrapper>
    <S.Title>- or -</S.Title>
    <S.FullButton href="/search">Explore All Posts →</S.FullButton>
  </S.StepFour>
);

export default StepFour;
