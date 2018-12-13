import * as env from 'dotenv'
env.config()
import { NestFactory, FastifyAdapter } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter())
  console.log(process.env.PORT)
  await app.listen(process.env.PORT || 3000, '0.0.0.0')
}

bootstrap()
