import { cityStub } from '@/use-cases/cities/stubs/cities.stub'

export const GetAllCitiesUseCase = jest.fn().mockReturnValue({
  execute: jest.fn().mockResolvedValue([cityStub()])
})
