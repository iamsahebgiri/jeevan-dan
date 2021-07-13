import Faqs from '@/components/resources/Faqs';
import HeaderLight from '@/components/ui/HeaderLight';
import BaseLayout from '@/layouts/base';

export default function ContributePage() {
  return (
    <BaseLayout title="Contribute">
      <HeaderLight />
      <Faqs />
    </BaseLayout>
  );
}
