import counterActions from '../actions';

const asyncIncreaseCounter = () => dispatch => {
  setTimeout(() => {
    dispatch(counterActions.counter.increment());
  }, 3000);
};

const asyncDecreaseCounter = () => dispatch => {
  setTimeout(() => {
    dispatch(counterActions.counter.decrement());
  }, 3000);
};

export default { asyncDecreaseCounter, asyncIncreaseCounter };
