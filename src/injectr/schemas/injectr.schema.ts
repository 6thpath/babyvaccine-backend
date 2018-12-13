import * as mongoose from 'mongoose'

export const InjectrSchema = new mongoose.Schema({
  childrenId: String,
  vaccinId: String,
  injectAt: String,
  isEnabled: {
    type: Boolean,
    default: true
  }
})