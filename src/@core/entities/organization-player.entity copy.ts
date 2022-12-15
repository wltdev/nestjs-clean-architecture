import { Organization } from './organization.entity'
import { User } from './user.entity'

export class OrganizationPlayer {
  user: User
  organization: Organization
  status: string
  admin: boolean
  number: string
  position: string
  readonly createdAt: Date
  readonly updatedAt: Date
}
