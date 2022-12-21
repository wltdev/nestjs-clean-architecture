import { hash } from 'bcrypt'
import { Model, Types } from 'mongoose'
import { Seeder } from 'nestjs-seeder'

import { faker } from '@faker-js/faker'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { User } from '../schemas/user.schema'

@Injectable()
export class UsersSeeder implements Seeder {
  constructor(@InjectModel(User.name) private readonly user: Model<User>) {}

  async seed(): Promise<any> {
    const adminId = new Types.ObjectId('639e1767f77b8fd1ebbb58a9')
    const password = await hash('123456', 10)

    const users: User[] = []

    for (let i = 0; i < 9; i++) {
      const user = {
        name: faker.name.fullName(),
        email: faker.internet.email(),
        photo: faker.image.avatar(),
        password
      } as User
      users.push(user)
    }

    // Insert into the database.
    return this.user.insertMany([
      {
        _id: adminId,
        name: 'Admin Test',
        email: 'admin@example.com',
        photo: faker.image.avatar(),
        password
      },
      ...users
    ])
  }

  async drop(): Promise<any> {
    return this.user.deleteMany({})
  }
}
