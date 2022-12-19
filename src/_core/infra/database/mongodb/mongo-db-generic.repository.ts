import { Model } from 'mongoose'

import { IGenericRepository } from '@core/abstracts/generic-repository.abstract'

export class MongoDBGenericRepository<T> implements IGenericRepository<T> {
  constructor(private repository: Model<T>, private populateOnFind: string[] = []) {}

  getAll(): Promise<T[]> {
    return this.repository.find().populate(this.populateOnFind).exec()
  }

  findById(id: string): Promise<T | unknown> {
    return this.repository.findById(id).populate(this.populateOnFind).exec()
  }

  async findOne(params: any): Promise<T> {
    const doc = await this.repository.findOne(params) //.populate(this.populateOnFind)
    // const populate = await doc.populate(this.populateOnFind)
    return doc
  }

  create(item: T): Promise<T> {
    return this.repository.create(item)
  }

  update(id: string, item: T): Promise<T> {
    return this.repository
      .findOneAndUpdate(
        {
          _id: id
        },
        {
          $set: item
        },
        {
          runValidators: true,
          context: 'query',
          new: true
        }
      )
      .exec()
  }
}
