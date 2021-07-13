import SubHeading from '@/components/ui/SubHeading';
import { Box, Container, Heading } from '@chakra-ui/react';

const SectionHeading = ({ heading, children }) => {
  return (
    <Box textAlign="center">
      <Container maxW="2xl">
        <Heading size="xl" letterSpacing="tight" mt="12" color="orange.600">
          {heading}
        </Heading>
        <SubHeading mt="4" color="gray.600">
          {children}
        </SubHeading>
      </Container>
    </Box>
  );
};

export default SectionHeading;
