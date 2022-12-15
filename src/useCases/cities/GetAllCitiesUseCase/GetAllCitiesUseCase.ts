import { Injectable } from '@nestjs/common'
import { IDatabaseService } from 'src/@core/abstracts/database-service.abstract'
import { City } from 'src/@core/entities/city.entity'

@Injectable()
export class GetAllCitiesUseCase {
  constructor(private databaseService: IDatabaseService) {}

  async execute(): Promise<City[]> {
    const cities = await this.databaseService.cities.getAll()
    return cities
  }
}
