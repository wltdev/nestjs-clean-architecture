import { Module } from '@nestjs/common'
import { GetAllCitiesUseCase } from 'src/useCases/cities/GetAllCitiesUseCase/GetAllCitiesUseCase'

import { DatabaseService } from '../@core/infra/database/database.service.module'
import { CitiesController } from './cities.controller'

@Module({
  controllers: [CitiesController],
  providers: [GetAllCitiesUseCase],
  imports: [DatabaseService],
  exports: [GetAllCitiesUseCase]
})
export class CitiesModule {}
