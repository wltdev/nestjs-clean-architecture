import { Injectable } from '@nestjs/common'

import { CreateCityDto, UpdateCityDto } from '../@core/dtos/city.dto'

@Injectable()
export class CitiesService {
  create(createCityDto: CreateCityDto) {
    return 'This action adds a new city'
  }

  findAll() {
    return `This action returns all cities`
  }

  findOne(id: number) {
    return `This action returns a #${id} city`
  }

  update(id: number, updateCityDto: UpdateCityDto) {
    return `This action updates a #${id} city`
  }

  remove(id: number) {
    return `This action removes a #${id} city`
  }
}
