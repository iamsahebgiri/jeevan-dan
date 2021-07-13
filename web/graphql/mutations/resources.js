export const INSERT_RESOURCE = `
mutation InsertResource($description: String = "", $contact_number: String = "", $address: String = "", $district_id: Int, $resource_type_id: Int, $contact_name: String = "") {
  insert_resources(objects: {address: $address, contact_number: $contact_number, description: $description, district_id: $district_id, resource_type_id: $resource_type_id, contact_name: $contact_name}) {
    returning {
      id
      created_at
    }
  }
}
`;
