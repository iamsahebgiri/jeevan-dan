import SectionHeading from '@/components/resources/SectionHeading';
import Card from '@/components/ui/Card';
import HeaderLight from '@/components/ui/HeaderLight';
import SubHeading from '@/components/ui/SubHeading';
import locales from '@/data/locales';
import BaseLayout from '@/layouts/base';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { HiCheckCircle } from 'react-icons/hi';
const SpreadCard = ({ imgUrl, heading, children }) => {
  return (
    <Card p="0">
      <Flex justify="center" borderBottom="4px" borderBottomColor="blue.500">
        <Image src={`/marketing/${imgUrl}`} alt={heading} />
      </Flex>
      <Flex p="6" flexDir="column">
        <Heading fontSize="lg" color="blue.600">
          {heading}
        </Heading>
        <Text color="gray.600" mt="4">
          {children}
        </Text>
      </Flex>
    </Card>
  );
};

const SymptomCard = ({ imgUrl, heading, children }) => {
  return (
    <Card p="0" position="relative" mt="16">
      <Flex justify="flex-end" w="full" position="absolute" top="-16" p="4">
        <Image
          h="24"
          w="24"
          src={`/marketing/${imgUrl}`}
          borderRadius="full"
          alt={heading}
        />
      </Flex>
      <Flex p="6" flexDir="column">
        <Heading fontSize="lg" color="blue.600">
          {heading}
        </Heading>
        <Text color="gray.600" mt="4">
          {children}
        </Text>
      </Flex>
    </Card>
  );
};

const AdviceItem = ({ imgUrl, heading, children }) => {
  return (
    <Box>
      <Flex align="center" justify="center" w="full" p="4">
        <Image
          h="28"
          w="28"
          shadow="sm"
          src={`/marketing/${imgUrl}`}
          borderRadius="full"
          alt={heading}
        />
      </Flex>
      <Flex flexDir="column" textAlign="center">
        <Heading fontSize="lg" color="blue.600">
          {heading}
        </Heading>
        <Text color="gray.600" mt="4">
          {children}
        </Text>
      </Flex>
    </Box>
  );
};

const PreventionItem = ({ heading, p }) => {
  return (
    <ListItem>
      <ListIcon as={HiCheckCircle} h="6" w="6" color="green.600" />
      <Text as="span" fontWeight="semibold" mr="2">
        {heading}
      </Text>
      {p}
    </ListItem>
  );
};

const HandItem = ({ imgUrl, heading }) => {
  return (
    <Box>
      <Flex align="center" justify="center" w="full" p="4">
        <Image
          h="28"
          w="28"
          shadow="sm"
          src={`/marketing/${imgUrl}`}
          borderRadius="full"
          alt={heading}
        />
      </Flex>
      <Flex flexDir="column" textAlign="center">
        <Heading fontSize="lg" color="gray.700">
          {heading}
        </Heading>
      </Flex>
    </Box>
  );
};

const LinkItem = ({ p, href }) => {
  return (
    <LinkBox role="group">
      <Box
        _groupHover={{ bg: 'orange.50', color: 'orange.600' }}
        rounded="md"
        p="2"
      >
        <NextLink href={href} passHref>
          <LinkOverlay>
            <Text>{p}&rarr;</Text>
          </LinkOverlay>
        </NextLink>
      </Box>
    </LinkBox>
  );
};

