import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        url: configService.get<string>('MYSQL_URI'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class MySqlModule {}
