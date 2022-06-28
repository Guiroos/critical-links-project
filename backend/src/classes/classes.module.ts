import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ClassesController } from './classes.controller';
import { ClassService } from './shared/class.service';
import { ClassSchema } from './schemas/class.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Class', schema: ClassSchema }]),
  ],
  controllers: [ClassesController],
  providers: [ClassService],
})
export class ClassesModule {
  constructor(private readonly classService: ClassService) {}

  async onModuleInit() {
    const classes = await this.classService.getAll();
    if (classes.length === 0) {
      await this.classService.createDefaultClasses();
    }
  }
}
