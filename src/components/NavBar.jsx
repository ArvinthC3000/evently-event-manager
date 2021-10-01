import PropTypes from 'prop-types';
import { FaCalendar, FaStar, FaUser, FaUserFriends } from 'react-icons/fa';
import { connect } from 'react-redux';
import { getEvents } from '../actions/eventActions';

const NavBar = ({ event, getEvents }) => {
  console.log(event);
  const { current } = event;
  console.log(current);
  const handleClick = e => {
    getEvents(e.target.title);
  };
  return (
    <div>
      <h2 className='category-header'>Browse Categories</h2>
      <div className='compartments'>
        <div className='compartment-header'>Events</div>
        <ul className='compartment-item-container'>
          <li
            title='ALL'
            className={`compartment-item ${current === 'ALL' && 'active'}`}
            onClick={handleClick}>
            <FaCalendar /> All
          </li>
          <li
            title='IMPORTANT'
            className={`compartment-item ${
              current === 'IMPORTANT' && 'active'
            }`}
            onClick={handleClick}>
            <FaStar /> Important
          </li>
          <li
            title='PERSONAL'
            className={`compartment-item ${current === 'PERSONAL' && 'active'}`}
            onClick={handleClick}>
            <FaUser /> Personal
          </li>
          <li
            title='PUBLIC'
            className={`compartment-item ${current === 'PUBLIC' && 'active'}`}
            onClick={handleClick}>
            <FaUserFriends /> Public
          </li>
        </ul>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  getEvents: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  event: state.events,
});

export default connect(mapStateToProps, { getEvents })(NavBar);
