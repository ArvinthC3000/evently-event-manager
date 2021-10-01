import axios from 'axios';
import { GET_EVENTS, SET_EVENT_TYPE, SET_LOADING } from './types';

// Set loader
export const setLoading = () => {
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
    let parameters = '';
    switch (current) {
      case 'ALL':
        break;
      case 'IMPORTANT':
        parameters = await getIds(1);
        break;
      case 'PERSONAL':
        parameters = 'isPublic=false';
        break;
      case 'PUBLIC':
        parameters = 'isPublic=true';
        break;
      default:
        break;
    }
    // return;
    const res = await axios.get(`http://localhost:5000/events?${parameters}`);
    dispatch({
      type: GET_EVENTS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

const getIds = async id => {
  const {
    data: { importantEventIds },
  } = await axios.get(`http://localhost:5000/users/${id}`);
  let returnString = '';
  importantEventIds.forEach(id => (returnString += `&id=${id}`));
  return returnString;
};
