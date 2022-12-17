import { Model } from 'mongoose'

import { Injectable, OnApplicationBootstrap } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { IDatabaseService } from '@core/abstracts/database-service.abstract'

import { MongoDBGenericRepository } from './mongo-db-generic.repository'
import { City, Province } from './schemas'

@Injectable()
export class MongoDBService implements IDatabaseService, OnApplicationBootstrap {
  provinces: MongoDBGenericRepository<Province>
  cities: MongoDBGenericRepository<City>

  constructor(
    @InjectModel(Province.name)
    private provinceRepository: Model<Province>,
    @InjectModel(City.name)
    private cityRepository: Model<City>
  ) {}

  onApplicationBootstrap() {
    this.provinces = new MongoDBGenericRepository<Province>(this.provinceRepository)
    this.cities = new MongoDBGenericRepository<City>(this.cityRepository)
  }
}
