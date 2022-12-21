import { Module } from '@nestjs/common'

import { GetAllCitiesUseCase } from '@application/usecases/cities/getall/getallcities.usecase'

import { DatabaseService } from '@infrastructure/database/database.service.module'

import { CitiesController } from './cities.controller'

@Module({
  controllers: [CitiesController],
  providers: [GetAllCitiesUseCase],
  imports: [DatabaseService],
  exports: [GetAllCitiesUseCase]
})
export class CitiesModule {}
