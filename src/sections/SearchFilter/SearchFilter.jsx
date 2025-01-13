import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { FilterAlt } from '@styled-icons/material-rounded';

import {
  levels,
  categories,
  structuredCategoriesAndSubjects,
} from 'src/constants';
import { isRate } from 'src/utilities/validators';

import Form from 'src/components/Form';
import Modal from 'src/components/Modal';
import {
  Text,
  Toggle,
  Currency,
  Coordinates,
  Select,
} from 'src/components/Inputs';

import * as S from './SearchFilter.style';

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

function flattenFilter(structuredFilter) {
  const { location, ...rest } = structuredFilter;

  return {
    address: location?.address || null,
    coordinates: location?.coordinates || null,
    ...rest,
  };
}

function structureFilter(flattenedFilter) {
  const { address, coordinates, ...rest } = flattenedFilter;

  return {
    location: address && coordinates && { address, coordinates },
    ...rest,
  };
}

function generateTitle(filter) {
  let title = '';

  const typeMap = {
    student: 'Students',
    tutor: 'Tutors',
  };

  if (filter.type) title += typeMap[filter.type];
  else title += 'Results';

  if (filter.category && !filter.subject) {
    title += ` in ${filter.category}`;
  } else if (filter.category && filter.subject) {
    title += ` in ${filter.subject}`;
  } else {
    title += ' in any category';
  }

  title += ' near you';

  return title;
}

const SearchFilter = ({ filter, setFilter, sort, setSort, view, setView }) => {
  const [open, setOpen] = useState(false);
  const { control, handleSubmit, watch, reset } = useForm({
    defaultValues: structureFilter(filter),
  });

  return (
    <S.SearchFilter $show={view === 'list'}>
      <S.Title $show={view === 'list'}>{generateTitle(filter)}</S.Title>
      <S.Wrapper $show={view === 'list'}>
        <S.FilterMenu>
          <S.Button outline family="blue" onClick={() => setOpen(true)}>
            <S.Icon as={FilterAlt} />
            Filters
          </S.Button>
          <S.ViewButton
            outline
            onClick={() => setView(view === 'map' ? 'list' : 'map')}
          >
            Show {view === 'map' ? 'list' : 'map'} view
          </S.ViewButton>
        </S.FilterMenu>
        <S.Sort
          closest={false}
          value={sort}
          onChange={setSort}
          $show={view === 'list'}
        />
      </S.Wrapper>
      <Modal
        title="Search Filters"
        position="center"
        open={open}
        close={() => {
          setOpen(false);
          reset();
        }}
      >
        <Form
          columns={2}
          template={[
            'search search',
            'location location',
            'saved saved',
            'type type',
            'rateMin rateMax',
            'category category',
            'subject subject',
            'level level',
            'submit submit',
          ]}
          onSubmit={handleSubmit((newFilter) => {
            setOpen(false);
            setFilter(flattenFilter(newFilter));
          })}
        >
          <Text
            area="search"
            name="search"
            label="Search Query"
            displayName="Search"
            placeholder="Search anything..."
            control={control}
            validators={false}
          />
          <Coordinates
            area="location"
            name="location"
            label="Location"
            displayName="Location"
            placeholder="Edmonton, AB, Canada"
            control={control}
            validators={false}
          />
          <Toggle
            area="saved"
            name="saved"
            label="Saved Posts"
            displayName="Type"
            options={[
              { value: true, label: 'True' },
              { value: false, label: 'False' },
            ]}
            control={control}
            validators={false}
          />
          <Toggle
            area="type"
            name="type"
            label="Post Type"
            displayName="Type"
            options={[
              { value: null, label: 'All' },
              { value: 'tutor', label: 'Tutor' },
              { value: 'student', label: 'Student' },
            ]}
            control={control}
            validators={false}
          />
          <Currency
            area="rateMin"
            name="rateMin"
            label="Minimum Hourly Rate"
            displayName="Minimum Hourly Rate"
            placeholder="0.00"
            control={control}
            validators={[isRate]}
          />
          <Currency
            area="rateMax"
            name="rateMax"
            label="Maximum Hourly Rate"
            displayName="Maximum Hourly Rate"
            placeholder="0.00"
            control={control}
            validators={[isRate]}
          />
          <Select
            area="category"
            name="category"
            label="Post Category"
            displayName="Category"
            placeholder="Select One"
            control={control}
            options={categories}
            validators={false}
          />
          <Select
            disabled={!watch('category')}
            area="subject"
            name="subject"
            label="Post Subject"
            displayName="Subject"
            placeholder={
              watch('category') ? 'Select One' : 'Must Select Category First'
            }
            control={control}
            options={getSubjectsByCategory(watch('category'))}
            validators={false}
          />
          <Select
            area="level"
            name="level"
            label="Post Level"
            displayName="Level"
            placeholder="Select One"
            control={control}
            options={levels}
            validators={false}
          />
          <S.SubmitButton area="submit" type="submit">
            Update Filters →
          </S.SubmitButton>
        </Form>
      </Modal>
    </S.SearchFilter>
  );
};

SearchFilter.propTypes = {
  filter: propTypes.object.isRequired,
  setFilter: propTypes.func.isRequired,
  sort: propTypes.string.isRequired,
  setSort: propTypes.func.isRequired,
  view: propTypes.string.isRequired,
  setView: propTypes.func.isRequired,
};

export default SearchFilter;
