import * as mongoose from 'mongoose'

export const VaccinSchema = new mongoose.Schema({
  name: String,
  description: String,
  availableAge: Array,
  isEnabled: {
    type: Boolean,
    default: true
  }
})