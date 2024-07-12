import * as z from "zod"
import { CompleteAccount, RelatedAccountModel, CompleteSession, RelatedSessionModel, CompleteWorkspaceUser, RelatedWorkspaceUserModel, CompleteVideo, RelatedVideoModel, CompleteComment, RelatedCommentModel, CompleteNotification, RelatedNotificationModel } from "./index"

export const UserModel = z.object({
  id: z.string(),
  name: z.string().nullish(),
  email: z.string().nullish(),
  emailVerified: z.date().nullish(),
  image: z.string().nullish(),
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  accounts: CompleteAccount[]
  sessions: CompleteSession[]
  workspaces: CompleteWorkspaceUser[]
  videos: CompleteVideo[]
  comments: CompleteComment[]
  notifications: CompleteNotification[]
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() => UserModel.extend({
  accounts: RelatedAccountModel.array(),
  sessions: RelatedSessionModel.array(),
  workspaces: RelatedWorkspaceUserModel.array(),
  videos: RelatedVideoModel.array(),
  comments: RelatedCommentModel.array(),
  notifications: RelatedNotificationModel.array(),
}))
