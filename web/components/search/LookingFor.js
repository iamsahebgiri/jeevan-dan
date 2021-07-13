import Card from '@/components/ui/Card';
import { GET_RESOURCES_TYPES_STATS } from '@/graphql/queries/resourcesType';
import { Box, Heading, SimpleGrid, Text, Skeleton } from '@chakra-ui/react';
import { useQuery } from 'graphql-hooks';
import Image from 'next/image';
import { kebabCase } from 'lodash';
import { useStoreActions } from 'easy-peasy';
import { useRouter } from 'next/router';
import locales from '@/data/locales';

const LookingForCard = ({ heading, p, imgUrl, onClick }) => {
  return (
    <Card _hover={{ shadow: 'md', cursor: 'pointer' }} onClick={onClick}>
      <Image
        src={`/img/${imgUrl}`}
        width="48"
        height="48"
        layout="fixed"
        placeholder="blur"
        blurDataURL={`/img/${imgUrl}?w=10&q=10`}
        alt={heading}
      />

      <Heading fontSize="md" textAlign="center">
        {heading}
      </Heading>

      <Text color="gray.600" textAlign="center">
        {p}
      </Text>
    </Card>
  );
};

const LookingForLoadingSkeleton = () => (
  <Box my="12">
    <Skeleton width="sm" h="8" mb="12" />
    <SimpleGrid minChildWidth="210px" spacing="6">
      <Skeleton h="36" />
      <Skeleton h="36" />
      <Skeleton h="36" />
      <Skeleton h="36" />
    </SimpleGrid>
  </Box>
);

const LookingFor = () => {
  const { loading, data } = useQuery(GET_RESOURCES_TYPES_STATS);
  const setFormData = useStoreActions((actions) => actions.setFormData);
  const router = useRouter();
  const { locale } = router;

  const handleOnClickCard = (id, name) => {
    setFormData({
      selectedRequirement: {
        label: name,
        value: id,
        __typename: 'resources_type',
      },
    });
    router.push('/search');
  };

  if (loading) return <LookingForLoadingSkeleton />;

  return (
    <Box my="12">
      <Heading fontSize="xl" mb="10">
        {locales[locale].lookingFor}
      </Heading>
      <SimpleGrid minChildWidth="210px" spacing="6">
        {data.resources_type.map(({ id, name, resources_aggregate }) => (
          <LookingForCard
            key={id}
            onClick={() => handleOnClickCard(id, name)}
            imgUrl={`${kebabCase(name)}.png`}
            heading={name}
            p={`${
              resources_aggregate.aggregate.count
            } ${name.toLowerCase()} available `}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default LookingFor;
