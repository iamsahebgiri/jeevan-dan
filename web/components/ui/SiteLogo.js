import locales from '@/data/locales';
import { Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function SiteLogo({ mode = 'light' }) {
  const router = useRouter();
  const { locale } = router;

  return (
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
        color={mode === 'dark' ? 'gray.100' : 'gray.800'}
        ml="2"
        fontSize="lg"
      >
        {locales[locale].jeevanDan}
      </Heading>
    </Flex>
  );
}
