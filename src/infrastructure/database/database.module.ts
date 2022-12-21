import { Module } from '@nestjs/common'

import { MongoDBModule } from './mongodb/mongo-db.module'

console.log('Chamou o DatabaseServiceModule')

@Module({
  imports: [MongoDBModule],
  exports: [MongoDBModule]
})
export class DatabaseModule {}
