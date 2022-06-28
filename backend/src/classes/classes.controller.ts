import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClassService } from './shared/class.service';
import { Class } from './shared/class';

@Controller('classes')
export class ClassesController {
  constructor(private classService: ClassService) {}

  @Get()
  async getAll(): Promise<Class[]> {
    return this.classService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Class> {
    return this.classService.getById(id);
  }

  @Post()
  async create(@Body() className: Class): Promise<Class> {
    return this.classService.create(className);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() className: Class,
  ): Promise<Class> {
    return this.classService.update(id, className);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.classService.delete(id);
  }
}
