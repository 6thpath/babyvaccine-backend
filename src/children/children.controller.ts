import { Get, Query, Controller } from '@nestjs/common'
import { ChildrenService } from './children.service'

import { Create, Update, Delete } from './dto/children.dto'

@Controller('children')
export class ChildrenController {
  constructor(private readonly childrenService: ChildrenService) {}

  @Get('list')
  list(): any {
    return this.childrenService.children()
  }

  @Get('create')
  create(@Query() data: Create): any {
    return this.childrenService.create(data)
  }

  @Get('update')
  update(@Query() data: Update): any {
    return this.childrenService.update(data)
  }

  @Get('delete')
  delete(@Query() data: Delete): any {
    return this.childrenService.delete(data)
  }
}
