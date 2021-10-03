const express = require('express');
const Event = require('../models/Event');
const router = express.Router();

// @route   GET api/events
// @desc    Get all events from  Database
// @access  Public
router.get('/', async (req, res) => {
  try {
    const events = await Event.find().sort({
      start: 1,
    });
    res.json(events);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/events
// @desc    Add new event
// @access  Public
router.post('/', async (req, res) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty())
  //   return res.status(400).json({ errors: errors.array() });

  const {
    title,
    description,
    start,
    end,
    isImportant,
    isPublic,
    markedImportant,
  } = req.body;
  try {
    const newEvent = new Event({
      title,
      description,
      start,
      end,
      isImportant,
      isPublic,
      markedImportant,
    });
    console.log(newEvent);

    const event = await newEvent.save();
    res.json({ event: event, msg: 'success' });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/events/:id
// @desc    Update event
// @access  Public
router.put('/:id', async (req, res) => {
  const {
    title,
    description,
    start,
    end,
    isImportant,
    isPublic,
    markedImportant,
  } = req.body;

  // Build contact object
  const eventFields = {};
  if (title) eventFields.title = title;
  if (description) eventFields.description = description;
  if (start) eventFields.start = start;
  if (end) eventFields.end = end;
  if (isImportant) eventFields.isImportant = isImportant;
  if (isPublic) eventFields.isPublic = isPublic;
  if (markedImportant) eventFields.markedImportant = markedImportant;

  try {
    let event = await Event.findById(req.params.id);

    if (!event) return res.status(404).json({ msg: 'Event not found' });

    // // Make sure user owns contact
    // if (contact.user.toString() !== req.user.id) {
    //   return res.status(401).json({ msg: 'Not authorized' });
    // }

    event = await Event.findByIdAndUpdate(
      req.params.id,
      { $set: eventFields },
      { new: true }
    );

    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/contacts/:id
// @desc    Delete contact
// @access  Private
router.delete('/:id', async (req, res) => {
  try {
    let event = await Event.findById(req.params.id);

    if (!event) return res.status(404).json({ msg: 'Event not found' });

    //   // Make sure user owns Event
    //   if (event.user.toString() !== req.user.id) {
    //     return res.status(401).json({ msg: 'Not authorized' });
    //   }

    await Event.findByIdAndRemove(req.params.id);
    console.log('event deleted');
    res.json({ msg: 'Event removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
