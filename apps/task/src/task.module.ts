import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { MongoModule, TaskDocument, TaskSchema } from '@app/common';
import { TaskRepository } from './task.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
      }),
    }),
    MongoModule,
    MongoModule.forFeature([{ name: TaskDocument.name, schema: TaskSchema }]),
  ],
  controllers: [TaskController],
  providers: [TaskService, TaskRepository],
})
export class TaskModule {}
