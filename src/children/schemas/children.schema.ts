import * as mongoose from 'mongoose'

export const ChildrenSchema = new mongoose.Schema({
  name: String,
  dob: String,
  userId: String,
  isEnabled: {
    type: Boolean,
    default: true
  }
})