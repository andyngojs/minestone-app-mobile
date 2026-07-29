import { Model } from "@nozbe/watermelondb"
import { date, field, readonly } from "@nozbe/watermelondb/decorators"

import { TABLE_NAMES } from "../table-names"

export class Moment extends Model {
  static table = TABLE_NAMES.MOMENTS

  @field("content") content!: string
  @field("tag") tag!: string
  @field("image_uri") imageUri!: string | null
  @readonly @date("created_at") createdAt!: Date
}
