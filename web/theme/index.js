import { extendTheme } from '@chakra-ui/react';

import styles from './styles';
import colors from './foundations/colors';
import typography from './foundations/typography';

import Button from './components/button';
import Card from './components/card';
import Heading from './components/heading';
import SubHeading from './components/sub-heading';
import Input from './components/input';

const overrides = extendTheme({
  styles,
  colors,
  ...typography,
  components: {
    Button,
    Card,
    Heading,
    SubHeading,
    Input,
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
    cssVarPrefix: 'ck',
  },
});

export default overrides;
