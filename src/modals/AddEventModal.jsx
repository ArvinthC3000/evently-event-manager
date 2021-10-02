import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddEventModal = props => {
  var elems = document.querySelectorAll('.modal');

  const [isImportant, setIsImportant] = useState(false);
  const [isPublic, setIsPublic] = useState(true);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const handleValue = e => {
    console.log(e.target.props.title.toUpperCase());
    if (e.target.props.title.toUpperCase() === 'START')
      setStartDate(e.target.value);
    if (e.target.props.title.toUpperCase() === 'END')
      setEndDate(e.target.value);
  };

  useEffect(() => {
    M.Modal.init(elems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleStar = () => {
    setIsImportant(!isImportant);
  };

  const handleSwitch = () => {
    setIsPublic(!isPublic);
  };

  const onSubmit = () => {
    // const elementSelector = elems.filter(item => item.id === 'add-event-modal');
    // elementSelector.M_Modal.close();
  };

  return (
    <div id='add-event-modal' className='modal event-modal' style={modalStyle}>
      <div className='row'>
        <form className='col s12'>
          <div className='switch-container row'>
            <h3 className='col s6'>Add Event</h3>
            <div className='col s4'>
              <FaStar
                color={isImportant ? 'gold' : '#b2bdbd'}
                className='starComp'
                width='2'
                onClick={toggleStar}
              />
            </div>
            <div className='col s2'>
              <label htmlFor='isPrivate'>Is private</label>
              <div class='switch'>
                <label>
                  No
                  <input
                    type='checkbox'
                    onChange={handleSwitch}
                    checked={!isPublic}
                  />
                  <span class='lever'></span>
                  Yes
                </label>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s6'>
              <input
                placeholder='Event title'
                id='first_name'
                type='text'
                className='validate'
                required
              />
              <label htmlFor='first_name'>Event Title</label>
            </div>
            <div className='data-container col s3'>
              <label>Start:</label>
              <DateTimePickerComponent
                placeholder='Select date and time'
                title='Start'
                value={startDate}
                onChange={handleValue}
              />
            </div>
            <div className='data-container col s3'>
              <label>End:</label>
              <DateTimePickerComponent
                placeholder='Select date and time'
                title='End'
                value={endDate}
                onChange={handleValue}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col s12'>
              <div className='row'>
                <div className='input-field col s12'>
                  <textarea
                    id='textarea1'
                    className='materialize-textarea'></textarea>
                  <label htmlFor='textarea1'>Description</label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          className='modal-close waves-effect white waves-dark btn'
          style={{ color: '#505050', marginRight: '1rem' }}>
          Cancel
        </a>
        <a
          href='#!'
          className='waves-effect blue waves-light btn'
          onClick={onSubmit}>
          Enter
        </a>
      </div>
    </div>
  );
};

AddEventModal.propTypes = {};

const modalStyle = {
  width: '65%',
  //   height: '75%',
};

export default AddEventModal;
