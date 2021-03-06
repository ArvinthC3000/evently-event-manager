import PropTypes from 'prop-types';
import {
  FaCalendarPlus,
  FaStar,
  FaUserClock,
  FaUserFriends,
} from 'react-icons/fa';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { setCurrentEvent } from '../actions/eventActions';

const Event = ({ setCurrentEvent, data }) => {
  const currentUser = 1;
  const {
    // date,
    userName,
    description,
    title,
    isPublic,
    markedImportant,
    start,
    end,
  } = data;

  return (
    <div className='event-item'>
      <a
        href='#edit-event-modal'
        className='modal-trigger'
        onClick={() => setCurrentEvent(data)}>
        <div className='event-title'>
          <div className='profile'>
            {userName ? userName.slice(0, 1) : <FaCalendarPlus />}
          </div>{' '}
          {title}
          <span className='date-time-container'>
            <span>
              <Moment format='MMM Do, h:mm - '>{start}</Moment>
              <Moment format='h:mm A'>{end}</Moment>
            </span>
          </span>
        </div>
      </a>
      <div className='event-description'>{description}</div>
      <hr />
      <div className='addition-description'>
        {isPublic ? (
          <div className='event-attendees'>
            <FaUserFriends style={userIconStyles} /> 1 Joined
          </div>
        ) : (
          <div className='event-attendees'>
            <FaUserClock style={privateUserIconStyles} /> Only You
          </div>
        )}
        <div className='rightFloat'>
          <span>{isPublic ? 'Public' : 'Private'}</span>{' '}
          <FaStar
            color={markedImportant.includes(currentUser) ? 'gold' : '#b2bdbd'}
          />
        </div>
      </div>
    </div>
  );
};

const userIconStyles = {
  marginRight: '10px',
  color: '#71c6dd',
};

const privateUserIconStyles = {
  marginRight: '10px',
  color: '#c771dd',
};

Event.propTypes = {
  setCurrentEvent: PropTypes.func.isRequired,
};

export default connect(null, { setCurrentEvent })(Event);
