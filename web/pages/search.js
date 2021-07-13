import AllResources from '@/components/search-results/AllResources';
import ResourcesByDistrict from '@/components/search-results/ResourcesByDistrict';
import ResourcesByReqAndDist from '@/components/search-results/ResourcesByReqAndDist';
import ResourcesByRequirement from '@/components/search-results/ResourcesByRequirement';
import ResourcesByState from '@/components/search-results/ResourcesByState';
import SearchForm from '@/components/search/SearchForm';
import Header from '@/components/ui/Header';
import BaseLayout from '@/layouts/base';
import useRenderType from '@/lib/useRenderType';
import { Box, Container } from '@chakra-ui/react';

export default function SearchPage() {
  const { renderType } = useRenderType();

  const handleSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <BaseLayout title="Home">
      <Box>
        <Box
          h="48"
          width="full"
          zIndex="1"
          opacity="0.9"
          bgColor="gray.900"
          position="absolute"
        />
        <Box
          h="48"
          width="full"
          zIndex="-1"
          bg="gray.700"
          position="absolute"
          bgPosition="center"
          bgImage="https://images.unsplash.com/photo-1612401104473-a79cb1da9351?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=10"
        />
      </Box>
      <Box width="full" mx="auto" pos="absolute" zIndex="2">
        <Container maxW="6xl">
          <Header />
          <Box mt="16">
            <SearchForm handleSubmit={handleSubmit} showSearch={false} />
            {renderType === '' && <AllResources />}
            {renderType === 'BY_RESOURCE_TYPE_ID' && <ResourcesByRequirement />}
            {renderType === 'BY_DISTRICT_ID' && <ResourcesByDistrict />}
            {renderType === 'BY_STATE_ID' && <ResourcesByState />}
            {renderType === 'BY_RESOURCE_TYPE_ID_AND_DISTRICT_ID' && (
              <ResourcesByReqAndDist />
            )}
          </Box>
        </Container>
      </Box>
    </BaseLayout>
  );
}
