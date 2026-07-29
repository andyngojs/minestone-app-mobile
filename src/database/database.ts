import { Database } from "@nozbe/watermelondb"
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite"

import { Moment } from "./models"
import { schema } from "./schema"

const adapter = new SQLiteAdapter({
  schema,
  jsi: true,
  onSetUpError: (error) => {
    console.error("WatermelonDB failed to set up", error)
  },
})

export const database = new Database({
  adapter,
  modelClasses: [Moment],
})
