export const GET_RESOURCES_TYPES_STATS = `
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
