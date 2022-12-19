import { Injectable } from '@nestjs/common'

import { User } from '@/_core/entities/user.entity'
import { GetUserUseCase } from '@/use-cases/users/getUserUseCase/GetUserUseCase'

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
