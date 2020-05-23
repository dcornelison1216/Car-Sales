import React from 'react';
import { connect } from 'react-redux';
import { addSpoiler } from '../actions';

class AdditionalFeature extends React.Component {
  state = {
    additionalPrice: 0,
    additionalFeatures: []
  }

  render() {
    return (
      <li>
        {/* Add an onClick that will let you add a feature to your car */}
        <button
          className="button"
          onClick={()=>this.handleAddClick()}
          value={this.props.feature.price}
        >Add</button>
        {this.props.feature.name} (+{this.props.feature.price})
      </li>
    );
  }
};

const mapStateToProps = state => {
  // console.log('AdditionalFeature state', state)
  return {
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(
  mapStateToProps,
  { addSpoiler }
)(AdditionalFeature);
