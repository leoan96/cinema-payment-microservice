import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PaymentDocument = Payment & Document;

@Schema({ toObject: { getters: true }, versionKey: false })
export class Payment {
  @Prop({ required: true, type: Date, default: new Date().toISOString() })
  time: Date;

  @Prop({ required: true, type: Number })
  totalPrice: Number;

  @Prop({ required: true, type: String })
  transactionId: String;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
