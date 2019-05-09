import { createActions } from 'redux-actions';

const counterCreators = createActions({
  COUNTER: {
    INCREMENT: () => {},
    DECREMENT: () => {},
  },
});

export default counterCreators;
