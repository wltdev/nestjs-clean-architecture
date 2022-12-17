import { City } from '../entities/city.entity'
import { Province } from '../entities/province.entity'
import { IGenericRepository } from './generic-repository.abstract'

export abstract class IDatabaseService {
  abstract cities: IGenericRepository<City>
  abstract provinces: IGenericRepository<Province>
}
