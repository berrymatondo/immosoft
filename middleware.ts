import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    //console.log(req.nextauth.token);
    console.log("LOG", req.nextauth);

    if (
      req.nextUrl.pathname === "/user" &&
      req.nextauth.token?.role !== "ADMIN" &&
      req.nextauth.token?.role !== "USER"
    ) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    if (
      req.nextUrl.pathname === "/register" &&
      req.nextauth.token?.role !== "ADMIN"
    ) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    /*     if (req.nextauth.token?.role !== "ADMIN") {
      if(req.nextUrl.pathname === "/register")
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    } */
  },
  {
    callbacks: {
      // authorized: ({ token }) => token?.role === "ADMIN",
      authorized: (params) => {
        let { token } = params;

        return !!token;
      },
    },
  }
);

export const config = { matcher: ["/register", "/user", "/clients/newclient"] };
