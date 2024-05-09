
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

const protectedRoutes = [
  '/checkout',
];

const { auth } = NextAuth(authConfig)


// import { auth } from "./auth.config"

 
export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;
  
  const isProtectedRoute = protectedRoutes.includes(nextUrl.pathname)
  // req.auth

  if(!isLoggedIn && isProtectedRoute) {
    return Response.redirect(new URL("/login?redirect=checkout", nextUrl));
  }

  // return null
})
 
// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/checkout'],
}