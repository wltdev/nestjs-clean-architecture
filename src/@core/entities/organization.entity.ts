import { City } from './city.entity'

export class Organization {
  name: string
  image: string
  latitude: string
  longitude: string
  street: string
  zipcode: string
  number: string
  neighborhood: string
  city: City
  match_day: string
  start_hour: string
  end_hour: string
  duration: string
  monthy_price: number
  players_per_team: number

  readonly createdAt: Date
  readonly updatedAt: Date
}
