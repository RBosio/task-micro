import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MySqlModule, RmqModule, UserEntity } from '@app/common';
import { UserRepository } from './user.repository';

@Module({
  imports: [MySqlModule, MySqlModule.forFeature([UserEntity]), RmqModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
