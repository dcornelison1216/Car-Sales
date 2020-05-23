export const ADD_SPOILER = 'ADD_SPOILER';
export const ADD_FEATURE = 'ADD_FEATURE';

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
