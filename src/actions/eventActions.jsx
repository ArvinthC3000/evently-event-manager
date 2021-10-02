import axios from 'axios';
import { v4 } from 'uuid';
import {
  ADD_EVENT,
  DELETE_EVENT,
  GET_EVENTS,
  SET_CURRENT_EVENT,
  SET_EVENT_TYPE,
  SET_LOADING,
  UPDATE_EVENT,
} from './types';

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
    const res = await axios.get(`/events?${parameters}`);
    dispatch({
      type: GET_EVENTS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setCurrentEvent = event => async dispatch => {
  dispatch({
    type: SET_CURRENT_EVENT,
    payload: event,
  });
};

// Add New Event
export const addEvent = data => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const postData = { ...data, id: v4() };
    const res = await axios.post('/events', postData, config);

    dispatch({
      type: ADD_EVENT,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// Edit Event
export const editEvent = data => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.put(`/events/${data.id}`, data, config);

    dispatch({
      type: UPDATE_EVENT,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete Event
export const deleteEvent = id => async dispatch => {
  try {
    await axios.delete(`/events/${id}`);
  } catch (err) {
    console.log(err);
  }
  dispatch({
    type: DELETE_EVENT,
    payload: id,
  });
};

const getIds = async id => {
  const {
    data: { importantEventIds },
  } = await axios.get(`/users/${id}`);
  let returnString = '';
  importantEventIds.forEach(id => (returnString += `&id=${id}`));
  return returnString;
};
