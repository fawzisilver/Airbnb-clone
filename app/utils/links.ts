type NavLink = {
	href: string;
	label: string;
};
// routes for the application
export const links: NavLink[] = [
	{ href: "/", label: "home" },
	{ href: "/favorites", label: "favorites" },
	{ href: "/bookings", label: "bookings" },
	{ href: "/reviews", label: "reviews" },
	{ href: "/rentals/create", label: "create rental" },
	{ href: "/reservations", label: "reservations" },
	{ href: "/rentals", label: "my rentals" },
	{ href: "/profile", label: "profile" },
	{ href: "/admin", label: "admin" },
];
