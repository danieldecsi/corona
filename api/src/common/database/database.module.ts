import { Global, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { DatabaseConfigService } from './services/database-config.service'
import { LocationRepository } from './repositories/location.repository'

const repositories = [LocationRepository]

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfigService,
    }),
    TypeOrmModule.forFeature(repositories),
  ],
})
export class DatabaseModule {}
