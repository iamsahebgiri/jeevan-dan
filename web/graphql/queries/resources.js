import { gql } from '@apollo/client';

export const GET_RESOURCES_ALL = gql`
  query GetResourcesAll($limit: Int, $offset: Int) {
    resources(limit: $limit, offset: $offset) {
      id
      contact_name
      address
      contact_number
      description
      downvote_count
      upvote_count
      resources_type {
        name
      }
      district {
        name
        state {
          name
        }
      }
      verified_at
      created_at
      updated_at
    }
  }
`;

export const GET_RESOURCES_BY_DISTRICT_ID = gql`
  query GetResourcesByDistrictId($limit: Int, $offset: Int, $district_id: Int) {
    resources(
      limit: $limit
      offset: $offset
      where: { district_id: { _eq: $district_id } }
    ) {
      id
      contact_name
      address
      contact_number
      description
      downvote_count
      upvote_count
      resources_type {
        name
      }
      district {
        name
        state {
          name
        }
      }
      verified_at
      created_at
      updated_at
    }
  }
`;

export const GET_RESOURCES_BY_STATE_ID = gql`
  query GetResourcesByStateId($limit: Int, $offset: Int, $state_id: Int) {
    resources(
      limit: $limit
      offset: $offset
      where: { district: { state_id: { _eq: $state_id } } }
    ) {
      id
      contact_name
      address
      contact_number
      description
      downvote_count
      upvote_count
      resources_type {
        name
      }
      district {
        name
        state {
          name
        }
      }
      verified_at
      created_at
      updated_at
    }
  }
`;

export const GET_RESOURCES_BY_RESOURCE_TYPE_ID = gql`
  query GetResourcesByResourceTypeId(
    $limit: Int
    $offset: Int
    $resource_type_id: Int
  ) {
    resources(
      limit: $limit
      offset: $offset
      where: { resource_type_id: { _eq: $resource_type_id } }
    ) {
      id
      contact_name
      address
      contact_number
      description
      downvote_count
      upvote_count
      resources_type {
        name
      }
      district {
        name
        state {
          name
        }
      }
      verified_at
      created_at
      updated_at
    }
  }
`;

export const GET_RESOURCES_BY_RESOURCE_TYPE_ID_AND_DISTRICT_ID = gql`
  query GetResourcesByResourceIdAndDistrictId(
    $limit: Int
    $offset: Int
    $district_id: Int
    $resource_type_id: Int
  ) {
    resources(
      limit: $limit
      offset: $offset
      where: {
        district_id: { _eq: $district_id }
        resource_type_id: { _eq: $resource_type_id }
      }
    ) {
      id
      contact_name
      address
      contact_number
      description
      downvote_count
      upvote_count
      resources_type {
        name
      }
      district {
        name
        state {
          name
        }
      }
      verified_at
      created_at
      updated_at
    }
  }
`;
