import { faker } from '@faker-js/faker'

import { CreateUserDto } from '@/_core/dtos/user.dto'
import { User } from '@/_core/entities/user.entity'
import { cityStub } from '@/use-cases/cities/stubs/cities.stub'

export const userStub = (): User => ({
  name: faker.name.fullName(),
  email: faker.internet.email(),
  birthday: faker.date.birthdate(),
  city: cityStub(),
  preferred_foot: 'left',
  heart_team: 'Cruzeiro',
  height: '170',
  is_completed: true,
  photo: faker.internet.avatar(),
  position: 'midfielder',
  weight: '80'
})

export const createUserStub = (): CreateUserDto => {
  return userStub()
}
