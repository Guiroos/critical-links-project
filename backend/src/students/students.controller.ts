import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StudentService } from './shared/student.service';
import { Student } from './shared/student';

@Controller('students')
export class StudentsController {
  constructor(private studentService: StudentService) {}

  @Get()
  async getAll(): Promise<Student[]> {
    return this.studentService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Student> {
    return this.studentService.getById(id);
  }

  @Post()
  async create(@Body() student: Student): Promise<Student> {
    return this.studentService.create(student);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() student: Student,
  ): Promise<Student> {
    return this.studentService.update(id, student);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.studentService.delete(id);
  }
}
