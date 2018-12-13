import * as mongoose from 'mongoose'

export const ChildrenSchema = new mongoose.Schema({
  fullname: String,
  dateOfBirth: String,
  userId: Number
})