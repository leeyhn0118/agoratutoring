import React from 'react';
import propTypes from 'prop-types';

import useInputFormHandler from 'src/hooks/useInputFormHandler';

import Form from 'src/components/Form';
import Modal from 'src/components/Modal';

import FormMessage from 'src/components/FormMessage';
import { Password } from 'src/components/Inputs';

import query from './ChangePassword.gql';
import * as S from './ChangePassword.style';

const ChangePassword = ({ open, close, className, isPasswordRequired }) => {
  const title = isPasswordRequired ? 'Change Password' : 'Set Password';
  const [handleSubmit, { loading, control, formMessage }] = useInputFormHandler(
    query.updateViewer,
    {
      onCompleted: ({ addNotification }) => {
        close();

        addNotification({
          type: 'toast',
          level: 'success',
          timeout: 10000,
          content: 'Your profile has been updated successfully.',
        });

        if (typeof window === 'object') window.location.reload();
      },
    }
  );

  return (
    <Modal
      title={title}
      position="center"
      open={open}
      close={close}
      className={className}
      contentLabel="Change Password Modal"
    >
      <FormMessage message={formMessage} />
      <Form
        columns={1}
        template={['old', 'new', 'submit']}
        onSubmit={handleSubmit}
      >
        {isPasswordRequired && (
          <Password
            required
            area="old"
            label="Old Password"
            name="patch.password.old"
            placeholder="Old Password"
            displayName="Old Password"
            control={control}
            validators={false}
          />
        )}
        <Password
          required
          area="new"
          label="New Password"
          name="patch.password.new"
          placeholder="New password"
          displayName="New Password"
          control={control}
        />
        <S.Button area="submit" type="submit" loading={loading}>
          Update Password →
        </S.Button>
      </Form>
    </Modal>
  );
};

ChangePassword.defaultProps = {
  className: undefined,
  isPasswordRequired: true,
};

ChangePassword.propTypes = {
  open: propTypes.bool.isRequired,
  close: propTypes.func.isRequired,
  className: propTypes.string,
  isPasswordRequired: propTypes.bool,
};

export default ChangePassword;
