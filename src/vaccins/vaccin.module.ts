import { Module } from '@nestjs/common'

import { DatabaseModule } from '../database/database.module'
import { VaccinController } from './vaccin.controller'
import { VaccinService } from './vaccin.service'
import { vaccinProvider } from './vaccin.provider'

@Module({
  imports: [DatabaseModule],
  controllers: [VaccinController],
  providers: [VaccinService, ...vaccinProvider],
})

export class VaccinModule {}
