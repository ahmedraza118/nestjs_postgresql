// src/users/users.resolver.ts

import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './user.model';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Query(() => User)
  async getUser(@Args('id') id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  async createUser(@Args('user', { type: () => User }) user: Partial<User>): Promise<User> {
    return this.usersService.create(user);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id') id: number,
    @Args('user', { type: () => User }) user: Partial<User>,
  ): Promise<User> {
    await this.usersService.update(id, user);
    return this.usersService.findOne(id);
  }

  @Mutation(() => Number)
  async deleteUser(@Args('id') id: number): Promise<number> {
    return this.usersService.remove(id);
  }
}
