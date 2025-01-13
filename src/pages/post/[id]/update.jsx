import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import {
  levels,
  categories,
  experiences,
  structuredCategoriesAndSubjects,
} from 'src/constants';

import {
  isTitle,
  isRate,
  isDescription,
  areCourses,
} from 'src/utilities/validators';

import usePatchFormHandler from 'src/hooks/usePatchFormHandler';

import Form from 'src/components/Form';
import FormMessage from 'src/components/FormMessage';
import {
  Text,
  Toggle,
  Select,
  Chips,
  Currency,
  Location,
  Textarea,
} from 'src/components/Inputs';

import query from './update.gql';
import * as S from './update.style';

function getSubjectsByCategory(selectedCategory) {
  if (selectedCategory) {
    for (const category of structuredCategoriesAndSubjects) {
      if (category.name === selectedCategory) {
        return category.subjects.map((subject) => subject.name);
      }
    }
  }
  return [];
}

const UpdatePostPage = () => {
  const {
    query: { id },
  } = useRouter();
  const [handleSubmit, { loading, control, formMessage, watch }] =
    usePatchFormHandler(query.updatePost, query.post, {
      variables: () => ({ input: { id } }),
      queryVariables: { input: { id } },
      onCompleted: ({ router, data }) => {
        router.push(`/post/${data.updatePost.post.id}`);
      },
    });

  return (
    <S.UpdatePostPage>
      <Head>
        <title>Update Post | Agora Tutoring</title>
      </Head>
      <S.Title>Update your post</S.Title>
      <FormMessage message={formMessage} />
      <Form
        columns={6}
        template={[
          'title title title title title title',
          'type type willTravel willTravel hasLocation hasLocation',
          'category category category subjects subjects subjects',
          'levels levels levels courses courses courses',
          'rate rate rate experience experience experience',
          'location location location location location location',
          'description description description description description description',
          'submit submit submit null null null',
        ]}
        onSubmit={handleSubmit}
      >
        <Text
          required
          area="title"
          name="patch.title"
          label="Post Title"
          displayName="Title"
          placeholder="Your Title Here"
          control={control}
          validators={[isTitle]}
        />
        <Toggle
          required
          area="type"
          name="patch.type"
          label="Post Type"
          displayName="Type"
          options={[
            { value: 'tutor', label: 'Tutor' },
            { value: 'student', label: 'Student' },
          ]}
          control={control}
        />
        <Toggle
          required
          booleans
          area="willTravel"
          name="patch.options.willTravel"
          label="Will Travel"
          displayName="Will Travel"
          options={[
            { value: true, label: 'Yes' },
            { value: false, label: 'No' },
          ]}
          control={control}
        />
        <Toggle
          required
          area="hasLocation"
          name="patch.options.hasLocation"
          label="Has Location"
          displayName="Has Location"
          options={[
            { value: true, label: 'Yes' },
            { value: false, label: 'No' },
          ]}
          control={control}
        />
        <Select
          required
          area="category"
          name="patch.category"
          label="Post Category"
          displayName="Category"
          placeholder="Select One"
          control={control}
          options={categories}
        />
        <Select
          disabled={!watch('category')}
          required
          multiple
          area="subjects"
          name="patch.subjects"
          label="Post Subjects"
          displayName="Subjects"
          placeholder={
            watch('category') ? 'Select Many' : 'Must Select Category First'
          }
          control={control}
          options={getSubjectsByCategory(watch('category'))}
        />
        <Select
          required
          multiple
          area="levels"
          name="patch.levels"
          label="Post Levels"
          displayName="Levels"
          placeholder="Select Many"
          control={control}
          options={levels}
        />
        <Chips
          required
          area="courses"
          name="patch.courses"
          label="Post Courses"
          displayName="Courses"
          placeholder="Add Many"
          control={control}
          validators={[areCourses]}
        />
        <Currency
          required
          area="rate"
          name="patch.rate"
          label="Hourly Rate"
          displayName="Hourly Rate"
          placeholder="20.00"
          control={control}
          validators={[isRate]}
        />
        <Select
          required
          area="experience"
          name="patch.experience"
          label="Experience Level"
          displayName="Expierience"
          placeholder="Select One"
          control={control}
          options={experiences}
        />
        <Location
          required
          area="location"
          name="patch.location"
          label="Location"
          displayName="Location"
          placeholder="1234 Spruce St, Edmonton, AB"
          control={control}
        />
        <Textarea
          required
          area="description"
          name="patch.description"
          label="Description"
          displayName="Description"
          placeholder="What makes you a great student / tutor?"
          control={control}
          validators={[isDescription]}
        />
        <S.Button area="submit" type="submit" loading={loading}>
          Create Post →
        </S.Button>
      </Form>
    </S.UpdatePostPage>
  );
};

UpdatePostPage.getInitialProps = async ({
  redirect,
  apolloClient,
  query: { id },
}) => {
  const { data } = await apolloClient.query({ query: query.viewer });

  if (data && data.viewer) {
    for (const { node: post } of data.viewer.posts.edges) {
      if (post.id === id) {
        return {};
      }
    }
  }

  redirect('/search');

  return {};
};

export default UpdatePostPage;
