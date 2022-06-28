import { Injectable } from '@nestjs/common';
import { Student } from './student';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel('Student') private readonly studentModel: Model<Student>,
  ) {}

  async createDefaultStudents() {
    const students = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@email.com',
        studentID: 123456,
        class: ['English', 'Math'],
        createdDate: new Date(),
        updatedDate: new Date(),
        deletedDate: null,
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@email.com',
        studentID: 123457,
        class: ['English'],
        createdDate: new Date(),
        updatedDate: new Date(),
        deletedDate: null,
      },
    ];
    await this.studentModel.create(students);
  }

  async getAll() {
    // get all students
    return await this.studentModel.find().exec();
  }

  async getById(id: string) {
    // get student by id
    return await this.studentModel.findById(id).exec();
  }

  async create(student: Student) {
    // create new student
    const newStudent = new this.studentModel(student);
    return await newStudent.save();
  }

  async update(id: string, student: Student) {
    // update student with id
    await this.studentModel.updateOne({ _id: id }, student).exec();
    return this.getById(id);
  }

  async delete(id: string) {
    // delete student with id
    return await this.studentModel.deleteOne({ _id: id }).exec();
  }
}
