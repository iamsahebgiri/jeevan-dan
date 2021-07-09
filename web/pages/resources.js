import Card from '@/components/ui/Card';
import SubHeading from '@/components/ui/SubHeading';
import SectionHeading from '@/components/resources/SectionHeading';
import Faqs from '@/components/resources/Faqs';
import BaseLayout from '@/layouts/base';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
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
      <Text as="span" fontWeight="medium">
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


export default function ResourcePage() {
  return (
    <BaseLayout title="Resource">
      <Box as="section">
        <Box
          maxW="2xl"
          mx="auto"
          px={{ base: '6', lg: '8' }}
          py={{ base: '16', sm: '20' }}
          textAlign="center"
        >
          {/* <Flex justify="center">
            <Image src="/marketing/banner.png" alt="Keep the distance" />
          </Flex> */}
          <Heading size="xl" letterSpacing="tight" mt="12">
            Every life is precious, <br />
            <Text as="span" color="teal.500">
              Let&apos;s save them from COVID-19.
            </Text>
          </Heading>
          <SubHeading mt="4" color="gray.600">
            Let’s wear mask, maintain social distancing and fight the battle
            together.
          </SubHeading>

          <Button mt="8" as="a" href="#" colorScheme="teal">
            View all FAQs
          </Button>
        </Box>
      </Box>
      <Box as="section" bg="gray.100" py="8" mb="24">
        <Container maxW="7xl">
          <Heading>Coronavirus (COVID-19)</Heading>
          <Text>
            COVID-19 is a new illness that can affect your lungs and airways.
            It&apos;s caused by a virus called coronavirus.
          </Text>
          <Text>
            Common signs of infection include respiratory symptoms, fever,
            cough, shortness of breath and breathing difficulties. In more
            severe cases, infection can cause pneumonia, severe acute
            respiratory syndrome, kidney failure and even death.
          </Text>
          <Text>
            Standard recommendations to prevent infection spread include regular
            hand washing, covering mouth and nose when coughing and sneezing,
            thoroughly cooking meat and eggs. Avoid close contact with anyone
            showing symptoms of respiratory illness such as coughing and
            sneezing.
          </Text>

          <Box>
            <Heading>What you need to know</Heading>
            <NextLink href="/asd" passHref>
              <Link>
                <Text>How coronavirus is spread &rarr;</Text>
              </Link>
            </NextLink>
            <NextLink href="/asd" passHref>
              <Link>
                <Text>Symptoms of coronavirus &rarr;</Text>
              </Link>
            </NextLink>
            <NextLink href="/asd" passHref>
              <Link>
                <Text>How to protect yourself &rarr;</Text>
              </Link>
            </NextLink>
            <NextLink href="/asd" passHref>
              <Link>
                <Text>Treatment for coronavirus &rarr;</Text>
              </Link>
            </NextLink>
          </Box>
        </Container>
      </Box>

      <Box as="section" py="8" mb="24">
        <Container maxW="7xl">
          <SectionHeading heading="Transmission of COVID-19">
            Because it&apos;s a new illness, the exact mechanism how coronavirus
            spreads from person to person is not fully known. Similar viruses
            spread through cough droplets.
          </SectionHeading>
          <SimpleGrid minChildWidth="210px" spacing="6" mt="12">
            <SpreadCard
              imgUrl="spread-a.png"
              heading="Person-to-person spread as close contact with infected"
            >
              The coronavirus is thought to spread mainly from person to person.
              This can happen between people who are in close contact with one
              another.
            </SpreadCard>

            <SpreadCard
              imgUrl="spread-b.png"
              heading="Touching or contact with infected surfaces or objects"
            >
              A person can get COVID-19 by touching a surface or object that has
              the virus on it and then touching their own mouth, nose, or
              possibly their eyes.
            </SpreadCard>

            <SpreadCard
              imgUrl="spread-c.png"
              heading="Droplets from infected persons cough or sneezes"
            >
              The coronavirus is thought to spread mainly from person to person.
              This can happen between people who are in close contact with one
              another through fomites.
            </SpreadCard>
          </SimpleGrid>
        </Container>
      </Box>

      <Box as="section" py="8" mb="24" bg="gray.100">
        <Container maxW="7xl">
          <SectionHeading heading="Symptoms of coronavirus">
            The most common symptoms of COVID-19 are fever, tiredness, and dry
            cough. Some patients may have aches and pains, nasal congestion,
            runny nose, sore throat or diarrhea. These symptoms are usually mild
            and begin gradually. Also the symptoms may appear 2-14 days after
            exposure. But most people may harbor the infection without any
            symptoms also.
          </SectionHeading>
          <SimpleGrid minChildWidth="210px" spacing="6" mt="12">
            <SymptomCard heading="Fever" imgUrl="symptom-a.png">
              High Fever – this means you feel hot to touch on your forehead or
              back (you do not need to measure your temperature). It is a common
              sign and also may appear in 2-10 days if you are affected.
            </SymptomCard>
            <SymptomCard heading="Cough" imgUrl="symptom-b.png">
              Continuous cough – this means coughing a lot for more than an
              hour, or 3 or more coughing episodes in 24 hours (if you usually
              have a cough, it may be worse than usual).
            </SymptomCard>
            <SymptomCard heading="Shortness of breath" imgUrl="symptom-c.png">
              Difficulty breathing – Around 1 out of every 6 people who gets
              COVID-19 becomes seriously ill and develops difficulty in
              breathing or shortness of breath (usually known by increase in
              number of respirations per minute).
            </SymptomCard>
          </SimpleGrid>
        </Container>
      </Box>

      <Box as="section" py="8" mb="24">
        <Container maxW="7xl">
          <SectionHeading heading="Prevention & Advice">
            There is currently no vaccine to prevent coronavirus disease 2019
            (COVID-19). The best way to prevent illness is to avoid being
            exposed to this virus. Stay aware of the latest information on the
            COVID-19 outbreak, available on the WHO website and through your
            national and local public health authority.
          </SectionHeading>
          <SimpleGrid minChildWidth="210px" spacing="6" mt="12">
            <AdviceItem
              heading="Wash your hands frequently"
              imgUrl="advice-a.png"
            >
              Regularly and thoroughly clean your hands with an alcohol-based
              hand rub or wash them with soap and water for at least 20 seconds.
            </AdviceItem>
            <AdviceItem
              heading="Maintain social distancing"
              imgUrl="advice-b.png"
            >
              Maintain at least 2 metre (6 feet) distance between yourself &
              anyone who is coughing or sneezing. If you are too close, you may
              be infected.
            </AdviceItem>
            <AdviceItem heading="Avoid touching face" imgUrl="advice-c.png">
              Hands touch many surfaces and can pick up viruses easily. So,
              hands can transfer the virus to your eyes, nose or mouth and can
              make you sick.
            </AdviceItem>
            <AdviceItem
              heading="Practice respiratory hygiene"
              imgUrl="advice-d.png"
            >
              Maintain good respiratory hygiene as covering your mouth & nose
              with your bent elbow or tissue when cough or sneeze.
            </AdviceItem>
          </SimpleGrid>
          <Container>
            {/* <Card mt="12">
              <List spacing={3}>
                <PreventionItem
                  heading="Stay home if you’re sick "
                  p="- Stay home if you are sick, except to get medical care."
                />
                <PreventionItem
                  heading="Cover your mouth and nose "
                  p="- with a tissue when you cough or sneeze (throw used tissues in the trash) or use the inside of your elbow."
                />
                <PreventionItem
                  heading="Wear a facemask if you are sick or you are moving out"
                  p="– You should wear a facemask when you are around other people (e.g., sharing a room or vehicle) and before you enter a healthcare center."
                />
                <PreventionItem
                  heading="Clean and disinfect frequently touched surfaces daily"
                  p="– This includes phones, tables, light switches, doorknobs, countertops, handles, desks, toilets, faucets, sinks & ATM, Keyboards etc."
                />
                <PreventionItem
                  heading="Clean the dirty surfaces "
                  p=" – Use detergent or soap and water prior to disinfection."
                />
                <PreventionItem
                  heading="Stay informed about the local COVID-19 situation "
                  p=" Get up-to-date information about local COVID-19 activity from public health officials."
                />
                <PreventionItem
                  heading="Dedicated, lined trash can "
                  p="– If possible, dedicate a lined trash can for the ill person. Use gloves when removing garbage bags, and handling & disposing of trash."
                />
              </List>
            </Card> */}
          </Container>
        </Container>
      </Box>

      <Box as="section" py="8" mb="24" bg="gray.100">
        <Container maxW="7xl">
          <SectionHeading heading="Follow steps to wash hands" />
          <SimpleGrid minChildWidth="180px" spacing="6" mt="12">
            <HandItem heading="Soap on Hand" imgUrl="hand-a.png" />
            <HandItem heading="Palm to Palm" imgUrl="hand-b.png" />
            <HandItem heading="Between Fingers" imgUrl="hand-c.png" />
            <HandItem heading="Back to Hands" imgUrl="hand-d.png" />
            <HandItem heading="Clean with Water" imgUrl="hand-e.png" />
            <HandItem heading="Focus on Wrist" imgUrl="hand-f.png" />
          </SimpleGrid>
        </Container>
      </Box>

      <Faqs />
    </BaseLayout>
  );
}
