import * as z from "zod"
import { CompleteUser, RelatedUserModel, CompleteWorkspace, RelatedWorkspaceModel, CompleteComment, RelatedCommentModel, CompleteNotification, RelatedNotificationModel } from "./index"

export const VideoModel = z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string().nullish(),
  url: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string(),
  workspaceId: z.number().int(),
})

export interface CompleteVideo extends z.infer<typeof VideoModel> {
  user: CompleteUser
  workspace: CompleteWorkspace
  comments: CompleteComment[]
  notifications: CompleteNotification[]
}

/**
 * RelatedVideoModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedVideoModel: z.ZodSchema<CompleteVideo> = z.lazy(() => VideoModel.extend({
  user: RelatedUserModel,
  workspace: RelatedWorkspaceModel,
  comments: RelatedCommentModel.array(),
  notifications: RelatedNotificationModel.array(),
}))
