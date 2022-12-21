import mongoose, { Document } from 'mongoose'

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { Organization } from './organization.schema'
import { User } from './user.schema'

@Schema({ timestamps: true, collection: 'organization_users' })
export class OrganizationUser {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Organization', required: true })
  organization: Organization

  @Prop({ default: 'pending_player' })
  status: string

  @Prop({ default: 'player' })
  permission: string

  @Prop()
  number: number

  @Prop()
  position: string
}

export type OrganizationUserDocument = OrganizationUser & Document

export const OrganizationUserSchema = SchemaFactory.createForClass(OrganizationUser)
