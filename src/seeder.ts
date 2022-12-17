import 'dotenv/config'
import { seeder } from 'nestjs-seeder'

import { MongooseModule } from '@nestjs/mongoose'

import { City, CitySchema } from './_core/infra/database/mongodb/schemas/city.schema'
import {
  OrganizationUser,
  OrganizationUserSchema
} from './_core/infra/database/mongodb/schemas/organization-user.schema'
import {
  Organization,
  OrganizationSchema
} from './_core/infra/database/mongodb/schemas/organization.schema'
import {
  Province,
  ProvinceSchema
} from './_core/infra/database/mongodb/schemas/province.schema'
import { User, UserSchema } from './_core/infra/database/mongodb/schemas/user.schema'
import { CitySeeder } from './_core/infra/database/mongodb/seeders/cities.seed'
import { OrganizationUserSeeder } from './_core/infra/database/mongodb/seeders/organizations-users.seed'
import { OrganizationSeeder } from './_core/infra/database/mongodb/seeders/organizations.seed'
import { ProvinceSeeder } from './_core/infra/database/mongodb/seeders/provinces.seed'
import { UsersSeeder } from './_core/infra/database/mongodb/seeders/users.seed'

seeder({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Province.name, schema: ProvinceSchema },
      { name: City.name, schema: CitySchema },
      { name: Organization.name, schema: OrganizationSchema },
      { name: OrganizationUser.name, schema: OrganizationUserSchema }
    ])
  ]
}).run([
  ProvinceSeeder,
  CitySeeder,
  UsersSeeder,
  OrganizationSeeder,
  OrganizationUserSeeder
])
