import axios from 'axios';
import { ADD_USER, GET_USER, SET_LOADING } from './types';

// Set loader
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

// Add new Users
export const addUser = data => async dispatch => {
  try {
    dispatch({
      type: ADD_USER,
      payload: 'success',
    });
  } catch (error) {
    console.log(error);
  }
};

// Get new Users
export const getUser = data => async dispatch => {
  try {
    const { email, password } = data;
    setLoading();
    const user = await axios.get(
      `http://localhost:5000/users?email=${email}&password=${password}`
    );
    dispatch({
      type: GET_USER,
      payload: user.data,
    });
  } catch (error) {
    console.log(error);
  }
};
