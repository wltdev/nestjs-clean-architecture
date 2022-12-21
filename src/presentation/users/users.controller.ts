import { Controller, Get, Param } from '@nestjs/common'

import { GetUserUseCase } from '@application/usecases/users/getuser/getuser.usecase'

@Controller('users')
export class UsersController {
  constructor(private getUserByEmailUseCase: GetUserUseCase) {}

  @Get(':email')
  async getOne(@Param('email') email: string) {
    return this.getUserByEmailUseCase.execute({ email })
  }
}
