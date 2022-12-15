import { Module } from '@nestjs/common'

// import { DatabaseModule } from './database.module'
import { MongoDBModule } from './mongodb/mongo-db.module'

@Module({
  imports: [MongoDBModule],
  exports: [MongoDBModule]
})
export class DatabaseService {}
