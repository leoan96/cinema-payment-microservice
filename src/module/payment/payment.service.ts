import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment, PaymentDocument } from './payment.schema';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment.name)
    private readonly paymentModel: Model<PaymentDocument>,
  ) {}

  async payForBooking({ totalPrice, transactionId }): Promise<PaymentDocument> {
    return await this.paymentModel.create({ totalPrice, transactionId });
  }
}
