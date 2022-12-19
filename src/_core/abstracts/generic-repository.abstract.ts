export abstract class IGenericRepository<T> {
  abstract getAll(): Promise<T[]>

  abstract findById(id: string): Promise<T | unknown>

  abstract findOne(params: any): Promise<T>

  abstract create(item: T): Promise<T>

  abstract update(id: string, item: T): Promise<T>

  abstract delete?(id: string): Promise<void>
}
