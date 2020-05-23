import React from 'react';
import { removeFeature } from '../actions';

const AddedFeature = props => {
  console.log('AddedFeature props', props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={()=>{props.removeFeature()}}
      >X</button>
      {props.feature}
    </li>
  );
};

export default AddedFeature;
