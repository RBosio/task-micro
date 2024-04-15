import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { LoggerModule, MySqlModule } from '@app/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MYSQL_URI: Joi.string().required(),
      }),
    }),
    MySqlModule,
    LoggerModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
