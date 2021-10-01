import PropTypes from 'prop-types';
import { FaStar, FaUserClock, FaUserFriends } from 'react-icons/fa';

const Event = props => {
  const currentUser = 1;
  const {
    date,
    userName,
    description,
    title,
    isPublic,
    isCancelled,
    id,
    userId,
    markedImportant,
  } = props;
  return (
    <div className='event-item'>
      <div className='event-title'>
        <div className='profile'>{userName ? userName.slice(0, 1) : ''}</div>{' '}
        {title}
      </div>
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

Event.propTypes = {};

export default Event;
