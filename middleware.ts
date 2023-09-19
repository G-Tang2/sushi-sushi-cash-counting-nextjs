import withAuth, { NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const routeMatchesRoles = (req: NextRequestWithAuth) => {
  const adminRouteMatchesAdminRole =
    req.nextUrl.pathname.startsWith("/admin") &&
    req.nextauth.token?.role.toLowerCase() === "admin";
  const userRouteMatchesUserRole =
    req.nextUrl.pathname.startsWith("/user") &&
    req.nextauth.token?.role.toLowerCase() === "user";
  return adminRouteMatchesAdminRole || userRouteMatchesUserRole;
};
export default withAuth(
  function middleware(req) {
    console.log(req);
    if (!routeMatchesRoles(req)) {
      return NextResponse.rewrite(new URL("/page-not-found", req.url));
    }
  },
  {
    callbacks: {
      // this needs to be true for the middleware function to execute
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: "/",
      error: "/not-found",
    },
  }
);

export const config = {
  matcher: ["/admin/:path*", "/user/:path*"],
};
