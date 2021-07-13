import { getQuery } from '@/graphql/queries/resources';
import { updateData } from '@/lib/updateData';
import { Box } from '@chakra-ui/react';
import { useQuery } from 'graphql-hooks';
import React, { useState } from 'react';
import LoadMore from './LoadMore';
import ResourceGrid from './ResourceGrid';
import SearchResultHeading from './SearchResultHeading';

export default function AllResources() {
  const [offset, setOffset] = useState(0);
  const { loading, data, error } = useQuery(getQuery(''), {
    variables: {
      limit: 12,
      offset,
    },
    updateData,
  });

  if (error) return 'Something went wrong!!';

  return (
    <Box my="16">
      <SearchResultHeading
        loading={loading}
        label="all resource"
        count={data?.resources_aggregate?.aggregate?.count}
      />

      <ResourceGrid
        resources={data?.resources}
        loading={loading}
        setOffset={setOffset}
      />

      <LoadMore loading={loading} />
    </Box>
  );
}
