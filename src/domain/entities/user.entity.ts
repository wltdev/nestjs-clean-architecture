import { City } from './city.entity'

export class User {
  name: string
  email: string
  password?: string
  photo: string
  position: string
  birthday: Date
  height: string
  weight: string
  city: City
  heart_team: string
  preferred_foot: string
  facebook_id?: string
  is_completed: boolean

  isValidPassword?: (password: string) => Promise<boolean>
}
