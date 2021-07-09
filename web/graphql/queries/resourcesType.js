import { gql } from '@apollo/client';

export const GET_RESOURCES_TYPES_STATS = gql`
  query GetResourcesTypeStats {
    resources_type {
      id
      name
      resources_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;
