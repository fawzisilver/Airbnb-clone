"use client";
import { Input } from "../ui/input";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";

const NavSearch = () => {
	const searchParams = useSearchParams();
	const pathName = usePathname();
	const { replace } = useRouter();

	const [search, setSearch] = useState(searchParams.get("search")?.toString() || "");

	const handleSearch = useDebouncedCallback((value: string) => {
		const params = new URLSearchParams(searchParams);
		if (value) {
			params.set("search", value);
		} else {
			params.delete("search");
		}
		replace(`${pathName}?${params.toString()}`);
	}, 500);

	useEffect(() => {
		if (!searchParams.get("search")) {
			setSearch("");
		}
	}, [searchParams.get("search")]);
	return (
		<Input
			type="text"
			placeholder="look for property..."
			className="max-w-lg dark:bg-muted"
			onChange={(e) => {
				setSearch(e.target.value);
				handleSearch(e.target.value);
			}}
			value={search}
		/>
	);
};

export default NavSearch;
