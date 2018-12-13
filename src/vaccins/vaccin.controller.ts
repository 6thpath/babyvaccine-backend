import { Get, Query, Controller } from '@nestjs/common'
import { VaccinService } from './vaccin.service'

import { Create, Update, Delete } from './dto/vaccin.dto'

@Controller('vaccin')
export class VaccinController {
  constructor(private readonly vaccinService: VaccinService) {}

  @Get('list')
  list(): any {
    return this.vaccinService.vaccins()
  }

  @Get('create')
  create(@Query() data: Create): any {
    return this.vaccinService.create(data)
  }

  @Get('update')
  update(@Query() data: Update): any {
    return this.vaccinService.update(data)
  }

  @Get('delete')
  delete(@Query() data: Delete): any {
    return this.vaccinService.delete(data)
  }
}
