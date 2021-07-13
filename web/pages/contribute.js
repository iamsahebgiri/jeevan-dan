import { Heading } from '@chakra-ui/react';
import BaseLayout from '@/layouts/base';
import Header from '@/components/ui/Header';
import ContributeForm from '@/components/contribute/ContributeForm';
import HeaderLight from '@/components/ui/HeaderLight';
import NoSSRWrapper from '@/components/helper/NoSSRWrapper';

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
