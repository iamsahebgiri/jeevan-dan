export const getQuery = (queryType) => {
  let variables = '',
    conditions = '{ id: { _gt: $offset }}',
    aggregateConditions = '';

  switch (queryType) {
    case 'BY_DISTRICT_ID':
      variables = ', $district_id: Int';
      conditions =
        '{_and: {district_id: {_eq: $district_id}, id: {_gt: $offset}}}';
      aggregateConditions = '(where: {district_id: {_eq: $district_id}})';
      break;

    case 'BY_STATE_ID':
      variables = ', $state_id: Int';
      conditions =
        '{_and: {district: {state_id: {_eq: $state_id}}, id: {_gt: $offset}}}';
      aggregateConditions = '(where: {district: {state_id: {_eq: $state_id}}})';
      break;

    case 'BY_RESOURCE_TYPE_ID':
      variables = ', $resource_type_id: Int';
      conditions =
        '{_and: {resource_type_id: {_eq: $resource_type_id}, id: {_gt: $offset}}}';
      aggregateConditions =
        '(where: {resource_type_id: {_eq: $resource_type_id}})';
      break;

    case 'BY_RESOURCE_TYPE_ID_AND_DISTRICT_ID':
      variables = ', $district_id: Int, $resource_type_id: Int';
      conditions =
        '{_and: {resource_type_id: {_eq: $resource_type_id}, district_id: {_eq: $district_id}, id: {_gt: $offset}}}';
      aggregateConditions =
        '(where: {_and: {resource_type_id: {_eq: $resource_type_id}, district_id: {_eq: $district_id}}})';
      break;

    default:
      break;
  }

  let query = `query GetResources($limit: Int = 12, $offset: Int = 0 ${variables}) {
    resources_aggregate${aggregateConditions} {
      aggregate {
        count
      }
    }
    resources(limit: $limit, where: ${conditions}) {
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

  return query;
};
