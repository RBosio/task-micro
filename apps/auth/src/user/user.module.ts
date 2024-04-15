import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MySqlModule, UserEntity } from '@app/common';
import { UserRepository } from './user.repository';

@Module({
  imports: [MySqlModule, MySqlModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
