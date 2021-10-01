import { ADD_USER, SET_LOADING } from '../actions/types';

const initialState = {
  user: null,
  currentUserId: 1,
  loading: false,
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.payload,
        // loading: false,
      };
    case SET_LOADING:
      console.log('loading');
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
