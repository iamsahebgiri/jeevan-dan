import SubHeading from '@/components/ui/SubHeading';
import { Box, Heading, Text } from '@chakra-ui/react';
import locales from '@/data/locales';
import { useRouter } from 'next/router';

export default function Hero() {
  const router = useRouter();
  const { locale } = router;

  return (
    <>
      <Box as="section">
        <Box
          maxW="2xl"
          mx="auto"
          px={{ base: '6', lg: '8' }}
          py={{ base: '12', sm: '24' }}
          textAlign="center"
        >
          <Heading size="2xl" letterSpacing="tight" color="gray.100">
            {locales[locale].heroTitle1}{' '}
            <Text as="span" color="orange.500">
              {locales[locale].heroTitle2}
            </Text>
          </Heading>
          <SubHeading mt="4" maxW="lg" mx="auto">
          {locales[locale].heroSubtitle}
          </SubHeading>
        </Box>
      </Box>
    </>
  );
}
