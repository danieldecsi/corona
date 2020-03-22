import { Injectable } from '@nestjs/common'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'

import { getEnvironmentVariable } from '../../utils/get-environment-variable.util'

@Injectable()
export class DatabaseConfigService {
  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: getEnvironmentVariable('DB_HOST'),
      port: parseInt(getEnvironmentVariable('DB_PORT'), 10),
      username: getEnvironmentVariable('DB_USER'),
      password: getEnvironmentVariable('DB_PASSWORD', ''),
      database: getEnvironmentVariable('DB_DATABASE'),
      schema: getEnvironmentVariable('DB_SCHEMA', ''),
      entities: [`${__dirname}/../entities/**/*.entity.{ts,js}`],
      synchronize: false,
      logging: getEnvironmentVariable('DB_LOGGING', 'false') === 'true',
    }
  }
}
