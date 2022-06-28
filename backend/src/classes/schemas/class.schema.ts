import * as mongoose from 'mongoose';

export const ClassSchema = new mongoose.Schema({
  className: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
    length: 2,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  updatedDate: {
    type: Date,
    default: Date.now,
  },
  deletedDate: {
    type: Date,
    default: Date.now,
  },
});
