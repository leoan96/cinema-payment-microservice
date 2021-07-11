import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { BackendApiGuard } from 'src/guard/backend-api.guard';
import { ValidationPipe } from 'src/pipe/validation.pipe';
import { PaymentDTO } from './dto/payment.dto';
import { PaymentDocument } from './payment.schema';
import { PaymentService } from './payment.service';

@ApiTags('payment')
@Controller()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  /*
      NOTICE:
      - basic POC only, payments would be allowed to passed without any checks or logic
      - add fields to schema. i.e. payment details such as what type of ticket, no. of ticket, popcorn set, drinks
      - more features to be implemented in future. i.e. create user wallet during user registration,
        wallet balance reduction, etc...
  */

  @Post('booking')
  @ApiBearerAuth('backendToken')
  @ApiOperation({
    operationId: 'payForBooking',
    summary: 'Pay for booking',
    description: 'Paying for booking',
  })
  @ApiOkResponse({
    description: 'Successfully paid for tickets',
  })
  @ApiBadRequestResponse({
    description: 'Invalid input data',
  })
  @ApiInternalServerErrorResponse({
    description: 'Something went terribly wrong',
  })
  @HttpCode(HttpStatus.OK)
  @UseGuards(BackendApiGuard)
  async payForBooking(
    @Body(new ValidationPipe()) paymentDto: PaymentDTO,
  ): Promise<PaymentDocument> {
    const { totalPrice, transactionId } = paymentDto;
    return this.paymentService.payForBooking({ totalPrice, transactionId });
  }
}
