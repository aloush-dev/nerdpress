import { AppContext } from "next/app";
import { TRPCError, inferAsyncReturnType } from "@trpc/server";
import { ContextType } from "~/types";
import { getSession } from "next-auth/client";

type NextMiddlewareResult = void | TRPCError;

export const adminMiddleware = async ({
  req,
  res,
}: AppContext["ctx"]): Promise<NextMiddlewareResult> => {
  // Get the session from the request
  const session = await getSession({ req });

  // Check if the user is authenticated and has admin role
  if (!session?.user?.admin) {
    // Return an error or redirect to a login page
    return new TRPCError({
      code: "UNAUTHORIZED",
      message: "You are not authorized to access this resource.",
    });
  }

  // Allow access
  return undefined;
};
