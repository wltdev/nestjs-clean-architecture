import { Organization } from './organization.entity'
import { User } from './user.entity'

export class OrganizationUser {
  user: User
  organization: Organization
  status: string
  permision: string
  number: string
  position: string
}
