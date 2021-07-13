import { useStoreState } from 'easy-peasy';
import { useEffect, useState } from 'react';

export default function useRenderType() {
  const formData = useStoreState((state) => state.formData);

  const [renderType, setRenderType] = useState('');

  useEffect(() => {
    const { selectedState, selectedDistrict, selectedRequirement } = formData;
    if (selectedDistrict !== null && selectedRequirement !== null) {
      setRenderType('BY_RESOURCE_TYPE_ID_AND_DISTRICT_ID');
    } else if (selectedRequirement !== null) {
      setRenderType('BY_RESOURCE_TYPE_ID');
    } else if (selectedDistrict !== null) {
      setRenderType('BY_DISTRICT_ID');
    } else if (selectedState !== null) {
      setRenderType('BY_STATE_ID');
    } else {
      setRenderType('');
    }
  }, [formData]);

  return { renderType };
}
