import { Module } from '@nestjs/common'

import { DatabaseModule } from '../common/database/database.module'

import { AppController } from './controllers/app.controller'

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
})
export class AppModule {}
