import Image from 'next/image';
import { Flex, Heading, HStack, Link } from '@chakra-ui/react';

export default function Header() {
  return (
    <Flex
      py="6"
      borderBottom="1px solid"
      borderBottomColor="gray.800"
      justify="space-between"
    >
      <Flex align="center">
        <Image
          src="/favicon/jeevan-dan.svg"
          layout="fixed"
          height="24"
          width="24"
          alt="Jeevan Dan"
        />
        <Heading display={["none" , "block"]} color="gray.100" ml="2" fontSize="lg">
          Jeevan Dan
        </Heading>
      </Flex>
      <Flex>
        <HStack spacing="6">
          <Link color="gray.300" href="ada.com">
            Resources
          </Link>
          <Link color="gray.300" href="ada.com">
            Contribute
          </Link>
        </HStack>
      </Flex>
    </Flex>
  );
}
