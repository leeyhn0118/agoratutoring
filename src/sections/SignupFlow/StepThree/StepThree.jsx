import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import useMutationHandler from 'src/hooks/useMutationHandler';

import UpdateAvatar from 'src/components/UpdateAvatar';

import query from './StepThree.gql';
import * as S from './StepThree.style';

const StepThree = ({ setStep }) => {
  const [open, setOpen] = useState(false);

  const { data } = useQuery(query.viewer, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
  });

  const [completeViewer] = useMutationHandler(query.completeViewer);

  return (
    <S.StepThree>
      <S.Avatar url={data?.viewer?.avatarUrl} />
      <S.ModalButton outline onClick={() => setOpen(true)}>
        Add Profile Photo
      </S.ModalButton>
      <UpdateAvatar open={open} close={() => setOpen(false)} />
      <S.Button
        onClick={async () => {
          await completeViewer();
          setStep(4);
        }}
      >
        Complete Profile →
      </S.Button>
    </S.StepThree>
  );
};

StepThree.propTypes = {
  setStep: propTypes.func.isRequired,
};

export default StepThree;
