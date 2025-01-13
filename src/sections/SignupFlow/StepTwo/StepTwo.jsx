import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { languages } from 'src/constants';

import usePatchFormHandler from 'src/hooks/usePatchFormHandler';

import FormMessage from 'src/components/FormMessage';
import { Select } from 'src/components/Inputs';

import query from './StepTwo.gql';
import * as S from './StepTwo.style';

const StepTwo = ({ setStep }) => {
  const { control, watch } = useForm();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [handleSubmit, { loading, formMessage }] = usePatchFormHandler(
    query.updateViewer,
    query.viewer,
    {
      variables: () => ({
        input: {
          patch: {
            languages: selectedLanguages,
            goals: watch('patch.goals'),
          },
        },
      }),
      onCompleted: () => setStep(3),
    }
  );

  const selectedLanguages = watch('patch.languages', []);

  useEffect(() => {
    setIsButtonDisabled(!selectedLanguages || selectedLanguages.length === 0);
  }, [selectedLanguages]);

  return (
    <S.StepTwo>
      <FormMessage message={formMessage} />
      <h3>Tell us a little more about yourself.</h3>
      <S.Form1
        columns={1}
        template={['languages', 'goals', 'submit']}
        onSubmit={handleSubmit}
      >
        <S.SelectWrapper>
          <S.Title>What languages do you speak?<span style={{ color: 'red' }}>*</span></S.Title>
          <Select
            required
            multiple
            area="languages"
            name="patch.languages"
            label="Include any you could teach or learn in"
            displayName="Languages"
            placeholder="Add at least one language."
            control={control}
            options={languages}
          />
        </S.SelectWrapper>

        <S.TextWrapper>
          <S.Title>
            What are you looking to get from Agora?
            <span style={{ fontWeight: 'normal' }}>(Optional)</span>
          </S.Title>
          <S.Text1
            required={false}
            area="goals"
            name="patch.goals"
            label="Tell us about your goals for your student or tutor journey."
            displayName="Goals"
            placeholder="My goals are..."
            control={control}
          />
        </S.TextWrapper>

         <S.Button 
          area="submit" type="submit" loading={loading} isdisabled={isButtonDisabled}
          >
          CONTINUE
        </S.Button>
      </S.Form1>
    </S.StepTwo>
  );
};

StepTwo.propTypes = {
  setStep: propTypes.func.isRequired,
};

export default StepTwo;
