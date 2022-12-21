import { Module } from '@nestjs/common'

import { CitiesModule } from '@presentation/cities/cities.module'
import { UsersModule } from '@presentation/users/users.module'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './presentation/auth/auth.module'

@Module({
  imports: [CitiesModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule {}
