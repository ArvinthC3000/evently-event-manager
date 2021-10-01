import axios from 'axios';
import { GET_EVENTS, SET_EVENT_TYPE, SET_LOADING } from './types';

// Set loader
export const setLoading = () => {
  console.log('loader started');
  return {
    type: SET_LOADING,
  };
};

// Add new Users
export const getEvents = current => async dispatch => {
  try {
    dispatch({
      type: SET_EVENT_TYPE,
      payload: current,
    });
    const res = await axios.get('http://localhost:5000/events');
    dispatch({
      type: GET_EVENTS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
