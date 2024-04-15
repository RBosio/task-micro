import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../abstract.entity';

@Entity({ name: 'user' })
export class UserEntity extends AbstractEntity {
  @Column()
  email: string;

  @Column()
  password: string;
}
