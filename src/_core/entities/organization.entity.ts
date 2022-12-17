import { City } from './city.entity'

export class Organization {
  name: string
  image: string
  // latitude: string
  // longitude: string
  // street: string
  // zipcode: string
  // number: string
  // neighborhood: string
  city: City
  match_day: string
  start_hour: string
  end_hour: string
  duration: number
  monthy_price: number
  players_per_team: number
}
