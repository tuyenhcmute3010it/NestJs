import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SubscriberDocument = HydratedDocument<Subscriber>;
@Schema({ timestamps: true })
export class Subscriber {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  skills: string[];

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  isDeleted: boolean;

  @Prop()
  deletedAt: Date;
}

export const SubscriberSchema = SchemaFactory.createForClass(Subscriber);
