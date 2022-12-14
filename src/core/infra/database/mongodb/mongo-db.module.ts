import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { IDatabaseService } from 'src/core/abstracts/database-service.abstract'

import { DATA_BASE_CONFIGURATION } from '../../../../config'
import { MongoDataServices } from './mongo-data-services.service'
import { CitySchema, City, ProvinceSchema, Province } from './schemas'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: City.name, schema: CitySchema },
      { name: Province.name, schema: ProvinceSchema }
    ]),
    MongooseModule.forRoot(DATA_BASE_CONFIGURATION.mongoConnectionString)
  ],
  providers: [
    {
      provide: IDatabaseService,
      useClass: MongoDataServices
    }
  ],
  exports: [IDatabaseService]
})
export class MongoDBModule {}
