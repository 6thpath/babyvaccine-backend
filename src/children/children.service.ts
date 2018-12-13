import { Injectable, Inject } from '@nestjs/common'
import { Model } from 'mongoose'

import { Children } from './interfaces/children.interface'
import { Create, Update, Delete } from './dto/children.dto'

@Injectable()
export class ChildrenService {
  constructor(@Inject('ChildrenModelToken') private readonly childrenModel: Model<Children>) {}

  async children(): Promise<any>{
    try {
      return await this.childrenModel.find({ isEnabled: true })
    } catch {
      return { code: 404, message: 'An error occurred!' }
    }
  }

  async create(data: Create): Promise<any>{
    const newChildren = new this.childrenModel(data)
    try {
      await newChildren.save()
      return { code: 200, message: 'Children created' }
    } catch {
      return { code: 404, message: 'An error occurred!' }
    }
  }

  async update(data: Update): Promise<any>{
    try {
      await this.childrenModel.updateOne({ _id: data.id }, data)
      return { code: 200, message: 'Children updated' }
    } catch {
      return { code: 404, message: 'An error occurred!' }
    }
  }

  async delete(data: Delete): Promise<any>{
    try {
      await this.childrenModel.updateOne({ _id: data.id }, { isEnabled: false })
      return { code: 200, message: 'Children deleted' }
    } catch {
      return { code: 404, message: 'An error occurred!' }
    }
  }
}
