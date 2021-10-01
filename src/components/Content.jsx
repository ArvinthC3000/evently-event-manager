import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Event from './Event';

const Content = props => {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    const response = await fetch('http://localhost:5000/events');
    const data = await response.json();
    setEvent(data);
  };

  return (
    <>
      <div className='event-content-header'>
        <div className='screen-title'>Events</div>
        <div className='screen-content-counts'>12 Events available</div>
        <button className='create-new'>
          <span>+ </span> New Event
        </button>
      </div>
      <div className='event-wrapper'>
        {[...event, ...event, ...event, ...event].map((event, index) => (
          <Event key={index} {...event} />
        ))}
      </div>
    </>
  );
};

Content.propTypes = {};

export default Content;
