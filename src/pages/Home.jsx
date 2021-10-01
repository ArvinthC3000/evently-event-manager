import NavBar from '../components/NavBar';
import Headers from '../components/Header';
import './Home.css';
import Content from '../components/Content';

const Home = props => {
  return (
    <>
      <div className='home-container'>
        <Headers />
        <div className='content-wrapper'>
          <div className='nav-wrapper'>
            <NavBar />
          </div>
          <div className='event-content-wrapper'>
            <Content />
          </div>
        </div>
      </div>
    </>
  );
};

Home.propTypes = {};

export default Home;
