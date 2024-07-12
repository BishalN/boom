import * as z from "zod"
import { CompleteUser, RelatedUserModel, CompleteVideo, RelatedVideoModel } from "./index"

export const CommentModel = z.object({
  id: z.number().int(),
  text: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string(),
  videoId: z.number().int(),
})

export interface CompleteComment extends z.infer<typeof CommentModel> {
  user: CompleteUser
  video: CompleteVideo
}

/**
 * RelatedCommentModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCommentModel: z.ZodSchema<CompleteComment> = z.lazy(() => CommentModel.extend({
  user: RelatedUserModel,
  video: RelatedVideoModel,
}))
