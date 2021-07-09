import { Heading } from '@chakra-ui/react';
import BaseLayout from '@/layouts/base';
import Header from '@/components/ui/Header';
import ContributeForm from '@/components/contribute/ContributeForm';

export default function ContributePage() {
  return (
    <BaseLayout title="Contribute">
      <ContributeForm />
    </BaseLayout>
  );
}
