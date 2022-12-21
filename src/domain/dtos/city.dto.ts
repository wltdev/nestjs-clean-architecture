import { IsString, IsNotEmpty } from 'class-validator'

import { PartialType } from '@nestjs/mapped-types'

export class CreateCityDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  province: string
}

export class UpdateCityDto extends PartialType(CreateCityDto) {}
