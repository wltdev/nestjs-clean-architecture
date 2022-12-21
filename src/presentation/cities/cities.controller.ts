import { Controller, Get } from '@nestjs/common'

import { GetAllCitiesUseCase } from '@application/usecases/cities/getall/getallcities.usecase'

@Controller('cities')
export class CitiesController {
  constructor(private getCitiesUseCase: GetAllCitiesUseCase) {}

  @Get()
  async getAll() {
    return this.getCitiesUseCase.execute()
  }
}
