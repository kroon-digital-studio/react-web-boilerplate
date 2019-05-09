import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../../logo.svg';

import counterRedux from '../../redux/counter';

class Home extends Component {
  incrementNow = () => {
    const { increaseCounter } = this.props;
    increaseCounter();
  };

  incrementAsync = () => {
    const { asyncIncreaseCounter } = this.props;
    asyncIncreaseCounter();
  };

  decrementNow = () => {
    const { decreaseCounter } = this.props;
    decreaseCounter();
  };

  decrementAsync = () => {
    const { asyncDecreaseCounter } = this.props;
    asyncDecreaseCounter();
  };

  render() {
    const { counter } = this.props;
    return (
      <>
        <img
          style={{ maxWidth: '200px', display: 'block', margin: '0 auto' }}
          src={logo}
          alt="logo"
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <p>Welcome to Kidzzly App</p>
          <p>{`Counter: ${counter.value}`}</p>
          <button type="button" onClick={this.incrementNow}>
            Increment
          </button>
          <button type="button" onClick={this.incrementAsync}>
            Async Increment counter
          </button>
          <hr style={{ width: '50%' }} />
          <button type="button" onClick={this.decrementNow}>
            Decrement
          </button>
          <button type="button" onClick={this.decrementAsync}>
            Async Decrement counter
          </button>
        </div>
      </>
    );
  }
}

Home.propTypes = {
  counter: PropTypes.shape({}).isRequired,
  increaseCounter: PropTypes.func.isRequired,
  decreaseCounter: PropTypes.func.isRequired,
  asyncIncreaseCounter: PropTypes.func.isRequired,
  asyncDecreaseCounter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ counter }) => ({
  counter,
});

const mapDispatchToProps = {
  increaseCounter: counterRedux.actions.counter.increment,
  decreaseCounter: counterRedux.actions.counter.decrement,
  asyncIncreaseCounter: counterRedux.thunks.asyncIncreaseCounter,
  asyncDecreaseCounter: counterRedux.thunks.asyncDecreaseCounter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
