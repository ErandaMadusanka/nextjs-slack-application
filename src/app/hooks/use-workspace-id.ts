import { useParams } from "next/navigation";

import { Id } from "../../../convex/_generated/dataModel";

export const useWorkspaceId = () => {
   const params = useParams();

   // directory name = [workspaceId]
   return params.workspaceId as Id<"workspaces">;
};
