import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../actions/eventActions';
import Event from './Event';

const Content = ({ event: { events }, getEvents }) => {
  useEffect(() => {
    getEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        {events.length &&
          events.map((event, index) => <Event key={index} {...event} />)}
      </div>
    </>
  );
};

Content.propTypes = {
  getEvents: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  event: state.events,
});

export default connect(mapStateToProps, { getEvents })(Content);
