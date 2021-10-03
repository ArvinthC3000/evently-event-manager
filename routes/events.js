const express = require('express');
const Event = require('../models/Event');
const router = express.Router();

// @route   GET api/events
// @desc    Get all events from  Database
// @access  Public
router.get('/', async (req, res) => {
  try {
    const events = await Event.find().sort({
      start: -1,
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

module.exports = router;
