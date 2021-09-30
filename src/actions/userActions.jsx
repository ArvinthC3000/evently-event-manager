import { ADD_USER, GET_USER, REMOVE_USER } from './types';

// Add new Users
export const addUser = data => async dispatch => {
  try {
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
