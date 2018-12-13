import { Module } from '@nestjs/common'

import { DatabaseModule } from '../database/database.module'
import { IaController } from './ia.controller'
import { IaService } from './ia.service'
import { iaProvider } from './ia.provider'

@Module({
  imports: [DatabaseModule],
  controllers: [IaController],
  providers: [IaService, ...iaProvider],
})

export class IaModule {}
