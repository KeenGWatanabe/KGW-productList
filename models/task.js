const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  unit: {
    type: Number,
    required: [true, 'must provide 4 digit unit number'],
    trim: true,
  },
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  checkin: {
    type: Date,
    required: [true, 'must provide yyyy-mm-dd'],
  },
  checkout: {
    type: Date,
    required: [true, 'must provide yyyy-mm-dd'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model('Task', TaskSchema)