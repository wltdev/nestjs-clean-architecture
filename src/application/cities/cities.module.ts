import { Module } from '@nestjs/common'

import { DatabaseService } from '@core/infra/database/database.service.module'

import { GetAllCitiesUseCase } from '@/use-cases/cities/getAllCitiesUseCase/GetAllCitiesUseCase'

import { CitiesController } from './cities.controller'

@Module({
  controllers: [CitiesController],
  providers: [GetAllCitiesUseCase],
  imports: [DatabaseService],
  exports: [GetAllCitiesUseCase]
})
export class CitiesModule {}
