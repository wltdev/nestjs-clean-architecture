import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { CitiesModule } from './cities/cities.module'
import { UsersModule } from './users/users.module'

@Module({
  imports: [CitiesModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule {}
