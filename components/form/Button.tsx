"use client";

import { ReloadIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { icons } from "lucide-react";

type btnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
	className?: string;
	text?: string;
	size?: btnSize;
};

export function SubmitButton({
	className = "",
	text = "submit",
	size = "lg",
}: SubmitButtonProps) {
	const { pending } = useFormStatus();
	return (
		<Button
			type="submit"
			disabled={pending}
			className={`capitalize ${className}`}
			size={size}
		>
			{pending ? (
				<>
					<ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
					Please wait...
				</>
			) : (
				text
			)}
		</Button>
	);
}

export const CardSignInButton = () => {
	return (
		<SignInButton mode="modal">
			<Button
				type="submit"
				size="icon"
				variant="outline"
				className="p-2 cursor-pointer"
				asChild
			>
				<FaHeart />
			</Button>
		</SignInButton>
	);
};
