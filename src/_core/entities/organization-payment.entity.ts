import { Organization } from './organization.entity'
import { User } from './user.entity'

export class OrganizationPayment {
  user: User
  organization: Organization
  status: string
  value: number
  description: string
  category: string
  type: string
}
