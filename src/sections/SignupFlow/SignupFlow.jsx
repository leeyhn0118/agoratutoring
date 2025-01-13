import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';

import query from './SignupFlow.gql';
import * as S from './SignupFlow.style';

const SignupFlow = () => {
  const [step, setStep] = useState(1);
  const { data, loading } = useQuery(query.viewer, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return null;

  if (step === 1 && data?.viewer?.roles?.includes('verified')) {
    setStep(2);
  }

  const handleBack = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <S.SignupFlow>
      <S.ProgressBar progress={step / 4} />
      <S.Header>
        <S.BackButton onClick={handleBack}>&lt; Back</S.BackButton>
        <S.PageIndicator>Page {step / 2} / 2</S.PageIndicator>
      </S.Header>
      <S.Title>
        {step === 1 && 'Verify Your Email Address'}
        {step === 2 && 'Set up your Agora profile.'}
        {step === 3 && 'Add A Profile Photo'}
        {step === 4 && 'Thanks For Joining Agora!'}
      </S.Title>
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo setStep={setStep} />}
      {step === 3 && <StepThree setStep={setStep} />}
      {step === 4 && <StepFour />}
    </S.SignupFlow>
  );
};

export default SignupFlow;
