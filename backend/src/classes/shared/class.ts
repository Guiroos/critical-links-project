import { Document } from 'mongoose';

export class Class extends Document {
  className: string;
  year: number;
  createdDate: Date;
  updatedDate: Date;
  deletedDate: Date;
}
