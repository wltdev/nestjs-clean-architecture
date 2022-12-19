import { Strategy } from 'passport-local'

import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'

import { GetUserUseCase } from '@/use-cases/users/getUserUseCase/GetUserUseCase'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private GetUserUseCase: GetUserUseCase) {
    super()
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password)
    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }
}
