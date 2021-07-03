import SubHeading from '@/components/ui/SubHeading';
import { Box, Heading, Text } from '@chakra-ui/react';

export default function Hero() {
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
            Every single{' '}
            <Text as="span" color="orange.500">
              life matters
            </Text>
          </Heading>
          <SubHeading mt="4" maxW="lg" mx="auto">
            Find oxygen, hospital beds, blood, mask, food all in one platform.
            We won&apos;t let anyone die of COVID.
          </SubHeading>
        </Box>
      </Box>
    </>
  );
}
