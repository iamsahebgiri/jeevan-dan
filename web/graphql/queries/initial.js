export const GET_INITIAL_DATA = `query GetInitialData {
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
