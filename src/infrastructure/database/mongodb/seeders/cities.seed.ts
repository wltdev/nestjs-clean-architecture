import { Model, Types } from 'mongoose'
import { Seeder } from 'nestjs-seeder'

import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { City } from '../schemas/city.schema'

@Injectable()
export class CitySeeder implements Seeder {
  constructor(@InjectModel(City.name) private readonly city: Model<City>) {}

  async seed(): Promise<any> {
    const provinceId = new Types.ObjectId('637a0ff07ddd09f8655f9aab')
    const cityId = new Types.ObjectId('637b864d03c247ccaf95b53e')
    // Insert into the database.
    return this.city.insertMany([
      {
        _id: cityId,
        name: 'Teófilo Otoni',
        province: provinceId
      }
    ])
  }

  async drop(): Promise<any> {
    return this.city.deleteMany({})
  }
}
