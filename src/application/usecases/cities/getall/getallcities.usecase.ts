import { Injectable } from '@nestjs/common'

import { IDatabaseService } from '@domain/abstracts/database-service.abstract'
import { City } from '@domain/entities/city.entity'

@Injectable()
export class GetAllCitiesUseCase {
  constructor(private databaseService: IDatabaseService) {}

  async execute(): Promise<City[]> {
    const cities = await this.databaseService.cities.getAll()
    return cities
  }
}
