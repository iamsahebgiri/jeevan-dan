import { getColor, mode, transparentize } from '@chakra-ui/theme-tools';

const size = {
  md: {
    fontSize: 'md',
    px: 3,
    h: 10,
    borderRadius: 'md',
  },
};

const sizes = {
  md: {
    field: size.md,
    addon: size.md,
  },
};

function getDefaults(props) {
  const { focusBorderColor: fc, errorBorderColor: ec } = props;
  return {
    focusBorderColor: fc || mode('orange.500', 'orange.300')(props),
    errorBorderColor: ec || mode('red.500', 'red.300')(props),
  };
}

function variantPrimer(props) {
  const { theme } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);

  return {
    field: {
      border: '1px solid',
      shadow: 'sm',
      borderColor: 'inherit',
      bg: 'inherit',
      _hover: {
        borderColor: mode('gray.300', 'whiteAlpha.400')(props),
      },
      _readOnly: {
        boxShadow: 'none !important',
        userSelect: 'all',
      },
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
      _invalid: {
        borderColor: getColor(theme, ec),
        boxShadow: `0 0 0 3px ${transparentize(
          getColor(theme, ec),
          0.2
        )(theme)}`,
      },
      _focus: {
        zIndex: 1,
        borderColor: getColor(theme, fc),
        boxShadow: `0 0 0 3px ${transparentize(
          getColor(theme, fc),
          0.2
        )(theme)}`,
      },
    },
    addon: {
      border: '1px solid',
      borderColor: mode('inherit', 'whiteAlpha.50')(props),
    },
  };
}

const Input = {
  variants: {
    primer: variantPrimer,
  },
  sizes,
  defaultProps: {
    variant: 'primer',
  },
};

export default Input;
