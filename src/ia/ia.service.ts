import { Injectable, Inject } from '@nestjs/common'
import { Model } from 'mongoose'

import { Ia } from './interfaces/ia.interface'
import { Create, Update, Delete } from './dto/ia.dto'

@Injectable()
export class IaService {
  constructor(@Inject('IaModelToken') private readonly iaModel: Model<Ia>) {}

  async ias(): Promise<any>{
    try {
      return await this.iaModel.find({ isEnabled: true })
    } catch {
      return { code: 404, message: 'An error occurred!' }
    }
  }

  async create(data: Create): Promise<any>{
    const newIa = new this.iaModel(data)
    try {
      await newIa.save()
      return { code: 200, message: 'Inject address created' }
    } catch {
      return { code: 404, message: 'An error occurred!' }
    }
  }

  async update(data: Update): Promise<any>{
    try {
      await this.iaModel.updateOne({ _id: data.id }, data)
      return { code: 200, message: 'Inject address updated' }
    } catch {
      return { code: 404, message: 'An error occurred!' }
    }
  }

  async delete(data: Delete): Promise<any>{
    try {
      await this.iaModel.updateOne({ _id: data.id }, { isEnabled: false })
      return { code: 200, message: 'Inject address deleted' }
    } catch {
      return { code: 404, message: 'An error occurred!' }
    }
  }
}
