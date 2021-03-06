import types from '../actionTypes';

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case types.FETCH_REQUEST_POSTS:
    case types.FETCH_REQUEST_IMAGES:
      return null;

    case types.FETCH_ERROR_POSTS:
    case types.FETCH_ERROR_IMAGES:
      return payload.error;

    default:
      return state;
  }
};

export default errorReducer;
