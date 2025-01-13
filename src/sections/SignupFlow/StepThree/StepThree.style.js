import styled from 'styled-components';

import COMP1 from 'src/components/Button';
import COMP2 from 'src/components/Avatar';

export const StepThree = styled.div`
  max-width: 480px;
  margin: 0 auto;
`;

export const Button = styled(COMP1)`
  display: block;
  width: 100%;
  margin: 0 auto;
  max-width: 320px;
`;

export const Avatar = styled(COMP2)`
  display: block;
  width: 160px;
  margin: 0 auto 32px;
`;

export const ModalButton = styled(COMP1)`
  display: block;
  margin: 0 auto 32px;
`;
