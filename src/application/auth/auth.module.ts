import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'

import { DatabaseService } from '@core/infra/database/database.service.module'

import { GetUserUseCase } from '@/use-cases/users/getUserUseCase/GetUserUseCase'

import { UsersModule } from '../users/users.module'
import { AuthService } from './auth.service'
import { LocalStrategy } from './local.strategy'

@Module({
  imports: [UsersModule, PassportModule, DatabaseService],
  providers: [DatabaseService, AuthService, GetUserUseCase, LocalStrategy],
  exports: [GetUserUseCase]
})
export class AuthModule {}
