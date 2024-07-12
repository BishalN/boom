import * as z from "zod"
import { CompleteUser, RelatedUserModel, CompleteWorkspace, RelatedWorkspaceModel } from "./index"

export const WorkspaceUserModel = z.object({
  id: z.number().int(),
  role: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string(),
  workspaceId: z.number().int(),
})

export interface CompleteWorkspaceUser extends z.infer<typeof WorkspaceUserModel> {
  user: CompleteUser
  workspace: CompleteWorkspace
}

/**
 * RelatedWorkspaceUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedWorkspaceUserModel: z.ZodSchema<CompleteWorkspaceUser> = z.lazy(() => WorkspaceUserModel.extend({
  user: RelatedUserModel,
  workspace: RelatedWorkspaceModel,
}))
