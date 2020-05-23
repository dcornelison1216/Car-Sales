export const ADD_SPOILER = 'ADD_SPOILER';
export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addSpoiler = () => {
  return {
    type: ADD_SPOILER
  };
};

export const addFeature = (feature, price) => {
  return {
    type: ADD_FEATURE,
    payload: { additionalFeature: feature, additionalPrice: price }
  };
};

export const removeFeature = (feature, price) => {
  return {
    type: REMOVE_FEATURE,
    payload: {}
  }
}
