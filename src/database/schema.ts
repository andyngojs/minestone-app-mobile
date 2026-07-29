import { appSchema, tableSchema } from "@nozbe/watermelondb"

import { TABLE_NAMES } from "./table-names"

const SCHEMA_VERSION = 1

export const schema = appSchema({
  version: SCHEMA_VERSION,
  tables: [
    tableSchema({
      name: TABLE_NAMES.MOMENTS,
      columns: [
        { name: "content", type: "string" },
        { name: "tag", type: "string" },
        { name: "image_uri", type: "string", isOptional: true },
        { name: "created_at", type: "number" },
      ],
    }),
  ],
})
