import React from 'react';
import { Heading, Box, SimpleGrid } from '@chakra-ui/react';
import ResourceItem from './ResourceItem';
import { Waypoint } from 'react-waypoint';

export default function SearchResults({
  data,
  fetchMore,
  loading,
  networkStatus,
}) {
  return (
    <Box my="16">
      <Heading fontSize="lg" fontWeight="medium" mb="6">
        Search results for ambulance in Odisha
      </Heading>
      <SimpleGrid minChildWidth="360px" spacing="4">
        {data?.resources.map((resource, i) => {
          return (
            <React.Fragment key={resource.id}>
              <Box>
                {i === data?.resources.length - 1 && (
                  <Waypoint
                    onEnter={() => {
                      console.log(data);
                      let offset =
                        data?.resources[data?.resources.length - 1].id;
                      fetchMore({
                        variables: {
                          offset,
                          limit: 12,
                        },
                      });
                    }}
                  />
                )}
                <ResourceItem resource={resource} />
              </Box>
            </React.Fragment>
          );
        })}
      </SimpleGrid>
      {loading && 'Loading more results...'}
    </Box>
  );
}
