import { Injectable } from '@nestjs/common'

import { User } from '@domain/entities/user.entity'

import { GetUserUseCase } from '@application/usecases/users/getuser/getuser.usecase'

@Injectable()
export class AuthService {
  constructor(private getUserUseCase: GetUserUseCase) {}

  async validateUser(email: string, userPassword: string): Promise<User> {
    const user = await this.getUserUseCase.execute({ email })

    if (user && !user.facebook_id) {
      const isValidPassword = await user.isValidPassword(userPassword)
      return isValidPassword && user
    }

    return user
  }
}
