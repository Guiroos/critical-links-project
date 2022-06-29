// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

// export type StudentDocument = Student & Document;

// @Schema()
// export class Student {
//   @Prop({ required: true })
//   firstName: string;
//   @Prop({ required: true })
//   lastName: string;
//   @Prop({ required: true, unique: true, lowercase: true })
//   email: string;
//   @Prop({ required: true })
//   studentID: number;
//   @Prop({ required: true })
//   class: string[];
//   @Prop({ default: Date.now() })
//   createdDate: Date;
// }

// export const StudentSchema = SchemaFactory.createForClass(Student);

export const StudentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  studentID: {
    type: Number,
    required: true,
    unique: true,
  },
  class: {
    type: [String],
    required: true,
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
