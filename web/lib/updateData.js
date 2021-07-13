export function updateData(prevData, data) {
  if (prevData.resources.length !== 0 && data.resources.length !== 0) {
    if (
      prevData.resources[0].resources_type.name !==
      data.resources[0].resources_type.name
    ) {
      return { ...data };
    }
  }
  return { ...data, resources: [...prevData.resources, ...data.resources] };
}
