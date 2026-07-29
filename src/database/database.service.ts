import type { Collection, Model, TableName } from "@nozbe/watermelondb"
import type { WriterInterface } from "@nozbe/watermelondb/Database/WorkQueue"

import { database } from "./database"

// Generic facade over the WatermelonDB `Database` instance. No tables exist yet,
// so this exposes only the primitives (get/write/batch/reset) that future
// domain services (e.g. MomentService) will build on once the schema is defined.
export class DatabaseService {
  private static instance: DatabaseService

  static getInstance(): DatabaseService {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService()
    }

    return DatabaseService.instance
  }

  getCollection<T extends Model>(tableName: TableName<T>): Collection<T> {
    return database.get<T>(tableName)
  }

  write<T>(work: (writer: WriterInterface) => Promise<T>, description?: string): Promise<T> {
    return database.write(work, description)
  }

  batch(...records: (Model | Model[] | null | undefined | false)[]): Promise<void> {
    return database.batch(...records)
  }

  async reset(): Promise<void> {
    await database.unsafeResetDatabase()
  }
}

export const databaseService = DatabaseService.getInstance()
