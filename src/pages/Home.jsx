import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import Headers from '../components/Header';
import './Home.css';

const Home = props => {
  return (
    <>
      <div className='home-container'>
        <Headers />
        <div className='content-wrapper'>
          <div className='nav-wrapper'>
            <NavBar />
          </div>
          <div className='event-content-wrapper'>content-wrapper</div>
        </div>
      </div>
    </>
  );
};

Home.propTypes = {};

export default Home;
