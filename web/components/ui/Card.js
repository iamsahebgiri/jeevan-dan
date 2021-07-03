import { Box, useStyleConfig } from '@chakra-ui/react';

export default function Card(props) {
  const { variant, ...rest } = props;
  const styles = useStyleConfig('Card', { variant });

  return <Box __css={styles} {...rest} />;
}