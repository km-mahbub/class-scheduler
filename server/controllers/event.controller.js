const Event = require('../models/event.model');


module.exports = {
  getEvents
}

async function getEvents() {
  return await Event.find();
}
