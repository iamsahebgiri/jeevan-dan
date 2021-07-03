import React from 'react';
import { Heading, Box, SimpleGrid } from '@chakra-ui/react';
import ResourceItem from './ResourceItem';

export default function SearchResults({ data }) {
  console.log(data);
  return (
    <Box my="16">
      <Heading fontSize="lg" fontWeight="medium" mb="6">
        Search results for ambulance in Odisha
      </Heading>
      <SimpleGrid minChildWidth="360px" spacing="4">
        {data?.resources.map((resource) => (
          <ResourceItem key={resource.id} resource={resource} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
