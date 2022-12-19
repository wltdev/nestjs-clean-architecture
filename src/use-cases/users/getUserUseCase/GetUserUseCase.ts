import { Injectable } from '@nestjs/common'

import { IDatabaseService } from '@core/abstracts/database-service.abstract'

import { User } from '@/_core/entities/user.entity'

@Injectable()
export class GetUserUseCase {
  constructor(private databaseService: IDatabaseService) {}

  async execute(params: any): Promise<User | unknown> {
    const user = await this.databaseService.users.findOne(params)

    return user
  }
}
