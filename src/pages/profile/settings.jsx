import React, { useState } from 'react';
import Head from 'next/head';
import {
  Lock,
  Delete,
  AccountCircle,
  ArrowForward,
  AccountTree,
} from '@styled-icons/material-rounded';
import { useQuery } from '@apollo/client';

import { educations, languages } from 'src/constants';
import {
  isName,
  isUsername,
  isEducationDescription,
  isDescription,
} from 'src/utilities/validators';

import usePatchFormHandler from 'src/hooks/usePatchFormHandler';

import Button from 'src/components/Button';
import UpdateAvatar from 'src/components/UpdateAvatar';
import ChangePassword from 'src/components/ChangePassword';
import DeleteAccount from 'src/components/DeleteAccount';
import ConnectedAccounts from 'src/components/ConnectedAccounts';
import FormMessage from 'src/components/FormMessage';
import { Text, Phone, Email, Select, Textarea } from 'src/components/Inputs';

import query from './settings.gql';
import * as S from './settings.style';

const ProfileSettingsPage = () => {
  const [open, setOpen] = useState(false);
  const { data } = useQuery(query.viewer);
  const passwordRequired = data?.viewer?.passwordRequired;
  const socialMediaAccounts = data?.viewer?.socialMediaAccounts;
  const passwordLabel = passwordRequired ? 'Change Password' : 'Set Password';

  const [handleSubmit, { loading, control, formMessage }] = usePatchFormHandler(
    query.updateViewer,
    query.viewer,
    {
      onCompleted: ({ addNotification }) => {
        addNotification({
          type: 'toast',
          level: 'success',
          timeout: 10000,
          content: 'Your profile has been updated successfully.',
        });
      },
    }
  );

  return (
    <S.ProfileSettingsPage>
      <Head>
        <title>Profile Settings | Agora Tutoring</title>
      </Head>
      <S.Title>General Settings</S.Title>
      <FormMessage message={formMessage} />
      <S.Form
        columns={2}
        template={[
          'firstName lastName',
          'username email',
          'contactPhone contactEmail',
          'educationLevel educationDescription',
          'languages languages',
          'description description',
          'submit submit',
        ]}
        onSubmit={handleSubmit}
      >
        <Text
          required
          area="firstName"
          name="patch.firstName"
          label="First Name"
          placeholder="First Name"
          displayName="First Name"
          control={control}
          validators={[isName]}
        />
        <Text
          required
          area="lastName"
          name="patch.lastName"
          label="Last Name"
          placeholder="Last Name"
          displayName="Last Name"
          control={control}
          validators={[isName]}
        />
        <Text
          required
          area="username"
          name="patch.username"
          label="Username"
          placeholder="Username"
          displayName="Username"
          control={control}
          validators={[isUsername]}
        />
        <Email
          required
          area="email"
          name="patch.email"
          label="Email"
          placeholder="Email"
          displayName="Email"
          control={control}
        />
        <Phone
          required={false}
          area="contactPhone"
          name="patch.contactPhone"
          label="Contact Phone"
          displayName="Contact Phone"
          placeholder="(123) 123-1234"
          control={control}
        />
        <Email
          required={false}
          area="contactEmail"
          name="patch.contactEmail"
          label="Contact Email"
          displayName="Contact Email"
          placeholder="jdoe@gmail.com"
          control={control}
        />
        <Select
          required={false}
          area="educationLevel"
          name="patch.education.level"
          label="Education Level"
          displayName="Education Level"
          placeholder="Select One"
          control={control}
          options={educations}
        />
        <Text
          required={false}
          area="educationDescription"
          name="patch.education.description"
          label="Education Description"
          displayName="Education Level"
          placeholder="Mechanical Engineering"
          control={control}
          validators={[isEducationDescription]}
        />
        <Select
          required={false}
          multiple
          area="languages"
          name="patch.languages"
          label="Languages"
          displayName="Languages"
          placeholder="Select Many"
          control={control}
          options={languages}
        />
        <Textarea
          required={false}
          area="description"
          name="patch.description"
          label="Description"
          displayName="Description"
          placeholder="What should other users know about you as it relates to Tutoring?"
          control={control}
          validators={[isDescription]}
        />
        <Button area="submit" type="submit" loading={loading}>
          Update Profile →
        </Button>
      </S.Form>
      <S.Title>Other Settings</S.Title>
      <S.Options>
        <S.Option onClick={() => setOpen('update-avatar')}>
          <S.Icon as={AccountCircle} />
          <S.OptionName>Update Profile Photo</S.OptionName>
          <S.Icon as={ArrowForward} />
        </S.Option>
        <S.Option onClick={() => setOpen('change-password')}>
          <S.Icon as={Lock} />
          <S.OptionName>{passwordLabel}</S.OptionName>
          <S.Icon as={ArrowForward} />
        </S.Option>
        <S.Option onClick={() => setOpen('delete-account')}>
          <S.Icon as={Delete} />
          <S.OptionName>Delete Account</S.OptionName>
          <S.Icon as={ArrowForward} />
        </S.Option>
        <S.Option onClick={() => setOpen('connected-accounts')}>
          <S.Icon as={AccountTree} />
          <S.OptionName>Conntected Accounts</S.OptionName>
          <S.Icon as={ArrowForward} />
        </S.Option>
      </S.Options>
      <UpdateAvatar
        open={open === 'update-avatar'}
        close={() => setOpen(false)}
      />
      <ChangePassword
        open={open === 'change-password'}
        close={() => setOpen(false)}
        isPasswordRequired={passwordRequired}
      />
      <DeleteAccount
        open={open === 'delete-account'}
        close={() => setOpen(false)}
        isPasswordRequired={passwordRequired}
      />
      <ConnectedAccounts
        open={open === 'connected-accounts'}
        close={() => setOpen(false)}
        socialMediaAccounts={socialMediaAccounts}
        isPasswordRequired={passwordRequired}
      />
    </S.ProfileSettingsPage>
  );
};

ProfileSettingsPage.getInitialProps = async ({ redirect, apolloClient }) => {
  const { data } = await apolloClient.query({ query: query.viewer });

  if (!data || !data.viewer) {
    redirect('/login');
  }

  return {};
};

export default ProfileSettingsPage;
