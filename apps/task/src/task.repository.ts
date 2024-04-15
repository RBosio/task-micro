import { AbstractMongooseRepository, TaskDocument } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TaskRepository extends AbstractMongooseRepository<TaskDocument> {
  protected readonly logger = new Logger(TaskRepository.name);

  constructor(@InjectModel(TaskDocument.name) taskModel: Model<TaskDocument>) {
    super(taskModel);
  }
}
