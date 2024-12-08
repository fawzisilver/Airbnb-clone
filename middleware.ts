import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/", "/properties(.*)"]);
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
	const isAdminUser = (await auth()).userId === process.env.ADMIN_USER_ID;

	console.log((await auth()).userId);

	// if in adminroute and not an admin
	if (isAdminRoute(req) && !isAdminUser) {
		return NextResponse.redirect(new URL("/", req.url));
	}
	if (!isPublicRoute(req)) {
		await auth.protect();
	}
});

export const config = {
	matcher: [
		"/((?!.*\\..*|_next|_static|favicon.ico).*)", // Updated matcher
		"/(api|trpc)(.*)",
	],
};
