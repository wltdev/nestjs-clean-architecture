import { Test, TestingModule } from '@nestjs/testing'

import { City } from '../../../@core/entities/city.entity'
import { cityStub } from '../stubs/cities.stub'
import { GetAllCitiesUseCase } from './GetAllCitiesUseCase'

jest.mock('./GetAllCitiesUseCase.ts')

describe('GetAllCitiesUseCase', () => {
  let getAllCitiesUseCase: GetAllCitiesUseCase

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [GetAllCitiesUseCase],
      exports: [GetAllCitiesUseCase]
    }).compile()

    getAllCitiesUseCase = moduleRef.get<GetAllCitiesUseCase>(GetAllCitiesUseCase)
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('should be defined', () => {
    expect(getAllCitiesUseCase).toBeDefined()
  })

  describe('execute', () => {
    let cities: City[]

    beforeEach(async () => {
      cities = await getAllCitiesUseCase.execute()
    })

    it('should call execute function', () => {
      expect(getAllCitiesUseCase.execute).toHaveBeenCalled()
    })

    it('should return cities', () => {
      const stub = cityStub()
      expect(cities).toEqual([stub])
    })
  })
})
