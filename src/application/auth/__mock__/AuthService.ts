import { loggedUserStub } from '@/use-cases/users/stubs/users.stub'

export const AuthService = jest.fn().mockReturnValue({
  validateUser: jest.fn().mockResolvedValue(loggedUserStub())
})
