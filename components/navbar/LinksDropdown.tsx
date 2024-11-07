import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { links } from "@/app/utils/links";
import { Button } from "../ui/button";
import UserIcon from "./UserIcon";
import SignOutLink from "./SignOutLink";
import { LuAlignLeft } from "react-icons/lu";
import { PiTextAlignJustifyDuotone } from "react-icons/pi";

function LinksDropdown() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					className="flex gap-4 max-w-[100px]"
				>
					<LuAlignLeft
						style={{ width: "1.5rem", height: "1.5rem" }}
					/>
					<UserIcon />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="w-52"
				align="start"
				sideOffset={10}
			>
				{links.map((link) => {
					return (
						<DropdownMenuItem key={link.href}>
							<Link
								href={link.href}
								className="capitalize w-full"
							>
								{link.label}
							</Link>
						</DropdownMenuItem>
					);
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default LinksDropdown;
