import navLinks from '@/data/navLinks.json';
import {
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  Link,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import SiteLogo from './SiteLogo';

const HeaderLink = ({ name, href }) => {
  const router = useRouter();
  const isActive = `/${router.pathname.split('/')[1]}` === href;

  return (
    <NextLink href={href} passHref>
      <Link _hover={{ textDecoration: 'none' }}>
        <Text fontWeight={isActive && 'semibold'}>{name}</Text>
      </Link>
    </NextLink>
  );
};

const MobileHeaderLink = ({ name, href }) => {
  const router = useRouter();
  const isActive = `/${router.pathname.split('/')[1]}` === href;
  return (
    <NextLink href={href} passHref>
      <Link width="full" _focus={{ boxShadow: 'none' }}>
        <Flex
          bgColor={isActive && 'orange.200'}
          color={isActive && 'orange.700'}
          fontWeight={isActive && 'semibold'}
          px="4"
          py="2"
          rounded="md"
        >
          <Text>{name}</Text>
        </Flex>
      </Link>
    </NextLink>
  );
};

export default function HeaderLight() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex bgColor="white" shadow="sm" py="4">
      <Container maxW="6xl">
        <Flex justifyContent="space-between">
          <Flex w="full" justifyContent="space-between">
            <NextLink href="/">
              <Link _hover={{ textDecoration: 'none' }}>
                <SiteLogo />
              </Link>
            </NextLink>

            <HStack spacing="6" display={['none', 'none', 'flex']}>
              {navLinks.map((link) => (
                <HeaderLink key={link.href} href={link.href} name={link.name} />
              ))}
            </HStack>
          </Flex>
          <Flex alignItems="center" display={['flex', 'flex', 'none']}>
            <Icon boxSize="6" onClick={onOpen} as={HiMenuAlt4} />
          </Flex>
        </Flex>
      </Container>

      {/* __________________Mobile Drawer__________________ */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent maxW="2xs">
            <DrawerHeader>
              <SiteLogo />
            </DrawerHeader>

            <DrawerBody>
              <VStack spacing="1" alignItems="flex-start">
                {navLinks.map((link) => (
                  <MobileHeaderLink
                    key={link.href}
                    href={link.href}
                    name={link.name}
                  />
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex>
  );
}
