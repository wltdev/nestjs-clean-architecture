import { Injectable } from '@nestjs/common'

import { IDatabaseService } from '@domain/abstracts/database-service.abstract'
import { User } from '@domain/entities/user.entity'

@Injectable()
export class GetUserUseCase {
  constructor(private databaseService: IDatabaseService) {}

  async execute(params: any): Promise<User> {
    return this.databaseService.users.findOne(params)
  }
}
