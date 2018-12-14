import * as mongoose from 'mongoose'

export const InjectrSchema = new mongoose.Schema({
  childrenId: {
    type: String,
    required: true
  },
  vaccinId: {
    type: String,
    required: true
  },
  injectAt: {
    type: String,
    required: true
  },
  isEnabled: {
    type: Boolean,
    default: true
  }
})