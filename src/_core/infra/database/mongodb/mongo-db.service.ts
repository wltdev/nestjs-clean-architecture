import { Model } from 'mongoose'

import { Injectable, OnApplicationBootstrap } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { IDatabaseService } from '@core/abstracts/database-service.abstract'

import { MongoDBGenericRepository } from './mongo-db-generic.repository'
import { City, Province } from './schemas'
import { User } from './schemas/user.schema'

@Injectable()
export class MongoDBService implements IDatabaseService, OnApplicationBootstrap {
  provinces: MongoDBGenericRepository<Province>
  cities: MongoDBGenericRepository<City>
  users: MongoDBGenericRepository<User>

  constructor(
    @InjectModel(Province.name)
    private provinceRepository: Model<Province>,
    @InjectModel(City.name)
    private cityRepository: Model<City>,
    @InjectModel(User.name)
    private userRespository: Model<User>
  ) {}

  onApplicationBootstrap() {
    this.provinces = new MongoDBGenericRepository<Province>(this.provinceRepository)
    this.cities = new MongoDBGenericRepository<City>(this.cityRepository)
    this.users = new MongoDBGenericRepository<User>(this.userRespository)
  }
}
