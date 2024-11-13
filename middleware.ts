import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
	"/bookings(.*)",
	"/checkout(.*)",
	"/favorites(.*)",
	"/profile(.*)",
	"/rentals(.*)",
	"/reviews(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
	console.log("Middleware hit:", req.url);
	if (isProtectedRoute(req)) {
		await auth.protect();
	}
});

export const config = {
	matcher: [
		"/((?!.*\\..*|_next|_static|favicon.ico).*)", // Updated matcher
		"/(api|trpc)(.*)",
	],
};
