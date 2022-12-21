import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'

import { GetUserUseCase } from '@application/usecases/users/getuser/getuser.usecase'

import { DatabaseService } from '@infrastructure/database/database.service.module'

import { UsersModule } from '../users/users.module'
import { AuthService } from './auth.service'
import { LocalStrategy } from './local.strategy'

@Module({
  imports: [UsersModule, PassportModule, DatabaseService],
  providers: [DatabaseService, AuthService, GetUserUseCase, LocalStrategy],
  exports: [GetUserUseCase]
})
export class AuthModule {}
