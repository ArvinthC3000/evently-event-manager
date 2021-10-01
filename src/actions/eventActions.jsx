import axios from 'axios';
import { GET_EVENTS, SET_LOADING } from './types';

// Set loader
export const setLoading = () => {
  console.log('loader started');
  return {
    type: SET_LOADING,
  };
};

// Add new Users
export const getEvents = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5000/events');
    dispatch({
      type: GET_EVENTS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
