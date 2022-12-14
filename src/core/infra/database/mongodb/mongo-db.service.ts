import { Injectable, OnApplicationBootstrap } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { IDatabaseService } from 'src/core/abstracts/database-service.abstract'

import { MongoDBGenericRepository } from './mongo-db-generic.repository'
import { City, CityDocument, Province, ProvinceDocument } from './schemas'

@Injectable()
export class MongoDBServices implements IDatabaseService, OnApplicationBootstrap {
  // cities: MongoDBGenericRepository<City>
  cities: MongoDBGenericRepository<City>
  provinces: MongoDBGenericRepository<Province>

  constructor(
    @InjectModel(City.name)
    private cityRepository: Model<CityDocument>,
    @InjectModel(Province.name)
    private provinceRepository: Model<ProvinceDocument>
  ) {}

  onApplicationBootstrap() {
    this.provinces = new MongoDBGenericRepository<Province>(this.provinceRepository, [])
    this.cities = new MongoDBGenericRepository<City>(this.cityRepository, ['pronvice'])
  }
}
