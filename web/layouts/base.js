import Head from 'next/head';
import { useRouter } from 'next/router';
import { Box, Container } from '@chakra-ui/react';
import DarkModeButton from '@/components/DarkModeButton';

export default function BaseLayout(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Jeevan Dan',
    description: `Find oxygen, hospital beds, blood, mask all in one platform. We won't let anyone die of COVID.`,
    image: 'https://jeevan-dan.vercel.app/assets/banner.jpg',
    type: 'website',
    ...customMeta,
  };
  return (
    <Box>
      <Head>
        <title>{`${meta.title} / Jeevan Dan`}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://jeevan-dan.vercel.app${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://jeevan-dan.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Jeevan Dan" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={`${meta.title} / Jeevan Dan`} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jeevan-dan" />
        <meta name="twitter:title" content={`${meta.title} / Jeevan Dan`} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      {/* <DarkModeButton /> */}
      <Box minH="100vh">
        <Box>{children}</Box>
      </Box>
    </Box>
  );
}
