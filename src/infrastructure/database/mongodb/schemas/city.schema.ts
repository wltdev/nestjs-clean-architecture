import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'

import { Province } from './province.schema'

export type CityDocument = City & Document

@Schema({ timestamps: true })
export class City {
  @Prop({ required: true })
  name: string

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Province', required: true })
  province: Province
}

export const CitySchema = SchemaFactory.createForClass(City)
