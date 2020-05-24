import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions';

class AdditionalFeature extends React.Component {

  render() {
    return (
      <li>
        {/* Add an onClick that will let you add a feature to your car */}
        <button
          className="button"
          onClick={()=>this.props.addFeature(this.props.feature.name, this.props.feature.price)}
        >Add</button>
        {this.props.feature.name} (+{this.props.feature.price})
      </li>
    );
  }
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(
  mapStateToProps,
  { addFeature }
)(AdditionalFeature);
