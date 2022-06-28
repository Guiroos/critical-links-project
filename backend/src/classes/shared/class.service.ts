import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Class } from './class';

@Injectable()
export class ClassService {
  constructor(
    @InjectModel('Class') private readonly classModel: Model<Class>,
  ) {}

  async createDefaultClasses() {
    const classes = [
      {
        className: 'English',
        year: 20,
        createdDate: new Date(),
        updatedDate: new Date(),
        deletedDate: null,
      },
      {
        className: 'Math',
        year: 20,
        createdDate: new Date(),
        updatedDate: new Date(),
        deletedDate: null,
      },
      {
        className: 'Science',
        year: 20,
        createdDate: new Date(),
        updatedDate: new Date(),
        deletedDate: null,
      },
    ];
    await this.classModel.create(classes);
  }

  async getAll() {
    // get all classes
    return await this.classModel.find().exec();
  }

  async getById(id: string) {
    // get class by id
    return await this.classModel.findById(id).exec();
  }

  async create(className: Class) {
    // create new class
    const newClass = new this.classModel(className);
    return await newClass.save();
  }

  async update(id: string, className: Class) {
    // update class with id
    await this.classModel.updateOne({ _id: id }, className).exec();
    return this.getById(id);
  }

  async delete(id: string) {
    // delete class with id
    return await this.classModel.deleteOne({ _id: id }).exec();
  }
}
