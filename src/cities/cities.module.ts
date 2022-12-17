import { Module } from '@nestjs/common'

import { DatabaseService } from '@core/infra/database/database.service.module'

import { GetAllCitiesUseCase } from '@/useCases/cities/GetAllCitiesUseCase/GetAllCitiesUseCase'

import { CitiesController } from './cities.controller'

@Module({
  controllers: [CitiesController],
  providers: [GetAllCitiesUseCase],
  imports: [DatabaseService],
  exports: [GetAllCitiesUseCase]
})
export class CitiesModule {}
