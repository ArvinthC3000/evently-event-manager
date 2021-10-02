import axios from 'axios';
import { v4 } from 'uuid';
import { ADD_EVENT, GET_EVENTS, SET_EVENT_TYPE, SET_LOADING } from './types';

// Set loader
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

// Get Events
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

// Add New Event
export const addEvent = data => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    console.log(data);
    const postData = { ...data, id: v4() };
    const res = await axios.post(
      'http://localhost:5000/events',
      postData,
      config
    );

    console.log(res);

    dispatch({
      type: ADD_EVENT,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
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
