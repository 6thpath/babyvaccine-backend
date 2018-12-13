import { Module } from '@nestjs/common'

import { DatabaseModule } from '../database/database.module'
import { InjectrController } from './injectr.controller'
import { InjectrService } from './injectr.service'
import { injectrProvider } from './injectr.provider'

@Module({
  imports: [DatabaseModule],
  controllers: [InjectrController],
  providers: [InjectrService, ...injectrProvider],
})

export class InjectrModule {}
