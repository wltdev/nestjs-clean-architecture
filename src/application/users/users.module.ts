import { Module } from '@nestjs/common'

import { DatabaseService } from '@core/infra/database/database.service.module'

import { GetUserUseCase } from '@/use-cases/users/getUserUseCase/GetUserUseCase'

import { UsersController } from './users.controller'

@Module({
  controllers: [UsersController],
  providers: [GetUserUseCase],
  imports: [DatabaseService],
  exports: [GetUserUseCase]
})
export class UsersModule {}
