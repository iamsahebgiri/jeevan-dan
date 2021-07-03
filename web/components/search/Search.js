import { gql, useLazyQuery } from '@apollo/client';
import React from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

const GET_RESOURCES = gql`
  query GetResources {
    resources(limit: 12) {
      contact_name
      address
      contact_number
      created_at
      description
      downvote_count
      resources_type {
        name
      }
      id
      upvote_count
      verified_at
      updated_at
      district {
        name
        state {
          name
        }
      }
    }
  }
`;

export default function Search() {
  const [getResources, { loading, data, error }] = useLazyQuery(GET_RESOURCES);

  const handleSubmit = (formData) => {
    console.log(formData);
    getResources();
  };

  return (
    <>
      <SearchForm handleSubmit={handleSubmit} />
      {loading ? 'Loading...' : <SearchResults data={data} />}
    </>
  );
}
