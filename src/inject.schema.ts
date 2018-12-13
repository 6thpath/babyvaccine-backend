import * as mongoose from 'mongoose'

export const InjectSchema = new mongoose.Schema({
  childrenId: String,
  vaccinId: String,
  injectAt: Number
})