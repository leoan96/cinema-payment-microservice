import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class PaymentDTO {
  @ApiProperty({
    description: 'Total Price',
    type: 'number',
    example: '20.21',
  })
  @IsNumber()
  totalPrice: number;

  @ApiProperty({
    description: 'Transaction Id',
    type: 'string',
    example: '319df989-ec01-48b9-967d-64a68775aaf0',
  })
  @IsString()
  transactionId: string;
}
