import { Module } from '@nestjs/common'

import { DatabaseModule } from '../database/database.module'
import { ChildrenController } from './children.controller'
import { ChildrenService } from './children.service'
import { childrenProvider } from './children.provider'

@Module({
  imports: [DatabaseModule],
  controllers: [ChildrenController],
  providers: [ChildrenService, ...childrenProvider],
})

export class ChildrenModule {}
