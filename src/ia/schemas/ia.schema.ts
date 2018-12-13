import * as mongoose from 'mongoose'

export const IaSchema = new mongoose.Schema({
  name: String,
  address: String,
  isEnabled: {
    type: Boolean,
    default: true
  }
})