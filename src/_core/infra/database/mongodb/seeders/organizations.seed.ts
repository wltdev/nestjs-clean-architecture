import { Model, Types } from 'mongoose'
import { Seeder } from 'nestjs-seeder'

import { faker } from '@faker-js/faker'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Organization } from '../schemas/organization.schema'

@Injectable()
export class OrganizationSeeder implements Seeder {
  constructor(
    @InjectModel(Organization.name) private readonly organization: Model<Organization>
  ) {}

  async seed(): Promise<any> {
    const organizationID = new Types.ObjectId('637bd7614748ab6ba5775803')
    const cityId = new Types.ObjectId('637b864d03c247ccaf95b53e')

    const organizations = []

    for (let i = 0; i < 9; i++) {
      const org = {
        name: faker.company.name(),
        image: faker.image.sports(),
        city: cityId
      }

      organizations.push(org)
    }
    return this.organization.insertMany([
      {
        _id: organizationID,
        name: 'Pelada Teste',
        image: faker.image.sports(),
        city: cityId
      },
      ...organizations
    ])
  }

  async drop(): Promise<any> {
    return this.organization.deleteMany({})
  }
}
