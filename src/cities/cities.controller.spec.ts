import { Test, TestingModule } from '@nestjs/testing'

import { City } from '@core/entities/city.entity'

import { GetAllCitiesUseCase } from '../use-cases/cities/getAllCitiesUseCase/GetAllCitiesUseCase'
import { cityStub } from '../use-cases/cities/stubs/cities.stub'
import { CitiesController } from './cities.controller'

jest.mock('../use-cases/cities/getAllCitiesUseCase/GetAllCitiesUseCase.ts')

describe('CitiesController', () => {
  let controller: CitiesController
  let getAllCitiesUseCase: GetAllCitiesUseCase

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [CitiesController],
      providers: [GetAllCitiesUseCase]
    }).compile()

    controller = moduleRef.get<CitiesController>(CitiesController)
    getAllCitiesUseCase = moduleRef.get<GetAllCitiesUseCase>(GetAllCitiesUseCase)
  })

  it('controller should be defined', () => {
    expect(controller).toBeDefined()
  })

  it('getAllCitiesUseCase should be defined', () => {
    expect(getAllCitiesUseCase).toBeDefined()
  })

  describe('getAll', () => {
    let cities: City[]

    beforeAll(async () => {
      cities = await controller.getAll()
    })

    it('should be able to call execute function', () => {
      expect(getAllCitiesUseCase.execute).toHaveBeenCalled()
    })

    it('should return cities', () => {
      expect(cities).toEqual([cityStub()])
    })
  })
})
