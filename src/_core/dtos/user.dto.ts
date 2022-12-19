import { IsString, IsNotEmpty, IsDate, IsBoolean } from 'class-validator'

import { PartialType } from '@nestjs/mapped-types'

import { City } from '../entities'

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  city: string | City

  @IsString()
  @IsNotEmpty()
  email: string

  @IsString()
  password?: string

  // @IsString()
  photo: string

  @IsString()
  position: string

  @IsDate()
  birthday: Date

  @IsString()
  height: string

  @IsString()
  weight: string

  @IsString()
  heart_team: string

  @IsString()
  preferred_foot: string

  @IsString()
  facebook_id?: string

  @IsBoolean()
  is_completed: boolean
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
