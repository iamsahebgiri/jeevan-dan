import { mode } from '@chakra-ui/theme-tools';

const SubHeading = {
  baseStyle: (props) => ({
    fontSize: 'md',
    color: mode('gray.400', 'gray.500')(props),
  }),
  variants: {
    base: {
      textTransform: 'initial'
    },
    allCaps: {
      textTransform: 'uppercase'
    },
  },
  defaultProps: {
    variant: 'base',
  },
};

export default SubHeading;
