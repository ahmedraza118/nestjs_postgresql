// src/database/database.module.ts

import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/user.model';

export const DatabaseModule = SequelizeModule.forRoot({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1181',
  database: 'postgres',
  models: [User],
  autoLoadModels: true,
});
