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
export class StudentsModule {}
