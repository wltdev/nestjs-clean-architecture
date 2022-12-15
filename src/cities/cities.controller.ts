import { Controller, Get } from '@nestjs/common'
import { GetAllCitiesUseCase } from 'src/useCases/cities/GetAllCitiesUseCase/GetAllCitiesUseCase'

@Controller('cities')
export class CitiesController {
  constructor(private getCitiesUseCase: GetAllCitiesUseCase) {}

  @Get()
  async getAll() {
    return this.getCitiesUseCase.execute()
  }
}
