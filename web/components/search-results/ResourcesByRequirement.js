import { getQuery } from '@/graphql/queries/resources';
import { updateData } from '@/lib/updateData';
import { Box } from '@chakra-ui/react';
import { useStoreState } from 'easy-peasy';
import { useQuery } from 'graphql-hooks';
import React, { useState } from 'react';
import LoadMore from './LoadMore';
import ResourceGrid from './ResourceGrid';
import SearchResultHeading from './SearchResultHeading';

export default function ResourcesByRequirement() {
  const { selectedRequirement } = useStoreState((state) => state.formData);

  const [offset, setOffset] = useState(0);
  const { loading, data, error } = useQuery(getQuery('BY_RESOURCE_TYPE_ID'), {
    variables: {
      resource_type_id: selectedRequirement?.value,
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
        label={selectedRequirement?.label}
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
