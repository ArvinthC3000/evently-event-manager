import {
  ADD_EVENT,
  GET_EVENTS,
  SET_EVENT_TYPE,
  SET_LOADING,
} from '../actions/types';

const initialState = {
  events: [],
  current: 'ALL',
  userId: null,
  loading: false,
  error: null,
  success: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_EVENT_TYPE:
      return {
        ...state,
        current: action.payload,
        // loading: false,
      };
    case ADD_EVENT:
      return {
        ...state,
        events: action.payload,
        // loading: false,
      };
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload,
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
