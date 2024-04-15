import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { Logger } from 'nestjs-pino';
import { RmqService, USER_SERVICE } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);

  const rmqService = app.get(RmqService);
  app.connectMicroservice(rmqService.getRmqOptions(USER_SERVICE));

  app.useLogger(app.get(Logger));
  await app.listen(null);
  await app.startAllMicroservices();
}
bootstrap();
