import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { getUser } from '../actions/userActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Preloader from '../components/Preloader';

const Login = ({ getUser, history, user: { current, loading } }) => {
  if (current) {
    history.push('/');
  }
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (!email.length || !password.length) {
      //   setAlert('Please fill in all fields', 'danger');
      M.toast({ html: 'Please enter a message and tech' });
    } else {
      //   console.log(email, password);
      getUser({
        email,
        password,
      });
    }
  };

  return (
    <div className='loginWrapper'>
      <div className='form-container'>
        {loading && <Preloader />}
        <h2>
          Account <span className='text-primary'>Login</span>{' '}
        </h2>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='email'>Email address</label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              value={password}
              onChange={onChange}
              required
            />
          </div>
          <div className='register'>
            <input
              type='submit'
              value='Login'
              className='btn black btn-primary btn-block'
            />
            <div className=''>
              or <Link to='/register'>Register</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  getUser: PropTypes.func.isRequired,
  current: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUser })(Login);
