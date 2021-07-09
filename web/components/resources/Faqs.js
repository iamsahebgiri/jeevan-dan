import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Container,
  Heading,
} from '@chakra-ui/react';
import SectionHeading from './SectionHeading';
import faqs from '@/data/faqs.json';
import { capitalize } from 'lodash';

export default function Faqs() {
  const { items } = faqs;
  const { title, subtitle } = faqs.content[0];
  console.log(faqs);
  return (
    <Box as="section" py="8" mb="24">
      <Container maxW="5xl">
        <SectionHeading heading={title}>{subtitle}</SectionHeading>

        {items.map((element) => {
          return (
            <Box key={element.category}>
              <Heading
                fontSize="lg"
                my="12"
                textAlign="center"
                key={element.category}
              >
                {capitalize(element.category)}
              </Heading>
              <Accordion allowMultiple>
                {element.content.map((content) => (
                  <AccordionItem key={content.slug}>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          {content.question}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <p dangerouslySetInnerHTML={{ __html: content.answer }} />
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>
          );
        })}
      </Container>
    </Box>
  );
}
