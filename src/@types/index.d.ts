import { User } from '@core/entities/user.entity'

declare module 'express-serve-static-core' {
  interface Request {
    user: User
  }
}

declare module 'module-alias/register' {}
