import {
  ADD_EVENT,
  DELETE_EVENT,
  GET_EVENTS,
  SET_CURRENT_EVENT,
  SET_EVENT_TYPE,
  SET_LOADING,
  UPDATE_EVENT,
} from '../actions/types';

const initialState = {
  events: [],
  current: 'ALL',
  userId: 1,
  loading: false,
  error: null,
  success: null,
  currentEvent: {},
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
        events: [...state.events, action.payload],
        // loading: false,
      };
    case SET_CURRENT_EVENT:
      return {
        ...state,
        currentEvent: action.payload,
        // loading: false,
      };
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload,
        // loading: false,
      };
    case UPDATE_EVENT:
      return {
        ...state,
        events: [
          ...state.events.filter(item => item.id !== action.payload.id),
          action.payload,
        ],
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: [...state.events.filter(item => item.id !== action.payload)],
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
