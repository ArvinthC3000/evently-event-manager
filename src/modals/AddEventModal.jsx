import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import PropTypes from 'prop-types';

const AddEventModal = props => {
  const handleValue = e => {
    console.log(e.target.props.title, e.target.value);
    // console.log(e.target.value);
  };
  return (
    <div id='add-event-modal' className='modal event-modal' style={modalStyle}>
      <h3>Add Event</h3>
      <div className='row'>
        <form className='col s12'>
          <div className='row'>
            <div className='input-field col s6'>
              <input
                placeholder='Event title'
                id='first_name'
                type='text'
                className='validate'
              />
              <label htmlFor='first_name'>Event Title</label>
            </div>
            <div className='col s3'>
              <label>Start:</label>
              <DateTimePickerComponent
                placeholder='Select date and time'
                title='Start'
                onChange={handleValue}
              />
            </div>
            <div className='col s3'>
              <label>End:</label>
              <DateTimePickerComponent
                placeholder='Select date and time'
                title='End'
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
          <div className='row'>
            <div className='col s3'>
              <label htmlFor='isPrivate'>Is private</label>
              <div class='switch'>
                <label>
                  No
                  <input type='checkbox' />
                  <span class='lever'></span>
                  Yes
                </label>
              </div>
            </div>
          </div>
        </form>
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
