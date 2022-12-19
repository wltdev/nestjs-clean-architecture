import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './application/auth/auth.module'
import { CitiesModule } from './application/cities/cities.module'
import { UsersModule } from './application/users/users.module'

@Module({
  imports: [CitiesModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule {}
