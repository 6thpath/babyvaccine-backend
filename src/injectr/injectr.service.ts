import { Injectable, Inject } from '@nestjs/common'
import { Model } from 'mongoose'

import { Injectr } from './interfaces/injectr.interface'
import { Create, Update, Delete } from './dto/injectr.dto'

@Injectable()
export class InjectrService {
  constructor(@Inject('InjectrModelToken') private readonly injectrModel: Model<Injectr>) {}

  async injectrs(): Promise<any>{
    try {
      return await this.injectrModel.find({ isEnabled: true })
    } catch {
      return { code: 404, message: 'An error occurred!' }
    }
  }

  async create(data: Create): Promise<any>{
    const newInjectr = new this.injectrModel(data)
    try {
      await newInjectr.save()
      return { code: 200, message: 'Inject record created' }
    } catch {
      return { code: 404, message: 'An error occurred!' }
    }
  }

  async update(data: Update): Promise<any>{
    try {
      await this.injectrModel.updateOne({ _id: data.id }, data)
      return { code: 200, message: 'Inject record updated' }
    } catch {
      return { code: 404, message: 'An error occurred!' }
    }
  }

  async delete(data: Delete): Promise<any>{
    try {
      await this.injectrModel.updateOne({ _id: data.id }, { isEnabled: false })
      return { code: 200, message: 'Inject record deleted' }
    } catch {
      return { code: 404, message: 'An error occurred!' }
    }
  }
}
