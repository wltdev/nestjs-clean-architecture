import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Types } from 'mongoose'
import { Seeder } from 'nestjs-seeder'

import { Province } from '../schemas/province.schema'

@Injectable()
export class ProvinceSeeder implements Seeder {
  constructor(@InjectModel(Province.name) private readonly province: Model<Province>) {}

  async seed(): Promise<any> {
    const provinceId = new Types.ObjectId('637a0ff07ddd09f8655f9aab')

    // Insert into the database.
    return this.province.insertMany([
      {
        _id: provinceId,
        name: 'Minas Gerais',
        initials: 'MG'
      }
    ])
  }

  async drop(): Promise<any> {
    return this.province.deleteMany({})
  }
}
