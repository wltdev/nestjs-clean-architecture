import { Module } from '@nestjs/common'

import { GetUserUseCase } from '@application/usecases/users/getuser/getuser.usecase'

import { DatabaseService } from '@infrastructure/database/database.service.module'

import { UsersController } from './users.controller'

@Module({
  controllers: [UsersController],
  providers: [GetUserUseCase],
  imports: [DatabaseService],
  exports: [GetUserUseCase]
})
export class UsersModule {}
