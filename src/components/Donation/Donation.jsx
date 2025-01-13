import React, { useState } from 'react';
import propTypes from 'prop-types';

import useInputFormHandler from 'src/hooks/useInputFormHandler';

import Form from 'src/components/Form';
import Modal from 'src/components/Modal';
import FormMessage from 'src/components/FormMessage';

import { useQuery } from '@apollo/client';
import query from './Donation.gql';
import viwerQuery from '../../pages/profile/settings.gql';
import * as S from './Donation.style';

const Donation = ({ open, close, className }) => {
  const [option, setOption] = useState('firstOption');
  const [amount, setAmount] = useState(10);
  const [showOtherAmountInput, setShowOtherAmountInput] = useState(false);
  const { data } = useQuery(viwerQuery.viewer);
  const userEmail = data?.viewer?.email || null;

  let origin;

  if (typeof window !== 'undefined') {
    origin = window.location.origin;
  }

  const [handleSubmit, { loading, control, formMessage }] = useInputFormHandler(
    query.sendDonation,
    {
      variables: async () => ({
        input: {
          amount,
          currency: 'CAD',
          type: 'donation',
          origin,
          userEmail,
        },
      }),
      onCompleted: ({ data: session, addNotification }) => {
        const { payment } = session?.sendDonation || {};
        if (!payment) {
          addNotification({
            type: 'toast',
            level: 'error',
            content: 'Something went wrong. Please try again later.',
          });
          return;
        }

        const { url } = payment;

        window.location.href = url;
      },
    }
  );

  const handleRadioChange = (payloadOption) => {
    switch (payloadOption) {
      case 'firstOption':
        setAmount(10);
        setShowOtherAmountInput(false);
        break;
      case 'secondOption':
        setAmount(20);
        setShowOtherAmountInput(false);
        break;
      case 'other':
        setShowOtherAmountInput(true);
        setAmount('');
        break;
      default:
        break;
    }

    setOption(payloadOption);
  };

  const checkFloat = (e) => {
    const { value } = e.target;
    const regex = /^[0-9]+(\.[0-9]+)?$/;
    if (value === '' || value === 0) {
      setAmount('');
      return;
    }
    if (!regex.test(value)) {
      e.target.value = value.slice(0, -1);
      return;
    }
    setAmount(parseFloat(value));
  };

  return (
    <Modal
      title="Send us a Gift"
      position="center"
      open={open}
      close={close}
      className={className}
      contentLabel="Donate for better service"
    >
      <FormMessage message={formMessage} />
      <Form
        columns={1}
        template={[
          'firstOption',
          'secondOption',
          'thirdOption',
          'amount',
          'submit',
        ]}
        onSubmit={handleSubmit}
      >
        <S.RadioWrapper>
          <S.Radio
            id="firstOption"
            name="firstOption"
            value="firstOption"
            checked={option === 'firstOption'}
            onChange={() => handleRadioChange('firstOption')}
          />
          <S.RadioLabel
            htmlFor="firstOption"
            $checked={option === 'firstOption'}
          >
            10$
          </S.RadioLabel>
        </S.RadioWrapper>
        <S.RadioWrapper>
          <S.Radio
            id="secondOption"
            name="giftOption"
            value="secondOption"
            checked={option === 'secondOption'}
            onChange={() => handleRadioChange('secondOption')}
          />
          <S.RadioLabel
            htmlFor="secondOption"
            $checked={option === 'secondOption'}
          >
            20$
          </S.RadioLabel>
        </S.RadioWrapper>
        <S.RadioWrapper>
          <S.Radio
            id="thirdOption"
            name="giftOption"
            value="thirdOption"
            checked={option === 'other'}
            onChange={() => handleRadioChange('other')}
          />
          <S.RadioLabel htmlFor="thirdOption" $checked={option === 'other'}>
            Other amount:
          </S.RadioLabel>
        </S.RadioWrapper>
        {showOtherAmountInput && (
          <S.Input
            required
            area="amount"
            name="amount"
            value={amount}
            placeholder="Provide your own amount in CAD"
            displayName="Amount"
            onChange={checkFloat}
            control={control}
          />
        )}
        <S.Button area="submit" type="submit" loading={loading}>
          Send
        </S.Button>
      </Form>
    </Modal>
  );
};

Donation.defaultProps = {
  className: undefined,
};

Donation.propTypes = {
  open: propTypes.bool.isRequired,
  close: propTypes.func.isRequired,
  className: propTypes.string,
};

export default Donation;
