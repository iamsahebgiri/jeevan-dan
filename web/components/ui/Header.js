import { useRouter } from 'next/router';
import { Flex, HStack, Link, Text, Select } from '@chakra-ui/react';
import NextLink from 'next/link';
import SiteLogo from './SiteLogo';
import locales from '@/data/locales';

export default function Header() {
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    console.log(locales[locale].resources);
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <Flex
      py="6"
      borderBottom="1px solid"
      borderBottomColor="gray.800"
      justify="space-between"
      alignItems="center"
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
              <Text color="gray.300">{locales[locale].resources}</Text>
            </Link>
          </NextLink>
          <NextLink href="/contribute" passHref>
            <Link>
              <Text color="gray.300">{locales[locale].contribute}</Text>
            </Link>
          </NextLink>
          <NextLink href="/faqs" passHref>
            <Link display={['none', 'block']}>
              <Text color="gray.300">{locales[locale].faqs}</Text>
            </Link>
          </NextLink>
          <Select
            variant="unstyled"
            color="gray.500"
            onChange={changeLanguage}
            defaultValue={locale}
          >
            <option value="en">EN</option>
            <option value="hi">HI</option>
          </Select>
        </HStack>
      </Flex>
    </Flex>
  );
}
