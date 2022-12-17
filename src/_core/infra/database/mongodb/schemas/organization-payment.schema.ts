import mongoose, { Document } from 'mongoose'

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { Organization } from './organization.schema'
import { User } from './user.schema'

@Schema({ timestamps: true, collection: 'organization_payments' })
export class OrganizationPayment {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Organization', required: true })
  organization: Organization

  @Prop({ default: 'paid' })
  status: string

  @Prop()
  value: number

  @Prop()
  description: string

  @Prop()
  category: string

  @Prop()
  type: string
}

export type OrganizationPaymentDocument = OrganizationPayment & Document

export const OrganizationPaymentSchema = SchemaFactory.createForClass(OrganizationPayment)
