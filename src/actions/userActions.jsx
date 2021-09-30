import { ADD_USER, GET_USER, REMOVE_USER } from './types';

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
