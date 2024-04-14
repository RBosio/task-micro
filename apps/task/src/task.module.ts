import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MYSQL_URI: Joi.string().required(),
      }),
    }),
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
