import { Get, Query, Controller } from '@nestjs/common'
import { IaService } from './ia.service'

import { Create, Update, Delete } from './dto/ia.dto'

@Controller('ia')
export class IaController {
  constructor(private readonly iaService: IaService) {}

  @Get('list')
  list(): any {
    return this.iaService.ias()
  }

  @Get('create')
  create(@Query() data: Create): any {
    return this.iaService.create(data)
  }

  @Get('update')
  update(@Query() data: Update): any {
    return this.iaService.update(data)
  }

  @Get('delete')
  delete(@Query() data: Delete): any {
    return this.iaService.delete(data)
  }
}
