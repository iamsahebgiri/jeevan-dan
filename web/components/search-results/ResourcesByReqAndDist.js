import { getQuery } from '@/graphql/queries/resources';
import { updateData } from '@/lib/updateData';
import { Box } from '@chakra-ui/react';
import { useStoreState } from 'easy-peasy';
import { useQuery } from 'graphql-hooks';
import React, { useState } from 'react';
import LoadMore from './LoadMore';
import ResourceGrid from './ResourceGrid';
import SearchResultHeading from './SearchResultHeading';

export default function ResourcesByReqAndDist() {

  const { selectedDistrict, selectedRequirement } = useStoreState((state) => state.formData);

  const [offset, setOffset] = useState(0);
  const { loading, data, error } = useQuery(getQuery('BY_RESOURCE_TYPE_ID_AND_DISTRICT_ID'), {
    variables: {
      district_id: selectedDistrict !== null ? selectedDistrict?.value : 0,
      resource_type_id: selectedRequirement !== null ? selectedRequirement?.value : 0,
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
        label={`${selectedRequirement?.label} in ${selectedDistrict?.label} `}
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
