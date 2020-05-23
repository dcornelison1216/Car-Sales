import React from 'react';
import { connect } from 'react-redux';

class Total extends React.Component {
  render() {
    console.log('Total props', this.props)
    return (
      <div className="content">
        <h4>Total Amount: ${this.props.car.price + this.props.additionalPrice}</h4>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(
  mapStateToProps,
  {}
)(Total);
