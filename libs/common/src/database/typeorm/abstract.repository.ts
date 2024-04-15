import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { AbstractEntity } from './abstract.entity';

export class AbstractTypeOrmRepository<TEntity extends AbstractEntity> {
  constructor(private readonly entity: Repository<TEntity>) {}

  async create(entity: TEntity): Promise<TEntity> {
    const createdEntity = this.entity.create(entity);
    return this.entity.save(createdEntity);
  }

  async find(filterQuery: FindManyOptions<TEntity>): Promise<TEntity[]> {
    return this.entity.find(filterQuery);
  }

  async findOne(filterQuery: FindOneOptions<TEntity>): Promise<TEntity> {
    const entity = await this.entity.findOne(filterQuery);
    if (!entity) return null;

    return entity;
  }

  async findOneAndUpdate(
    filterQuery: FindOneOptions<TEntity>,
    update: Partial<TEntity>,
  ): Promise<TEntity> {
    const entity = await this.entity.findOne(filterQuery);
    if (!entity) return null;

    const updatedEntity = Object.assign(entity, update);

    return this.entity.save(updatedEntity);
  }

  async findOneAndDelete(filterQuery: FindOptionsWhere<TEntity>) {
    const entity = await this.findOne({
      where: filterQuery,
    });
    if (!entity) return null;

    this.entity.softDelete(filterQuery);
  }
}
