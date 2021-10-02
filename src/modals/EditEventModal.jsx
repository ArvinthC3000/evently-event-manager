import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
// import { currentEvent } from '../actions/eventActions';
import {} from '../actions/userActions';
import { editEvent } from '../actions/eventActions';

const EditEventModal = ({
  user: { currentUserId: current },
  events: { currentEvent },
  editEvent,
}) => {
  const {
    title,
    description,
    start,
    end,
    isPublic: isPublicAlias,
    markedImportant,
    id,
  } = currentEvent;
  const [eventTitle, setEventTitle] = useState('');
  const [eventDecription, setEventDecription] = useState('');
  const [isImportant, setIsImportant] = useState(false);
  const [isPublic, setIsPublic] = useState(true);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [elementSelector, setElementSelector] = useState(null);

  useEffect(() => {
    var elems = document.querySelectorAll('.modal');
    elems.forEach(item => {
      item.id === 'edit-event-modal' && setElementSelector(item);
    });
    M.Modal.init(elems);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => setElementSelector(null);
  }, []);

  useEffect(() => {
    console.log(currentEvent);
    setEventTitle(title);
    setEventDecription(description);
    setIsImportant(markedImportant?.includes(current));
    setIsPublic(isPublicAlias);
    setStartDate(start);
    setEndDate(end);
  }, [currentEvent]);

  const onSubmit = () => {
    if (!eventTitle || !startDate || !endDate) {
      M.toast({ html: 'Please fill all required fields (*)' });
      return;
    }

    editEvent({
      id,
      title: eventTitle,
      description: eventDecription,
      start: startDate,
      end: endDate,
      isImportant,
      isPublic,
      markedImportant: isImportant ? [current] : [],
    });

    setEventTitle('');
    setEventDecription(null);
    setStartDate(null);
    setEndDate(null);
    setIsImportant(null);
    setIsPublic(null);
    elementSelector.M_Modal.close();
  };

  const deleteEvent = () => {};

  return (
    <div id='edit-event-modal' className='modal event-modal' style={modalStyle}>
      <div className='row'>
        <form className='col s12'>
          <div className='switch-container row'>
            <h3 className='col s6'>Edit Event</h3>
            <div className='col s4'>
              <FaStar
                color={isImportant ? 'gold' : '#b2bdbd'}
                className='starComp'
                width='2'
                onClick={() => setIsImportant(!isImportant)}
              />
            </div>
            <div className='col s2'>
              <label htmlFor='isPrivate'>Is private?</label>
              <div className='switch'>
                <label>
                  No
                  <input
                    type='checkbox'
                    onChange={() => setIsPublic(!isPublic)}
                    checked={!isPublic}
                  />
                  <span className='lever'></span>
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
                onChange={e => setEventTitle(e.target.value)}
                value={eventTitle}
              />
              <label htmlFor='first_name'>Event Title</label>
            </div>
            <div className='data-container col s3'>
              <label>Start:</label>
              <DateTimePickerComponent
                placeholder='Select date and time'
                title='Start'
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
              />
            </div>
            <div className='data-container col s3'>
              <label>End:</label>
              <DateTimePickerComponent
                placeholder='Select date and time'
                title='End'
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col s12'>
              <div className='row'>
                <div className='input-field col s12'>
                  <textarea
                    id='textarea1'
                    className='materialize-textarea'
                    onChange={e => setEventDecription(e.target.value)}
                    value={eventDecription}></textarea>
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
          className='waves-effect red waves-dark btn'
          style={{ color: '#FFF', marginRight: '1rem' }}
          onClick={deleteEvent}>
          Delete
        </a>
        <a
          href='#!'
          className='waves-effect blue waves-light btn'
          onClick={onSubmit}>
          Save
        </a>
      </div>
    </div>
  );
};

EditEventModal.propTypes = {
  events: PropTypes.object.isRequired,
  editEvent: PropTypes.func.isRequired,
};

const modalStyle = {
  width: '65%',
  //   height: '75%',
};

const mapStateToProps = state => ({
  user: state.user,
  events: state.events,
});

export default connect(mapStateToProps, { editEvent })(EditEventModal);
