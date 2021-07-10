import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { CustomLogger } from './logger/custom-logger.logger';
import { setCorrelationId } from './shared/utils';
import * as helmet from 'helmet';
import * as express from 'express';
import * as httpContext from 'express-http-context';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { ConfigService } from '@nestjs/config';
import { AllExceptionFilter } from './filter/http-exception.filter';
import { MongoExceptionFilter } from './filter/mongodb-exception.filter';
import { appConfiguration, initializeSwagger } from './app.configuration';
import { RedisConnectService } from './module/redis/service/redis-connect.service';

const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useLogger(app.get(CustomLogger));
  app.useGlobalInterceptors(new LoggingInterceptor());

  const configService = app.get(ConfigService);
  const session = app.get(RedisConnectService).getRedisSession();
  const appConfig = appConfiguration(configService);

  app.use(helmet());
  app.enableCors(appConfig.cors);
  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalFilters(new MongoExceptionFilter());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.set('trust proxy', 1);
  app.use(httpContext.middleware);
  app.use(await session);
  app.use(setCorrelationId);

  initializeSwagger(app, configService);

  const port = configService.get('app.port');
  await app.listen(port);
  logger.log(`Server listening on port ${port}...`);
}
bootstrap();

process.on('uncaughtException', (error) => {
  logger.error(
    `UNCAUGHT EXCEPTION - keeping process alive:\n ${
      error.stack
    }\n ${JSON.stringify(error)}`,
  );
});
