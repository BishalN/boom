import * as z from "zod"
import { CompleteUser, RelatedUserModel, CompleteVideo, RelatedVideoModel } from "./index"

export const NotificationModel = z.object({
  id: z.number().int(),
  text: z.string(),
  createdAt: z.date(),
  read: z.boolean(),
  userId: z.string(),
  videoId: z.number().int().nullish(),
})

export interface CompleteNotification extends z.infer<typeof NotificationModel> {
  user: CompleteUser
  video?: CompleteVideo | null
}

/**
 * RelatedNotificationModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedNotificationModel: z.ZodSchema<CompleteNotification> = z.lazy(() => NotificationModel.extend({
  user: RelatedUserModel,
  video: RelatedVideoModel.nullish(),
}))
