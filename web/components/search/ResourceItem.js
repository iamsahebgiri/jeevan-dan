import Image from 'next/image';
import {
  Box,
  Heading,
  Text,
  Icon,
  Button,
  Flex,
  VStack,
  Link,
  Tooltip,
} from '@chakra-ui/react';
import {
  HiPhone,
  HiThumbUp,
  HiThumbDown,
  HiBadgeCheck,
  HiLocationMarker,
} from 'react-icons/hi';
import Card from '@/components/ui/Card';

const ListItem = ({ icon, text, href }) => (
  <Flex align="center">
    <Icon as={icon} color="gray.400" />
    <Text as="span" ml="2" color="gray.500">
      <Link
        _hover={{ textDecoration: 'none', color: 'gray.600' }}
        href={href}
        isExternal={href?.startsWith('http')}
      >
        {text}
      </Link>
    </Text>
  </Flex>
);

export default function ResourceItem({ resource }) {
  const {
    contact_name,
    contact_number,
    description,
    district,
    verified_at,
    address,
  } = resource;
  return (
    <Card>
      <Box width="full">
        <Image
          src={`/img/ambulance.png`}
          width="48"
          height="48"
          layout="fixed"
          placeholder="blur"
          blurDataURL={`/img/ambulance.png?w=10&q=10`}
          alt={contact_name}
        />

        <Flex align="center" mt="1">
          <Heading
            fontSize="md"
            fontWeight="semibold"
            textTransform="capitalize"
          >
            {contact_name}
          </Heading>
          {verified_at !== null ? (
            <Icon as={HiBadgeCheck} ml="2" color="messenger.500" h="5" w="5" />
          ) : null}
        </Flex>
        <VStack align="self-start" mt="4" spacing="3">
          <Text color="gray.700">
            {description === null || description === ''
              ? 'No description available'
              : description}
          </Text>
          <ListItem
            text={contact_number}
            icon={HiPhone}
            href="tel:+917077328006"
          />
          <ListItem
            text={district.name}
            icon={HiLocationMarker}
            href="https://www.google.com/maps/place/Ghumarwin, Bilaspur"
          />
        </VStack>
        <Flex justify="space-between" width="full" mt="4">
          <Tooltip label="24 people disliked" aria-label="A tooltip" hasArrow>
            <Button width="full" leftIcon={<Icon as={HiThumbDown} />}>
              Dislike
            </Button>
          </Tooltip>
          <Tooltip label="24 people liked" aria-label="A tooltip" hasArrow>
            <Button
              colorScheme="orange"
              leftIcon={<Icon as={HiThumbUp} />}
              width="full"
              ml="2"
            >
              Like
            </Button>
          </Tooltip>
        </Flex>
        {/* <Button variant="ghost">View in google Map</Button> */}
      </Box>
    </Card>
  );
}
