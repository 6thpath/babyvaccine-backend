import { Get, Param, Controller } from '@nestjs/common'
import { AppService } from '../services/app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    return this.appService.root()
  }

  @Get(':id')
  findOne(@Param() params) {
    console.log(params.id)
    return `This action returns a #${params.id} cat`
  }

  @Get('ab*cd')
  findAll() {
    return 'This route uses a wildcard'
  }
}
