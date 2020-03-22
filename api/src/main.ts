import { resolve } from 'path'

// eslint-disable-next-line import/order
import * as dotenv from 'dotenv'
dotenv.config({ path: resolve(__dirname, '../.env') })

import { NestFactory } from '@nestjs/core'

import { AppModule } from './app/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  await app.listen(3000)
}

bootstrap()
