import { Document } from 'mongoose';

export class Student extends Document {
  firstName: string;
  lastName: string;
  email: string;
  studentID: number;
  class: string[];
  createdDate: Date;
  updatedDate: Date;
  deletedDate: Date;
}
