import 'dotenv/config'
import { MongooseModule } from '@nestjs/mongoose'
import { seeder } from 'nestjs-seeder'

import { City, CitySchema } from '@infrastructure/database/mongodb/schemas/city.schema'
import {
  OrganizationUser,
  OrganizationUserSchema
} from '@infrastructure/database/mongodb/schemas/organization-user.schema'
import {
  Organization,
  OrganizationSchema
} from '@infrastructure/database/mongodb/schemas/organization.schema'
import {
  Province,
  ProvinceSchema
} from '@infrastructure/database/mongodb/schemas/province.schema'
import { User, UserSchema } from '@infrastructure/database/mongodb/schemas/user.schema'
import { CitySeeder } from '@infrastructure/database/mongodb/seeders/cities.seed'
import { OrganizationUserSeeder } from '@infrastructure/database/mongodb/seeders/organizations-users.seed'
import { OrganizationSeeder } from '@infrastructure/database/mongodb/seeders/organizations.seed'
import { ProvinceSeeder } from '@infrastructure/database/mongodb/seeders/provinces.seed'
import { UsersSeeder } from '@infrastructure/database/mongodb/seeders/users.seed'

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
