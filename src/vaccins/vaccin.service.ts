import { Injectable, Inject } from '@nestjs/common'
import { Model } from 'mongoose'

import { Vaccin } from './interfaces/vaccin.interface'
import { Create, Update, Delete } from './dto/vaccin.dto'

@Injectable()
export class VaccinService {
  constructor(@Inject('VaccinModelToken') private readonly vaccinModel: Model<Vaccin>) {}

  async vaccins(): Promise<any>{
    try {
      return await this.vaccinModel.find({ isEnabled: true })
    } catch {
      return { code: 404, message: 'An error occurred!' }
    }
  }

  async create(data: Create): Promise<any>{
    const newAccount = new this.vaccinModel(data)
    try {
      await newAccount.save()
      return { code: 200, message: 'Vaccin created' }
    } catch {
      return { code: 404, message: 'An error occurred!' }
    }
  }

  async update(data: Update): Promise<any>{
    try {
      await this.vaccinModel.UpdateOne({ id: data.id }, data)
      return { code: 200, message: 'Vaccin updated' }
    } catch {
      return { code: 404, message: 'An error occurred!' }
    }
  }

  async delete(data: Delete): Promise<any>{
    try {
      await this.vaccinModel.UpdateOne({ id: data.id }, { isEnabled: false })
      return { code: 200, message: 'Vaccin updated' }
    } catch {
      return { code: 404, message: 'An error occurred!' }
    }
  }
}
