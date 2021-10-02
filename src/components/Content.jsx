import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../actions/eventActions';
import Event from './Event';

const Content = ({ event: { events, current }, getEvents }) => {
  useEffect(() => {
    getEvents(current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className='event-content-header'>
        <div className='screen-title'>{current} Events</div>
        <div className='screen-content-counts'>12 Events available</div>
        <a href='#add-event-modal' className='modal-trigger'>
          <button className='create-new'>
            <span>+ </span> New Event
          </button>
        </a>
      </div>
      <div className='event-wrapper'>
        {events.length &&
          events.map((event, index) => <Event key={index} data={event} />)}
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
