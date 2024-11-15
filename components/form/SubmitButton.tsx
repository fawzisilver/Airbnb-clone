"use client";
import { Loader2 } from "lucide-react"; //reloadIcon
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

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
					<Loader2 className="animate-spin" />
					Please wait...
				</>
			) : (
				text
			)}
		</Button>
	);
}
