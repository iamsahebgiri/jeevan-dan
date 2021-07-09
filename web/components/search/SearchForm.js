import Card from '@/components/ui/Card';
import Select from '@/components/ui/Select';
import { gql, useQuery } from '@apollo/client';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { useStoreActions, useStoreState } from 'easy-peasy';

const GET_INITIAL_DATA = gql`
  query GetInitialData {
    states {
      label: name
      value: id
      districts {
        label: name
        value: id
      }
    }
    resources_type {
      label: name
      value: id
    }
  }
`;

export default function SearchForm({ handleSubmit }) {
  const formData = useStoreState((state) => state.formData);
  const setFormData = useStoreActions((actions) => actions.setFormData);

  const { loading, data, error } = useQuery(GET_INITIAL_DATA);

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

  if (error)
    return (
      <Card p="8">
        <Text color="red.600">Something went wrong!!</Text>
      </Card>
    );

  return (
    <Card p="8">
      <SimpleGrid width="full" minChildWidth="240px" spacing="4">
        <FormControl id="states">
          <FormLabel>Select states</FormLabel>
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
          <FormLabel>Select city</FormLabel>
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
          <FormLabel>Select requirements</FormLabel>
          <Select
            placeholder="Requirements"
            isLoading={loading}
            options={!loading && data.resources_type}
            onChange={handleRequirementChange}
            value={formData.selectedRequirement}
            isClearable="true"
          />
        </FormControl>

        <Flex mt="8">
          <Button
            onClick={(e) => handleSubmit(formData)}
            colorScheme="orange"
            width="full"
          >
            Search
          </Button>
        </Flex>
      </SimpleGrid>
    </Card>
  );
}
