import { mode } from '@chakra-ui/theme-tools';

const Card = {
  baseStyle: (props) => ({
    display: 'flex',
    flexDirection: 'column',
    background: mode('white', 'gray.800')(props),
    alignItems: 'center',
    gap: 6,
  }),
  variants: {
    quite: {
      padding: 6,
      borderRadius: 'md',
      boxShadow: 'sm',
    },
    loud: {
      padding: 6,
      borderRadius: 'md',
      boxShadow: 'xl',
    },
  },
  defaultProps: {
    variant: 'quite',
  },
};

export default Card;
