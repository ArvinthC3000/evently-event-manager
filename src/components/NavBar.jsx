import PropTypes from 'prop-types';
import {
  FaCalendar,
  FaPersonBooth,
  FaStar,
  FaUser,
  FaUserFriends,
} from 'react-icons/fa';

const NavBar = props => {
  return (
    <div>
      <h2 className='category-header'>Browse Categories</h2>
      <div className='compartments'>
        <div className='compartment-header'>Events</div>
        <ul className='compartment-item-container'>
          <li className='compartment-item'>
            <FaCalendar /> All
          </li>
          <li className='compartment-item'>
            <FaStar /> Important
          </li>
          <li className='compartment-item'>
            <FaUser /> Personal
          </li>
          <li className='compartment-item'>
            <FaUserFriends /> Public
          </li>
        </ul>
      </div>
    </div>
  );
};

NavBar.propTypes = {};

export default NavBar;
