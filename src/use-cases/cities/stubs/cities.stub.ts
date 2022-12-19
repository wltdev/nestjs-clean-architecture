import { faker } from '@faker-js/faker'

import { CreateCityDto } from '@core/dtos/city.dto'
import { City, Province } from '@core/entities'

export const provinceStub = (): Province => ({
  name: 'Minas Gerais',
  initials: 'MG'
})

export const cityStub = (): City => ({
  name: 'Teófilo Otoni',
  province: provinceStub()
})

export const createCityStub = (): CreateCityDto => {
  return {
    name: faker.address.cityName(),
    province: faker.datatype.uuid()
  }
}
