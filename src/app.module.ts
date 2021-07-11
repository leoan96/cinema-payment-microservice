import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { appEnvironmentConfiguration } from './app.env.configuration';
import { LoggerModule } from './logger/logger.module';
import { jwtEnvironmentConfiguration } from './module/jwt/jwt.env.configuration';
import { JwtAuthenticationModule } from './module/jwt/jwt.module';
import { mongooseEnvironmentConfiguration } from './module/mongoose/mongoose.configuration';
import { MongooseClient } from './module/mongoose/mongoose.provider';
import { PaymentModule } from './module/payment/payment.module';
import { redisEnvironmentConfiguration } from './module/redis/redis.configuration';
import { RedisModule } from './module/redis/redis.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [
        appEnvironmentConfiguration,
        mongooseEnvironmentConfiguration,
        redisEnvironmentConfiguration,
        jwtEnvironmentConfiguration,
      ],
      isGlobal: true,
    }),
    MongooseModule.forRootAsync(MongooseClient),
    LoggerModule,
    RedisModule,
    PaymentModule,
    JwtAuthenticationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
