import Card from '@/components/Card';
import Select from '@/components/Select';
import { gql, useLazyQuery, useQuery } from '@apollo/client';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  SimpleGrid,
} from '@chakra-ui/react';
import { useState } from 'react';

const GET_STATES = gql`
  query GetStates {
    states {
      label: name
      value: id
    }
  }
`;

const GET_DISTRICTS = gql`
  query GetDistricts($state_id: Int) {
    districts(where: { state_id: { _eq: $state_id } }) {
      label: name
      value: id
    }
  }
`;

const GET_REQUIREMENTS = gql`
  query GetResourcesType {
    resources_type {
      label: name
      value: id
    }
  }
`;

export default function SearchBox() {
  const [formState, setFormState] = useState({
    selectedState: null,
    selectedDistrict: null,
    selectedRequirement: null,
  });

  const { loading: loadingStates, data: dataStates } = useQuery(GET_STATES);
  const { loading: loadingRequirements, data: dataRequirements } =
    useQuery(GET_REQUIREMENTS);
  const [getDistricts, { loading: loadingDistricts, data: dataDistricts }] =
    useLazyQuery(GET_DISTRICTS, {
      variables: {
        state_id: formState.selectedState?.value,
      },
    });

  const handleChange = (e) => {
    switch (e.__typename) {
      case 'states':
        getDistricts();
        setFormState({
          ...formState,
          selectedState: e,
          selectedDistrict: {
            label: 'Select city',
            value: -1,
            __typename: 'districts',
          },
        });
        break;
      case 'districts':
        setFormState({ ...formState, selectedDistrict: e });
        break;
      case 'resources_type':
        setFormState({ ...formState, selectedRequirement: e });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    console.log(formState);
  };

  return (
    <Card p="8">
      <SimpleGrid width="full" minChildWidth="240px" spacing="4">
        <FormControl id="states">
          <FormLabel>Select states</FormLabel>
          <Select
            placeholder="States"
            isLoading={loadingStates}
            options={!loadingStates && dataStates.states}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="districts">
          <FormLabel>Select city</FormLabel>
          <Select
            placeholder="City/Districts"
            isLoading={loadingDistricts}
            options={!loadingDistricts && dataDistricts?.districts}
            onChange={(e) => handleChange(e)}
            value={formState.selectedDistrict}
          />
        </FormControl>
        <FormControl id="requirements">
          <FormLabel>Select requirements</FormLabel>
          <Select
            placeholder="Requirements"
            isLoading={loadingRequirements}
            options={!loadingRequirements && dataRequirements.resources_type}
            onChange={handleChange}
          />
        </FormControl>

        <Flex mt="8">
          <Button onClick={handleSubmit} colorScheme="orange" width="full">
            Search
          </Button>
        </Flex>
      </SimpleGrid>
      {/* <Flex w="full" justifyContent="flex-end" bg="gray.100" p="3">
        
      </Flex> */}
    </Card>
  );
}
