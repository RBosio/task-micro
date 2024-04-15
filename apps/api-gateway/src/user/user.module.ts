import { RmqModule, USER_SERVICE } from '@app/common';
import { Module } from '@nestjs/common';

@Module({
  imports: [RmqModule.register(USER_SERVICE)],
  controllers: [],
})
export class UserModule {}
