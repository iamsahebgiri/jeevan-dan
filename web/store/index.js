import { createStore, action } from 'easy-peasy';

const store = createStore({
  formData: {
    selectedState: null,
    selectedDistrict: null,
    selectedRequirement: null,
  },
  setFormData: action((state, payload) => {
    state.formData = { ...state.formData, ...payload };
  }),
});

export default store;
