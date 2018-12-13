import { Get, Query, Controller } from '@nestjs/common'
import { InjectrService } from './injectr.service'

import { Create, Update, Delete } from './dto/injectr.dto'

@Controller('ir')
export class InjectrController {
  constructor(private readonly injectrService: InjectrService) {}

  @Get('list')
  list(): any {
    return this.injectrService.injectrs()
  }

  @Get('create')
  create(@Query() data: Create): any {
    return this.injectrService.create(data)
  }

  @Get('update')
  update(@Query() data: Update): any {
    return this.injectrService.update(data)
  }

  @Get('delete')
  delete(@Query() data: Delete): any {
    return this.injectrService.delete(data)
  }
}
