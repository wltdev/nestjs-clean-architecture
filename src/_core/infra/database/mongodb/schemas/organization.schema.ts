import mongoose, { Document } from 'mongoose'

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { City } from './city.schema'

@Schema({ timestamps: true })
export class Organization {
  @Prop({ required: true })
  name: string

  @Prop()
  image: string

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'City', required: true })
  city: City

  @Prop()
  match_day: string

  @Prop()
  start_hour: string

  @Prop()
  end_hour: string

  @Prop()
  duration: number

  @Prop()
  monthy_price: number

  @Prop()
  players_per_team: number
}

export type OrganizationDocument = Organization & Document

export const OrganizationSchema = SchemaFactory.createForClass(Organization)
