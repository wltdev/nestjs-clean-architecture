import { Model, Types } from 'mongoose'
import { Seeder } from 'nestjs-seeder'

import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { OrganizationUser } from '../schemas/organization-user.schema'

@Injectable()
export class OrganizationUserSeeder implements Seeder {
  constructor(
    @InjectModel(OrganizationUser.name)
    private readonly organizationUser: Model<OrganizationUser>
  ) {}

  async seed(): Promise<any> {
    const adminId = new Types.ObjectId('639e1767f77b8fd1ebbb58a9')
    const organizationID = new Types.ObjectId('637bd7614748ab6ba5775803')

    return this.organizationUser.insertMany([
      {
        user: adminId,
        organization: organizationID,
        status: 'accepted',
        permission: 'admin',
        number: 7,
        position: 'midfielder'
      }
    ])
  }

  async drop(): Promise<any> {
    return this.organizationUser.deleteMany({})
  }
}
