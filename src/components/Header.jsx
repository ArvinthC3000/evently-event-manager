import { FaCalendar } from 'react-icons/fa';

const NavBar = props => {
  return (
    <>
      <nav className='main-header'>
        <div className='header-container'>
          <div className='title'>
            <FaCalendar className='title-logo' /> Evently
          </div>
        </div>
        {/* <SearchBar /> */}
        {/* <form id='searchForm' class='header__search' method='GET' action='/'>
          <label>
            <svg
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 32 32'>
              <title>search</title>
              <path d='M32 30.586l-10.845-10.845c1.771-2.092 2.845-4.791 2.845-7.741 0-6.617-5.383-12-12-12s-12 5.383-12 12c0 6.617 5.383 12 12 12 2.949 0 5.649-1.074 7.741-2.845l10.845 10.845 1.414-1.414zM12 22c-5.514 0-10-4.486-10-10s4.486-10 10-10c5.514 0 10 4.486 10 10s-4.486 10-10 10z'></path>
            </svg>
            <input name='q' value='' placeholder='Search for rooms' />
          </label>
        </form> */}
        <ul>
          <li>{/* <Link to='/'>Home</Link> */}</li>
          <li>{/* <Link to='/about'>About</Link> */}</li>
        </ul>
      </nav>
    </>
  );
};

NavBar.propTypes = {};

export default NavBar;
