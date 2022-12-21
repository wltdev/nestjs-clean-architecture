import { cityStub } from '../../../../../../test/stubs/cities.stub'

export const GetAllCitiesUseCase = jest.fn().mockReturnValue({
  execute: jest.fn().mockResolvedValue([cityStub()])
})
