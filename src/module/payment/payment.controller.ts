import { Controller, Get } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get()
  testController() {
    return this.paymentService.testController();
  }
}
