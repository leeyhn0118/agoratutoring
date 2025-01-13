import React, { useContext } from 'react';

import NotificationContext from 'src/contexts/NotificationContext';
import useMutationHandler from 'src/hooks/useMutationHandler';

import query from './StepOne.gql';
import * as S from './StepOne.style';

const StepOne = () => {
  const { addNotification } = useContext(NotificationContext);
  const [createVerify] = useMutationHandler(query.createVerify, {
    onCompleted: () => {
      addNotification({
        type: 'toast',
        level: 'success',
        timeout: 6000,
        content: 'Verification email re-sent.',
      });
    },
  });

  return (
    <S.Overlay>
      <S.BackgroundBlur />
      <S.StepOne>
        <S.Logo />
        <S.Title>Verify your email account.</S.Title>
        <S.Text>
          A confirmation email has just been sent to you. Please click the link
          in the email to verify your email address and continue the account
          creation process.
        </S.Text>
        <S.Text>
          If it hasn’t arrived after three minutes,
          <S.InlineButton onClick={createVerify}>
            click here to resend the email.
          </S.InlineButton>
        </S.Text>
      </S.StepOne>
    </S.Overlay>
  );
};

export default StepOne;
