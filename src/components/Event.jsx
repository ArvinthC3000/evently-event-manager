import PropTypes from 'prop-types';

const Event = props => {
  console.log(props);
  const {
    date,
    userName,
    description,
    title,
    isPublic,
    isCancelled,
    id,
    userId,
  } = props;
  return (
    <div className='event-item'>
      <div className='event-title'>
        <div className='profile'>{userName ? userName.slice(0, 1) : ''}</div>{' '}
        {title}
      </div>
      <div className='event-description'>{description}</div>
      <hr />
      {'This a event with id ' + 0 + ' event.id'}
    </div>
  );
};

Event.propTypes = {};

export default Event;
