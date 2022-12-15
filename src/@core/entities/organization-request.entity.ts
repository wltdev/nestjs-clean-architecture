import { Organization } from './organization.entity'
import { User } from './user.entity'

export class OrganizationRequest {
  user: User
  organization: Organization
  status!: string
  readonly createdAt!: Date
  readonly updatedAt!: Date
}
