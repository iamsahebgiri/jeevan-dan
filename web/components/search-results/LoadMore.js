import { Box, Spinner, Text } from '@chakra-ui/react';
import React from 'react';

export default function LoadMore({ loading }) {
  return (
    <Box textAlign="center" my="6">
      {loading && <Spinner />}
      <Text>{loading && 'Loading more...'}</Text>
    </Box>
  );
}
