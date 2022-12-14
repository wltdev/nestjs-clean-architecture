import { PartialType } from '@nestjs/mapped-types'
import { IsString, IsNotEmpty, IsDate, IsBoolean } from 'class-validator'

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  cityId: string

  @IsString()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  password: string

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
  heartTeam: string

  @IsString()
  foot: string

  @IsString()
  facebookId: string

  @IsBoolean()
  isCompleted: boolean
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
