import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: {
    type: Number,
    default: 1
  },
  fullname: String
})