import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
// import { Author, Genre } from './';

export type ProvinceDocument = Province & Document

@Schema()
export class Province {
  @Prop({ required: true })
  name: string

  @Prop({ required: false })
  initials: string
}

export const ProvinceSchema = SchemaFactory.createForClass(Province)