export default function ResourcePage() {
  const router = useRouter();
  const { locale } = router;

  return (
    <BaseLayout title="Resource">
      <HeaderLight />

      <Box as="section" py="28">
        <Container maxW="6xl" textAlign="center">
          <Box textAlign="center">
            <Container maxW="2xl">
              <Heading size="2xl" letterSpacing="tight" mt="12">
                <Text
                  as="span"
                  bgGradient="linear(to-r, orange.500, orange.600)"
                  bgClip="text"
                >
                  {locales[locale].resources}
                </Text>{' '}
                {locales[locale].resourcesHeading}
              </Heading>
              <SubHeading mt="4" color="gray.600">
                {locales[locale].resourcesSubHeading}
              </SubHeading>
            </Container>
          </Box>
          <Box mt="6">
            <Button
              px="8"
              colorScheme="orange"
              onClick={() => router.push('/faqs')}
            >
              {locales[locale].viewFaqs}
            </Button>
          </Box>
        </Container>
      </Box>

      <Box as="section" bg="gray.100" py="20" mb="24">
        <Container maxW="6xl">
          <Flex flexDir={['column', 'row']} justify="space-between">
            <Box maxW="3xl">
              <Heading fontSize="2xl" mb="4">
                {locales[locale].covidInfo.heading}
              </Heading>
              <VStack>
                <Text>{locales[locale].covidInfo.p1}</Text>
                <Text>{locales[locale].covidInfo.p2}</Text>
                <Text>{locales[locale].covidInfo.p3}</Text>
              </VStack>
            </Box>

            <Card alignItems="left">
              <Heading fontSize="2xl" mb="4">
                {locales[locale].covidInfo.needToknow}
              </Heading>
              <LinkItem p={locales[locale].covidInfo.a1} href="#transmission" />
              <LinkItem p={locales[locale].covidInfo.a2} href="#symptoms" />
              <LinkItem p={locales[locale].covidInfo.a3} href="#preventions" />
              <LinkItem p={locales[locale].covidInfo.a4} href="#treatment" />
            </Card>
          </Flex>
        </Container>
      </Box>

      <Box as="section" py="8" mb="24" id="transmission">
        <Container maxW="6xl">
          <SectionHeading heading={locales[locale].covidTransmission.heading}>
            {locales[locale].covidTransmission.subheading}
          </SectionHeading>
          <SimpleGrid minChildWidth="210px" spacing="6" mt="12">
            <SpreadCard
              imgUrl="spread-a.png"
              heading={locales[locale].covidTransmission.h1}
            >
              {locales[locale].covidTransmission.p1}
            </SpreadCard>

            <SpreadCard
              imgUrl="spread-b.png"
              heading={locales[locale].covidTransmission.h2}
            >
              {locales[locale].covidTransmission.p2}
            </SpreadCard>

            <SpreadCard
              imgUrl="spread-c.png"
              heading={locales[locale].covidTransmission.h3}
            >
              {locales[locale].covidTransmission.p3}
            </SpreadCard>
          </SimpleGrid>
        </Container>
      </Box>

      <Box as="section" py="8" mb="24" bg="gray.100" id="symptoms">
        <Container maxW="6xl">
          <SectionHeading heading={locales[locale].covidSymptoms.heading}>
            {locales[locale].covidSymptoms.subheading}
          </SectionHeading>
          <SimpleGrid minChildWidth="210px" spacing="6" mt="12">
            <SymptomCard
              heading={locales[locale].covidSymptoms.h1}
              imgUrl="symptom-a.png"
            >
              {locales[locale].covidSymptoms.p1}
            </SymptomCard>
            <SymptomCard
              heading={locales[locale].covidSymptoms.h2}
              imgUrl="symptom-b.png"
            >
              {locales[locale].covidSymptoms.p2}
            </SymptomCard>
            <SymptomCard
              heading={locales[locale].covidSymptoms.h3}
              imgUrl="symptom-c.png"
            >
              {locales[locale].covidSymptoms.p3}
            </SymptomCard>
          </SimpleGrid>
        </Container>
      </Box>

      <Box as="section" py="8" mb="24" id="preventions">
        <Container maxW="6xl">
          <SectionHeading heading={locales[locale].covidPrevention.heading}>
            {locales[locale].covidPrevention.subheading}
          </SectionHeading>
          <SimpleGrid minChildWidth="210px" spacing="6" mt="12">
            <AdviceItem
              heading={locales[locale].covidPrevention.h1}
              imgUrl="advice-a.png"
            >
              {locales[locale].covidPrevention.p1}
            </AdviceItem>
            <AdviceItem
              heading={locales[locale].covidPrevention.h2}
              imgUrl="advice-b.png"
            >
              {locales[locale].covidPrevention.p2}
            </AdviceItem>
            <AdviceItem
              heading={locales[locale].covidPrevention.h3}
              imgUrl="advice-c.png"
            >
              {locales[locale].covidPrevention.p3}
            </AdviceItem>
            <AdviceItem
              heading={locales[locale].covidPrevention.h4}
              imgUrl="advice-d.png"
            >
              {locales[locale].covidPrevention.p4}
            </AdviceItem>
          </SimpleGrid>

          <Flex mt="16" flexDir={['column', 'column', 'row']}>
            <Card w="full">
              <List spacing={3}>
                {locales[locale].covidPrevention.list1.map((list, i) => (
                  <PreventionItem
                    key={i}
                    heading={list.heading}
                    p={list.p}
                  />
                ))}
              </List>
            </Card>
            <Card w="full" ml={[0, 0, '4']} mt={['4', '4', 0]}>
              <List spacing={3}>
              {locales[locale].covidPrevention.list2.map((list, i) => (
                  <PreventionItem
                    key={i}
                    heading={list.heading}
                    p={list.p}
                  />
                ))}
              </List>
            </Card>
          </Flex>
        </Container>
      </Box>

      <Box as="section" py="8" mb="24" bg="gray.100" id="treatment">
        <Container maxW="6xl">
          <SectionHeading heading={locales[locale].covidTreatment.heading} />
          <SimpleGrid minChildWidth="180px" spacing="6" mt="12">
            <HandItem heading={locales[locale].covidTreatment.a} imgUrl="hand-a.png" />
            <HandItem heading={locales[locale].covidTreatment.b} imgUrl="hand-b.png" />
            <HandItem heading={locales[locale].covidTreatment.c} imgUrl="hand-c.png" />
            <HandItem heading={locales[locale].covidTreatment.d} imgUrl="hand-d.png" />
            <HandItem heading={locales[locale].covidTreatment.e} imgUrl="hand-e.png" />
            <HandItem heading={locales[locale].covidTreatment.f} imgUrl="hand-f.png" />
          </SimpleGrid>
        </Container>
      </Box>
    </BaseLayout>
  );
}
