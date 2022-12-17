import { hash, compare } from 'bcrypt'
import mongoose, { Document } from 'mongoose'

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { City } from './city.schema'

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string

  @Prop({ required: true })
  email: string

  @Prop({ minlength: 6 })
  password: string

  @Prop()
  photo: string

  @Prop()
  position: string

  @Prop()
  birthday: Date

  @Prop()
  height: string

  @Prop()
  weight: string

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'City', required: false })
  city: City

  @Prop()
  heart_team: string

  @Prop()
  preferred_foot: string

  @Prop()
  facebook_id: string

  @Prop()
  is_completed: boolean
}

type UserMethods = {
  isValidPassword?: (password: string) => Promise<boolean>
}

export type UserDocument = User & Document & UserMethods

export const UserSchema = SchemaFactory.createForClass(User)

UserSchema.pre('save', async function (next) {
  this.password = await hash(this.password, 10)

  next()
})

UserSchema.pre('findOneAndUpdate', async function (next) {
  const payload = this.getUpdate()['$set']

  if (payload.password && payload.password.length >= 6) {
    payload.password = await hash(payload.password, 10)
  }

  next()
})

UserSchema.methods.isValidPassword = function (candidatePassword: string) {
  return compare(candidatePassword, this.password)
}
