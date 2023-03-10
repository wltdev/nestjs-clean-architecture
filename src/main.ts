import 'dotenv/config'
import 'module-alias/register'

import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const port = process.env.PORT || 3333
  await app.listen(port)

  Logger.log(`Server is running on port ${port}`, 'Bootstrap')
}

bootstrap()
