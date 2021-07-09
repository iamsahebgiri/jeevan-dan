import Card from '@/components/ui/Card';
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import Image from 'next/image';

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

const LookingFor = ({ handleOnClickCard }) => {
  return (
    <Box my="12">
      <Heading fontSize="xl" mb="6">
        What are you looking for
      </Heading>
      <SimpleGrid minChildWidth="210px" spacing="6">
        <LookingForCard
          onClick={handleOnClickCard}
          imgUrl="ambulance.png"
          heading="Ambulance"
          p="30 ambulances in total"
        />
        <LookingForCard
          onClick={handleOnClickCard}
          imgUrl="blood.png"
          heading="Blood"
          p="156 blood donor available"
        />
        <LookingForCard
          onClick={handleOnClickCard}
          imgUrl="food.png"
          heading="Food"
          p="156 food service in total"
        />
        <LookingForCard
          onClick={handleOnClickCard}
          imgUrl="hospital-bed.png"
          heading="Hospital Bed"
          p="156 hospital bed available"
        />
        <LookingForCard
          onClick={handleOnClickCard}
          imgUrl="medicine.png"
          heading="Medicine and Injections"
          p="120 injections available"
        />
        <LookingForCard
          onClick={handleOnClickCard}
          imgUrl="call.png"
          heading="Tele Consultations"
          p="120 therapist available"
        />
        <LookingForCard
          onClick={handleOnClickCard}
          imgUrl="lab.png"
          heading="COVID Testing"
          p="120 testing centre available"
        />
        <LookingForCard
          onClick={handleOnClickCard}
          imgUrl="oxygen.png"
          heading="Oxygen Tank"
          p="150 providers available"
        />
      </SimpleGrid>
    </Box>
  );
};

export default LookingFor;
