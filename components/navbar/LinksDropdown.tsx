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
import { LuAlignLeft } from "react-icons/lu";
import { PiTextAlignJustifyDuotone } from "react-icons/pi";
import SignOutLink from "./SignOutLink";
import { SignedOut, SignedIn, SignInButton, SignUpButton } from "@clerk/nextjs";

function LinksDropdown() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" className="flex gap-4 max-w-[100px] w-96">
					<LuAlignLeft style={{ width: "2.5rem", height: "1.5rem" }} />
					<UserIcon />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="w-52" align="start" sideOffset={10}>
				{/** User Signed Out */}
				<SignedOut>
					<DropdownMenuItem>
						<SignInButton mode="modal">
							<button className="w-full text-left">Login</button>
						</SignInButton>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<SignUpButton mode="modal">
							<button className="w-full text-left">Register</button>
						</SignUpButton>
					</DropdownMenuItem>
				</SignedOut>

				{/** User Signed In */}
				<SignedIn>
					{links.map((link) => {
						return (
							<DropdownMenuItem key={link.href}>
								<Link href={link.href} className="capitalize w-full">
									{link.label}
								</Link>
							</DropdownMenuItem>
						);
					})}
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<SignOutLink />
					</DropdownMenuItem>
				</SignedIn>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default LinksDropdown;
