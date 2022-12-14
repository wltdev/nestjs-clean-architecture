import { Province } from './province.entity'

export class City {
  public name: string
  public province: Province
  public readonly createdAt: Date
  public readonly updatedAt: Date
}
