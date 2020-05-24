export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addFeature = (feature, price) => {
  return {
    type: ADD_FEATURE,
    payload: { additionalFeature: feature, additionalPrice: price }
  };
};

export const removeFeature = (feature) => {
  return {
    type: REMOVE_FEATURE,
    payload: { removedFeature: feature }
  }
}
