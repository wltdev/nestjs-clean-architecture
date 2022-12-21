import { loggedUserStub } from '../../../../test/stubs/users.stub'

export const AuthService = jest.fn().mockReturnValue({
  validateUser: jest.fn().mockResolvedValue(loggedUserStub())
})
