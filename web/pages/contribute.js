import SectionHeading from '@/components/resources/SectionHeading';
import ContributeForm from '@/components/contribute/ContributeForm';
import NoSSRWrapper from '@/components/helper/NoSSRWrapper';
import HeaderLight from '@/components/ui/HeaderLight';
import BaseLayout from '@/layouts/base';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import SubHeading from '@/components/ui/SubHeading';

export default function ContributePage() {
  return (
    <BaseLayout title="Contribute">
      <HeaderLight />
      <NoSSRWrapper>
        <ContributeForm />
      </NoSSRWrapper>
    </BaseLayout>
  );
}
