import { Module } from '@nestjs/common'
import { GetAllCitiesUseCase } from 'src/useCases/cities/GetAllCitiesUseCase/GetAllCitiesUseCase'

import { DatabaseService } from '../@core/infra/database/database.service.module'
import { CitiesController } from './cities.controller'
import { CitiesService } from './cities.service'

@Module({
  controllers: [CitiesController],
  providers: [CitiesService, GetAllCitiesUseCase],
  imports: [DatabaseService],
  exports: [GetAllCitiesUseCase]
})
export class CitiesModule {}
