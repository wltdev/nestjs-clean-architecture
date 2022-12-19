import { Test, TestingModule } from '@nestjs/testing'

import { User } from '@core/entities/user.entity'

import { userStub } from '../stubs/users.stub'
import { GetUserUseCase } from './GetUserUseCase'

jest.mock('./GetUserUseCase.ts')

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
