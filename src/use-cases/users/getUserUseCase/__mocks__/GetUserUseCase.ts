import { userStub } from '../../stubs/users.stub'

export const GetUserUseCase = jest.fn().mockReturnValue({
  execute: jest.fn().mockResolvedValue(userStub())
})
