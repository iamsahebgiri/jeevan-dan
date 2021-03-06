import SearchForm from '@/components/search/SearchForm';
import LookingFor from '@/components/search/LookingFor';
import Header from '@/components/ui/Header';
import Hero from '@/components/ui/Hero';
import BaseLayout from '@/layouts/base';
import { Box, Container } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleSubmit = () => {
    router.push('/search');
  };

  const handleOnClickCard = (e) => {
    console.log(e.target);
  }

  return (
    <BaseLayout title="Home">
      <Box>
        <Box
          h="md"
          width="full"
          zIndex="1"
          opacity="0.9"
          bgColor="gray.900"
          position="absolute"
        />
        <Box
          h="md"
          width="full"
          zIndex="-1"
          bg="gray.700"
          position="absolute"
          bgPosition="center"
          bgImage="https://images.unsplash.com/photo-1612401104473-a79cb1da9351?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=10"
        />
      </Box>
      <Box width="full" mx="auto" pos="absolute" zIndex="2">
        <Container maxW="6xl">
          <Header />
          <Hero />
          <SearchForm handleSubmit={handleSubmit} />
          <LookingFor handleOnClickCard={handleOnClickCard} />
        </Container>
      </Box>
    </BaseLayout>
  );
}
