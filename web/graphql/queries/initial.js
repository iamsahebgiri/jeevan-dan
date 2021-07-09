import { gql } from '@apollo/client';

export const GET_INITIAL_DATA = gql`
  query GetInitialData {
    states {
      label: name
      value: id
      districts {
        label: name
        value: id
      }
    }
    resources_type {
      label: name
      value: id
    }
  }
`;
