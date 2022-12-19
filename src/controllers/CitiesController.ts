import { Controller, Get } from '@nestjs/common'

import { GetAllCitiesUseCase } from '@/use-cases/cities/getAllCitiesUseCase/GetAllCitiesUseCase'

@Controller('api/cities')
export class CitiesController {
  constructor(private getCitiesUseCase: GetAllCitiesUseCase) {}

  @Get()
  async getAll() {
    return this.getCitiesUseCase.execute()
  }
}
