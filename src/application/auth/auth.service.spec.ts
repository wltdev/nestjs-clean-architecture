import { Test, TestingModule } from '@nestjs/testing'

import { User } from '@core/entities/user.entity'

import { GetUserUseCase } from '@/use-cases/users/getUserUseCase/GetUserUseCase'
import { loggedUserStub, userStub } from '@/use-cases/users/stubs/users.stub'

import { AuthService } from './auth.service'

jest.mock('@/use-cases/users/getUserUseCase/GetUserUseCase.ts')

describe('AuthService', () => {
  let service: AuthService
  let getUserUseCase: GetUserUseCase

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [GetUserUseCase, AuthService],
      exports: [GetUserUseCase]
    }).compile()

    service = moduleRef.get<AuthService>(AuthService)
    getUserUseCase = moduleRef.get<GetUserUseCase>(GetUserUseCase)
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('service should be defined', () => {
    expect(service).toBeDefined()
  })

  it('getUserUseCase should be defined', () => {
    expect(getUserUseCase).toBeDefined()
  })

  describe('validateUser', () => {
    let user: User

    beforeAll(async () => {
      jest.spyOn(service, 'validateUser').mockImplementation(async () => loggedUserStub())

      user = await service.validateUser('test@test.com', '123456')
    })

    it('should be able to call validateUser', () => {
      expect(service.validateUser).toHaveBeenCalled()
    })

    it('should return a user', () => {
      expect(user).toHaveProperty('name')
    })
  })
})
