import { Flex, HStack, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import SiteLogo from './SiteLogo';

export default function Header() {
  return (
    <Flex
      py="6"
      borderBottom="1px solid"
      borderBottomColor="gray.800"
      justify="space-between"
    >
      <NextLink href="/" passHref>
        <Link>
          <SiteLogo mode="dark" />
        </Link>
      </NextLink>

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
          <NextLink href="/faqs" passHref>
            <Link display={["none", "block"]}>
              <Text color="gray.300">FAQs</Text>
            </Link>
          </NextLink>
        </HStack>
      </Flex>
    </Flex>
  );
}
