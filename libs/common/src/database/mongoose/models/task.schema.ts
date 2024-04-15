import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '../abstract.schema';

@Schema({ versionKey: false })
export class TaskDocument extends AbstractDocument {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop({ default: false })
  completed: boolean;

  @Prop()
  userId: string;
}

export const TaskSchema = SchemaFactory.createForClass(TaskDocument);
