import * as z from "zod"
import { CompleteWorkspaceUser, RelatedWorkspaceUserModel, CompleteVideo, RelatedVideoModel } from "./index"

export const WorkspaceModel = z.object({
  id: z.number().int(),
  name: z.string(),
  inviteEmails: z.string().array(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteWorkspace extends z.infer<typeof WorkspaceModel> {
  users: CompleteWorkspaceUser[]
  videos: CompleteVideo[]
}

/**
 * RelatedWorkspaceModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedWorkspaceModel: z.ZodSchema<CompleteWorkspace> = z.lazy(() => WorkspaceModel.extend({
  users: RelatedWorkspaceUserModel.array(),
  videos: RelatedVideoModel.array(),
}))
