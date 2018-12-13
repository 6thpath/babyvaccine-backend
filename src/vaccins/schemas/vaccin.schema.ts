import * as mongoose from 'mongoose'

export const VaccinSchema = new mongoose.Schema({
  name: String,
  description: String,
  availableAge: Number,
  isEnabled: {
    type: Boolean,
    default: true
  }
})