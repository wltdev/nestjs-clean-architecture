import { Module } from '@nestjs/common'

import { MongoDBModule } from './mongodb/mongo-db.module'

@Module({
  imports: [MongoDBModule],
  exports: [MongoDBModule]
})
export class DatabaseService {}
