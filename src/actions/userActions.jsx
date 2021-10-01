import axios from 'axios';
import { ADD_USER, GET_USER, REMOVE_USER, SET_LOADING } from './types';

// Set loader
export const setLoading = () => {
  console.log('loader started');
  return {
    type: SET_LOADING,
  };
};

// export const setLoading = () => async dispatch => {
//   console.log('loader started')
//   dispatch({
//     type: SET_LOADING,
//   });
// };

// Add new Users
export const addUser = data => async dispatch => {
  try {
    console.log(data);
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
    console.log(user.data);
    dispatch({
      type: GET_USER,
      payload: user.data,
    });
  } catch (error) {
    console.log(error);
  }
};
