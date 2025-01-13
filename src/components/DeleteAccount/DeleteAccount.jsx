import React from 'react';
import propTypes from 'prop-types';

import useInputFormHandler from 'src/hooks/useInputFormHandler';

import Form from 'src/components/Form';
import Modal from 'src/components/Modal';

import FormMessage from 'src/components/FormMessage';
import { Text, Password } from 'src/components/Inputs';

import query from './DeleteAccount.gql';
import * as S from './DeleteAccount.style';

const DeleteAccount = ({ open, close, className, isPasswordRequired }) => {
  const [handleSubmit, { loading, control, formMessage }] = useInputFormHandler(
    query.deleteViewer,
    {
      onCompleted: () => {
        window.location.reload();
      },
    }
  );

  return (
    <Modal
      title="Delete Account"
      position="center"
      open={open}
      close={close}
      className={className}
      contentLabel="Delete Account Modal"
    >
      <FormMessage message={formMessage} />
      <Form
        columns={1}
        template={['description', 'email', 'password', 'submit']}
        onSubmit={handleSubmit}
      >
        <Text
          required
          area="email"
          name="email"
          label="E-mail"
          placeholder="Provide your e-mail address to confirm"
          displayName="E-mail"
          control={control}
        />
        {isPasswordRequired && (
          <Password
            required
            area="password"
            label="Password"
            name="password"
            placeholder="Password"
            displayName="Password"
            control={control}
          />
        )}
        <S.Button area="submit" type="submit" loading={loading}>
          Delete Account
        </S.Button>
      </Form>
    </Modal>
  );
};

DeleteAccount.defaultProps = {
  className: undefined,
  isPasswordRequired: true,
};

DeleteAccount.propTypes = {
  open: propTypes.bool.isRequired,
  close: propTypes.func.isRequired,
  className: propTypes.string,
  isPasswordRequired: propTypes.bool,
};

export default DeleteAccount;
