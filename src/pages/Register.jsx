import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (!name.length || !password.length || !email.length) {
      //   setAlert('Please fill all the fields', 'danger');
    } else if (password !== password2) {
      //   setAlert('Passwords do not match', 'danger');
    } else {
      // console.log(user, 'register submitted');
      //   register({ name, email, password });
    }
  };

  return (
    <div className='registerWrapper'>
      <div className='form-container'>
        <h2>
          Account <span className='text-primary'>Register</span>
        </h2>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              value={name}
              onChange={onChange}
              required
            />
          </div>
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
              minLength='6'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password2'>Confirm Password</label>
            <input
              type='password'
              name='password2'
              value={password2}
              onChange={onChange}
              required
              minLength='6'
            />
          </div>
          <div className='register'>
            <input
              type='submit'
              value='Register'
              className='btn black btn-primary btn-block'
            />{' '}
            <div className=''>
              or <Link to='/login'>Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
