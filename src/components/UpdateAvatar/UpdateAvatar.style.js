import styled from 'styled-components';

import COMP1 from 'src/components/Modal';
import COMP2 from 'react-easy-crop';
import COMP3 from 'src/components/Button';

export const Input = styled.input`
  display: none;
`;

export const Modal = styled(COMP1)``;

export const Container = styled.div`
  position: relative;
  padding-bottom: 60%;
  border-radius: 4px;
  overflow: hidden;
  margin: 0 0 32px;
`;

export const UpdateAvatar = styled.div``;

export const Editor = styled(COMP2)``;

export const Label = styled.label`
  position: relative;
  display: block;
  line-height: 1;
  max-width: 320px;
  font-weight: 500;
  font-size: 0.875rem;
  margin: 0 auto;
  color: ${({ theme }) => theme.text.medium};
`;

export const Indicator = styled.span`
  position: absolute;
  right: 0;
`;

export const Range = styled.input`
  display: block;
  padding: 18px 0;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  max-width: 320px;
  cursor: grab;
  margin: 0 auto 32px;
  background: transparent;

  :active {
    cursor: grabbing;
  }

  /* Removes default focus */
  :focus {
    outline: none;
  }

  /***** Chrome, Safari, Opera and Edge Chromium styles *****/
  /* slider track */
  ::-webkit-slider-runnable-track {
    background-color: ${({ theme }) => theme.text.light};
    border-radius: 4px;
    height: 4px;
  }

  /* slider thumb */
  ::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    margin-top: -8px; /* Centers thumb on the track */

    /*custom styles*/
    background-color: ${({ theme }) => theme.color.blue.secondary};
    border-radius: 10px;
    height: 20px;
    width: 20px;
  }

  :focus-visible::-webkit-slider-thumb {
    outline: 2px solid black;
    outline-offset: 0.125rem;
  }

  /******** Firefox styles ********/
  /* slider track */
  ::-moz-range-track {
    background-color: ${({ theme }) => theme.text.light};
    border-radius: 4px;
    height: 4px;
  }

  /* slider thumb */
  ::-moz-range-thumb {
    appearance: none;
    margin-top: -8px; /* Centers thumb on the track */

    /*custom styles*/
    background-color: ${({ theme }) => theme.color.blue.secondary};
    border-radius: 10px;
    height: 20px;
    width: 20px;
  }

  :focus-visible::-moz-range-thumb {
    outline: 2px solid black;
    outline-offset: 0.125rem;
  }
`;

export const Button = styled(COMP3)`
  display: block;
  width: 100%;
`;
