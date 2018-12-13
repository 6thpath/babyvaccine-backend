import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import { UserModule } from './users/user.module'
import { VaccinModule } from './vaccins/vaccin.module'
import { ChildrenModule } from './children/children.module'
import { IaModule } from './ia/ia.module'
import { InjectrModule } from './injectr/injectr.module'

@Module({
  imports: [
    UserModule,
    VaccinModule,
    ChildrenModule,
    IaModule,
    InjectrModule
  ],
  controllers: [AppController],
  providers: [AppService]
})

export class AppModule {}
