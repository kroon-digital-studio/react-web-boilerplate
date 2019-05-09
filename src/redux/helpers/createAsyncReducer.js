import { handleActions } from 'redux-actions';

const INITIAL_STATE = {
  loading: false,
  error: false,
  response: undefined,
  data: undefined,
};

const request = (state, action) => ({
  ...INITIAL_STATE,
  loading: true,
  data: action.payload.data,
});

const response = (state, action) => ({
  ...state,
  loading: false,
  response: action.payload,
  error: action.error,
});

const createAsyncReducer = ({ requestAction, responseAction }) =>
  handleActions(
    {
      [requestAction]: request,
      [responseAction]: response,
    },
    INITIAL_STATE,
  );

export default createAsyncReducer;
