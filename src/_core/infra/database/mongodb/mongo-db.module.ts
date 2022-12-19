import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { IDatabaseService } from '@core/abstracts/database-service.abstract'
import { DATA_BASE_CONFIGURATION } from '@core/config'

import { MongoDBService } from './mongo-db.service'
import { CitySchema, City, ProvinceSchema, Province } from './schemas'
import { User, UserSchema } from './schemas/user.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: City.name, schema: CitySchema },
      { name: Province.name, schema: ProvinceSchema },
      { name: User.name, schema: UserSchema }
    ]),
    MongooseModule.forRoot(DATA_BASE_CONFIGURATION.mongoConnectionString)
  ],
  providers: [
    {
      provide: IDatabaseService,
      useClass: MongoDBService
    }
  ],
  exports: [IDatabaseService]
})
export class MongoDBModule {}
