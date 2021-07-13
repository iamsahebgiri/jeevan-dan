import Select from '@/components/ui/Select';
import locales from '@/data/locales';
import { INSERT_RESOURCE } from '@/graphql/mutations/resources';
import { GET_INITIAL_DATA } from '@/graphql/queries/initial';
import {
  Box,
  Button,
  chakra,
  Container,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useMutation, useQuery } from 'graphql-hooks';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function ContributeForm() {
  const { loading, data } = useQuery(GET_INITIAL_DATA);
  const [insertResource, { loading: isSubmitting }] =
    useMutation(INSERT_RESOURCE);

  const [formData, setFormData] = useState({
    contact_name: '',
    contact_number: '',
    address: '',
    description: '',
    selectedState: null,
    selectedDistrict: null,
    selectedRequirement: null,
  });

  const toast = useToast();
  const router = useRouter();
  const {locale} = router;

  const handleStateChange = (e) => {
    setFormData({
      ...formData,
      selectedState: e,
    });
  };

  const handleContactNameChange = (e) => {
    setFormData({
      ...formData,
      contact_name: e.target.value,
    });
  };

  const handleContactNumberChange = (e) => {
    setFormData({
      ...formData,
      contact_number: e.target.value,
    });
  };

  const handleAddressChange = (e) => {
    setFormData({
      ...formData,
      address: e.target.value,
    });
  };

  const handleDescriptionChange = (e) => {
    setFormData({
      ...formData,
      description: e.target.value,
    });
  };

  const handleDistrictChange = (e) => {
    setFormData({ ...formData, selectedDistrict: e });
  };

  const handleRequirementChange = (e) => {
    setFormData({ ...formData, selectedRequirement: e });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const {
      contact_name,
      contact_number,
      address,
      description,
      selectedDistrict,
      selectedRequirement,
    } = formData;

    if (
      contact_name === '' ||
      contact_number === '' ||
      address === '' ||
      description === '' ||
      selectedDistrict === null ||
      selectedRequirement === null
    ) {
      console.log('There is an error in the form.');
      toast({
        title: 'Form Error.',
        description: 'Make sure to fill all the fields.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    } else {
      const data = {
        contact_name,
        contact_number,
        address,
        description,
        district_id: selectedDistrict?.value,
        resource_type_id: selectedRequirement?.value,
      };

      insertResource({ variables: data })
        .then((res) => {
          console.log(res);
          toast({
            title: 'Resource created.',
            description: 'Thank you for helping!',
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
          router.push('/');
        })
        .catch((error) => {
          console.log(error);
          toast({
            title: 'Form Error.',
            description: 'Something went wrong!!',
            status: 'error',
            duration: 9000,
            isClosable: true,
          });
        });
    }
  };

  return (
    <Container bg={useColorModeValue('gray.50', 'inherit')} py="12" maxW="6xl" mx="auto">
      <Box mt={[10, 0]}>
        <SimpleGrid
          display={{ base: 'initial', md: 'grid' }}
          columns={{ md: 3 }}
          spacing={{ md: 6 }}
        >
          <GridItem colSpan={{ md: 1 }}>
            <Box px={[4, 0]}>
              <Heading fontSize="lg" fontWeight="semibold" lineHeight="6">
                {locales[locale].contributeForm.heading}
              </Heading>
              <Text
                mt={1}
                fontSize="sm"
                color={useColorModeValue('gray.600', 'gray.400')}
              >
                {locales[locale].contributeForm.subheading}
              </Text>
            </Box>
          </GridItem>
          <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
            <chakra.form shadow="base" rounded={[null, 'md']}>
              <Stack
                px={4}
                py={5}
                p={[null, 6]}
                bg={useColorModeValue('white', 'gray.700')}
                spacing={6}
              >
                <SimpleGrid columns={6} spacing={6}>
                  <FormControl as={GridItem} colSpan={[6, 3]} isRequired>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                       {locales[locale].contributeForm.name}
                    </FormLabel>
                    <Input
                      type="text"
                      value={formData.contact_name}
                      onChange={handleContactNameChange}
                      name="contact_name"
                      id="contact_name"
                      autoComplete="name"
                      mt={1}
                      shadow="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]} isRequired>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                       {locales[locale].contributeForm.contact_number}
                    </FormLabel>
                    <Input
                      type="number"
                      name="contact_number"
                      id="contact_number"
                      value={formData.contact_number}
                      onChange={handleContactNumberChange}
                      autoComplete="tel-national"
                      mt={1}
                      shadow="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 4]} isRequired>
                    <FormLabel
                      htmlFor="address"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                       {locales[locale].contributeForm.address}
                    </FormLabel>
                    <Input
                      type="text"
                      name="address"
                      id="address"
                      autoComplete="street-address"
                      value={formData.address}
                      onChange={handleAddressChange}
                      mt={1}
                      shadow="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl
                    as={GridItem}
                    colSpan={[6, 6, null, 3]}
                    isRequired
                  >
                    <FormLabel
                      htmlFor="state"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                       {locales[locale].contributeForm.state}
                    </FormLabel>
                    <Select
                      placeholder="States"
                      isLoading={loading}
                      options={!loading && data.states}
                      onChange={handleStateChange}
                      value={formData.selectedState}
                      isClearable="true"
                    />
                  </FormControl>

                  <FormControl
                    as={GridItem}
                    colSpan={[6, 3, null, 3]}
                    isRequired
                  >
                    <FormLabel
                      htmlFor="city"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                       {locales[locale].contributeForm.city}
                    </FormLabel>
                    <Select
                      placeholder="Select city"
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

                  <FormControl
                    as={GridItem}
                    colSpan={[6, 3, null, 3]}
                    isRequired
                  >
                    <FormLabel
                      htmlFor="resources"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                       {locales[locale].contributeForm.resources}
                    </FormLabel>
                    <Select
                      placeholder="Select resource"
                      isLoading={loading}
                      options={!loading && data.resources_type}
                      onChange={handleRequirementChange}
                      value={formData.selectedRequirement}
                      isClearable="true"
                    />
                  </FormControl>
                  <FormControl
                    as={GridItem}
                    colSpan={[6, 6, null, 6]}
                    isRequired
                  >
                    <FormLabel
                      htmlFor="resources"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                       {locales[locale].contributeForm.description}
                    </FormLabel>
                    <Textarea
                      type="text"
                      name="description"
                      id="description"
                      value={formData.description}
                      onChange={handleDescriptionChange}
                      focusBorderColor="orange.500"
                      autoComplete="description"
                      mt={1}
                      shadow="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>
                </SimpleGrid>
              </Stack>
              <Box
                px={{ base: 4, sm: 6 }}
                py={3}
                bg={useColorModeValue('gray.50', 'gray.900')}
                textAlign="right"
              >
                <Button
                  type="submit"
                  onClick={handleFormSubmit}
                  colorScheme="orange"
                  isLoading={isSubmitting}
                >
                  {locales[locale].contributeForm.submit}
                </Button>
              </Box>
            </chakra.form>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Container>
  );
}
