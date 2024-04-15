import { AbstractTypeOrmRepository, UserEntity } from '@app/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository extends AbstractTypeOrmRepository<UserEntity> {
  constructor(
    @InjectRepository(UserEntity) userRepository: Repository<UserEntity>,
  ) {
    super(userRepository);
  }
}
