import { Test, TestingModule } from '@nestjs/testing'

import { User } from '@domain/entities/user.entity'

import { userStub } from '../../../../../test/stubs/users.stub'
import { GetUserUseCase } from './getuser.usecase'

jest.mock('./getuser.usecase.ts')

describe('GetUserUseCase', () => {
  let getUserUseCase: GetUserUseCase

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [GetUserUseCase],
      exports: [GetUserUseCase]
    }).compile()

    getUserUseCase = moduleRef.get<GetUserUseCase>(GetUserUseCase)
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('should be defined', () => {
    expect(getUserUseCase).toBeDefined()
  })

  describe('execute', () => {
    let user: User | unknown

    beforeAll(async () => {
      user = await getUserUseCase.execute(userStub().email)
    })

    it('should be able to call execute function', () => {
      expect(getUserUseCase.execute).toHaveBeenCalled()
    })

    it('should return a user', () => {
      expect(user).toHaveProperty('name')
    })
  })
})
