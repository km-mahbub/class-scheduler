const express = require('express');
const asyncHandler = require('express-async-handler');
const eventCtrl = require('../controllers/event.controller');

const router = express.Router();
module.exports = router;

router.route('/')
  .get(asyncHandler(getEvents));


async function getEvents(req, res) {
  let events = await eventCtrl.getEvents();
  res.json(events);
}
