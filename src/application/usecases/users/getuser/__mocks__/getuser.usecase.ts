import { userStub } from '../../../../../../test/stubs/users.stub'

export const GetUserUseCase = jest.fn().mockReturnValue({
  execute: jest.fn().mockResolvedValue(userStub())
})
