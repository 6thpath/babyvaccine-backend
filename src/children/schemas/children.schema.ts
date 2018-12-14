import * as mongoose from 'mongoose'

export const ChildrenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    // ref: 'User',
    required: true
  },
  isEnabled: {
    type: Boolean,
    default: true
  }
})