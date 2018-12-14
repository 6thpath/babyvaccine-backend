import * as mongoose from 'mongoose'

export const IaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  isEnabled: {
    type: Boolean,
    default: true
  }
})