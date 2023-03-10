import { Test, TestingModule } from '@nestjs/testing'

import { City } from '@domain/entities/city.entity'

import { cityStub } from '../../../../../test/stubs/cities.stub'
import { GetAllCitiesUseCase } from './getallcities.usecase'

jest.mock('./getallcities.usecase.ts')

describe('getallcities.usecase', () => {
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

    beforeAll(async () => {
      cities = await getAllCitiesUseCase.execute()
    })

    it('should call execute function', () => {
      expect(getAllCitiesUseCase.execute).toHaveBeenCalled()
    })

    it('should return cities', () => {
      const items = cityStub()
      expect(cities).toEqual([items])
    })
  })
})
