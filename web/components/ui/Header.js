import Image from 'next/image';
import NextLink from 'next/link';
import { Flex, Heading, HStack, Link, Text } from '@chakra-ui/react';

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
        <Heading
          display={['none', 'block']}
          color="gray.100"
          ml="2"
          fontSize="lg"
        >
          Jeevan Dan
        </Heading>
      </Flex>
      <Flex>
        <HStack spacing="6">
          <NextLink href="/resources" passHref>
            <Link>
              <Text color="gray.300">Resources</Text>
            </Link>
          </NextLink>
          <NextLink href="/contribute" passHref>
            <Link>
              <Text color="gray.300">Contribute</Text>
            </Link>
          </NextLink>
        </HStack>
      </Flex>
    </Flex>
  );
}
