const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  firstname: {
    type: String,
    require: true
  },
  lastname: {
    type: String,
    require: true
  },
  middlename: {
    type: String,
    require: true
  },
  gender: {
    type: String,
    require: true
  },
  address: {
    type: String,
    require: true
  },
  guardian: {
    type: String,
    require: true
  },
  contactNo: {
    type: String,
    require: true
  },
  birthday: {
    type: Date,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  username: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  teacherID: {
    type: String,
    require: true
  },
  classID: {
    type: String,
    require: true
  },
  classArchive: {
    type: Boolean,
    require: true,
    default: false
  },
  learning_disabilities: [
    {
      type: String,
      enum: ["dyslexia", "dysgraphia", "dyscalculia"],
      require: true
    }
  ],
  instructor: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    require: true
  },
  stars: {
    type: Number,
    default: 0
  },
  archive: {
    type: Boolean,
    require: true,
    default: false
  }
});

module.exports = mongoose.model('Student', studentSchema)