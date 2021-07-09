import { useLazyQuery } from '@apollo/client';
import React from 'react';
import LookingFor from './LookingFor';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import { GET_RESOURCES_ALL } from '@/graphql/queries/resources';

export default function Search() {
  const [getResources, { loading, data, fetchMore, networkStatus }] =
    useLazyQuery(GET_RESOURCES_ALL, {
      variables: {
        limit: 12,
        offset: 0,
      },
      notifyOnNetworkStatusChange: true,
    });

  const handleSubmit = (formData) => {
    console.log(formData);
    getResources();
  };

  const handleOnClickCard = (e) => {};

  return (
    <>
      <SearchForm handleSubmit={handleSubmit} />
      <LookingFor handleOnClickCard={handleOnClickCard} />
      <SearchResults
        data={data}
        loading={loading}
        networkStatus={networkStatus}
        fetchMore={fetchMore}
      />
    </>
  );
}
