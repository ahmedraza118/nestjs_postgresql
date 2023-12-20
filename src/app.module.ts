// src/app.module.ts

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './config/config.module';

@Module({
  imports: [DatabaseModule, UsersModule],
})
export class AppModule {
  
}
