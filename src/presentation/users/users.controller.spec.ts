import { Test, TestingModule } from '@nestjs/testing'

import { User } from '@domain/entities/user.entity'

import { GetUserUseCase } from '@application/usecases/users/getuser/getuser.usecase'

import { userStub } from '../../../test/stubs/users.stub'
import { UsersController } from './users.controller'

jest.mock('@application/usecases/users/getuser/getuser.usecase.ts')

describe('UsersController', () => {
  let controller: UsersController
  let getUserUseCase: GetUserUseCase

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [GetUserUseCase]
    }).compile()

    controller = moduleRef.get<UsersController>(UsersController)
    getUserUseCase = moduleRef.get<GetUserUseCase>(GetUserUseCase)
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('controller should be defined', () => {
    expect(controller).toBeDefined()
  })

  it('getUserUseCase should be defined', () => {
    expect(getUserUseCase).toBeDefined()
  })

  describe('GetOne', () => {
    let user: User

    beforeAll(async () => {
      user = await controller.getOne(userStub().email)
    })

    it('should be able to call execute function', () => {
      expect(getUserUseCase.execute).toHaveBeenCalled()
    })

    it('should return a user', () => {
      expect(user).toHaveProperty('name')
    })
  })
})
