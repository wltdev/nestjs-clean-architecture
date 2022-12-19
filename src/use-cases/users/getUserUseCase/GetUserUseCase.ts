import { Injectable } from '@nestjs/common'

import { IDatabaseService } from '@core/abstracts/database-service.abstract'
import { User } from '@core/entities/user.entity'

@Injectable()
export class GetUserUseCase {
  constructor(private databaseService: IDatabaseService) {}

  async execute(params: any): Promise<User> {
    return this.databaseService.users.findOne(params)
  }
}
