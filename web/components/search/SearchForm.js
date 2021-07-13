import Card from '@/components/ui/Card';
import Select from '@/components/ui/Select';
import { GET_INITIAL_DATA } from '@/graphql/queries/initial';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { useQuery } from 'graphql-hooks';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useRouter } from 'next/router';
import locales from '@/data/locales';

export default function SearchForm({ handleSubmit, showSearch = true }) {

  const router = useRouter();
  const { locale } = router;

  const { loading, data, error } = useQuery(GET_INITIAL_DATA);

  const formData = useStoreState((state) => state.formData);
  const setFormData = useStoreActions((actions) => actions.setFormData);

  const handleStateChange = (e) => {
    setFormData({
      selectedState: e,
    });
  };

  const handleDistrictChange = (e) => {
    setFormData({ selectedDistrict: e });
  };

  const handleRequirementChange = (e) => {
    setFormData({ selectedRequirement: e });
  };

  if (error) {
    return (
      <Card p="8">
        <Text color="red.600">Something went wrong!!</Text>
      </Card>
    );
  }

  return (
    <Card p="8">
      <SimpleGrid width="full" minChildWidth="240px" spacing="4">
        <FormControl id="states">
          <FormLabel>{locales[locale].selectState}</FormLabel>
          <Select
            placeholder="States"
            isLoading={loading}
            options={!loading && data.states}
            onChange={handleStateChange}
            value={formData.selectedState}
            isClearable="true"
          />
        </FormControl>
        <FormControl id="districts">
          <FormLabel>{locales[locale].selectCity}</FormLabel>
          <Select
            placeholder="City/Districts"
            isLoading={loading}
            options={
              !loading && formData.selectedState !== null
                ? formData.selectedState.districts
                : []
            }
            onChange={handleDistrictChange}
            value={formData.selectedDistrict}
            isClearable="true"
          />
        </FormControl>
        <FormControl id="requirements">
          <FormLabel>{locales[locale].selectRequirements}</FormLabel>
          <Select
            placeholder="Requirements"
            isLoading={loading}
            options={!loading && data.resources_type}
            onChange={handleRequirementChange}
            value={formData.selectedRequirement}
            isClearable="true"
          />
        </FormControl>
        {showSearch && (
          <Flex mt="8">
            <Button
              onClick={(e) => handleSubmit(formData)}
              colorScheme="orange"
              width="full"
            >
              {locales[locale].search}
            </Button>
          </Flex>
        )}
      </SimpleGrid>
    </Card>
  );
}
