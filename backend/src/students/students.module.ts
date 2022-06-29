import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

import { StudentSchema } from './schemas/student.schema';
import { StudentService } from './shared/student.service';
import { StudentsController } from './students.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),
  ],
  controllers: [StudentsController],
  providers: [StudentService],
})
export class StudentsModule {
  constructor(private readonly studentService: StudentService) {}

  async onModuleInit() {
    const students = await this.studentService.getAll();
    if (students.length === 0) {
      await this.studentService.createDefaultStudents();
    }
  }
}
