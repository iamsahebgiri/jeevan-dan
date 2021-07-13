import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { Waypoint } from 'react-waypoint';
import ResourceItem from '@/components/search/ResourceItem';

export default function ResourceGrid({ resources, setOffset, loading }) {
  return (
    <SimpleGrid minChildWidth="360px" spacing="4">
      {resources &&
        resources.map((resource, i) => {
          return (
            <React.Fragment key={resource.id}>
              <Box>
                {i === resources.length - 3 && (
                  <Waypoint
                    onEnter={() => {
                      let offset = resources[resources.length - 1].id;
                      if (!loading) {
                        setOffset(offset);
                      }
                    }}
                  />
                )}
                <ResourceItem resource={resource} />
              </Box>
            </React.Fragment>
          );
        })}
    </SimpleGrid>
  );
}
