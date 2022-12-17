import { Controller, Get } from '@nestjs/common'

import { GetAllCitiesUseCase } from '@/useCases/cities/GetAllCitiesUseCase/GetAllCitiesUseCase'

@Controller('api/cities')
export class CitiesController {
  constructor(private getCitiesUseCase: GetAllCitiesUseCase) {}

  @Get()
  async getAll() {
    return this.getCitiesUseCase.execute()
  }
}
