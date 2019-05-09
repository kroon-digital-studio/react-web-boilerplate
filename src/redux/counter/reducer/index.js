import { handleActions } from 'redux-actions';

export default handleActions(
  {
    'COUNTER/INCREMENT': (state, action) => ({
      value: state.value + 1,
    }),

    'COUNTER/DECREMENT': (state, action) => ({
      value: state.value - 1,
    }),
  },
  { value: 0 },
);
