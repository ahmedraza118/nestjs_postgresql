// src/users/users.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findOne(id: number): Promise<User> {
    return this.userModel.findByPk(id);
  }

  async create(user: Partial<User>): Promise<User> {
    return this.userModel.create(user);
  }

  async update(id: number, user: Partial<User>): Promise<[number, User[]]> {
    const [numberOfAffectedRows, affectedRows] = await this.userModel.update(user, {
      where: { id },
      returning: true, // Ensure that the affected rows are returned
    });

    return [numberOfAffectedRows, affectedRows as User[]];
  }

  async remove(id: number): Promise<number> {
    const result = await this.userModel.destroy({ where: { id } });
    return result;
  }
}
