import { Heading, Skeleton } from '@chakra-ui/react';
import React from 'react';

export default function SearchResultHeading({ label, count, loading }) {
  return (
    <Skeleton w="md" rounded="md" isLoaded={!loading}>
      <Heading fontSize="lg" fontWeight="medium" mb="6">
        Search results for {label}({count})
      </Heading>
    </Skeleton>
  );
}
