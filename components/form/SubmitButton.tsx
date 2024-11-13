"use client";
import { Loader2 } from "lucide-react"; //reloadIcon
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

type SubmitButtonProps = {
	className?: string;
	text?: string;
};

export function SubmitButton({
	className = "",
	text = "submit",
}: SubmitButtonProps) {
	const { pending } = useFormStatus();

	return (
		<Button
			type="submit"
			disabled={pending}
			className={`capitalize ${className}`}
			size="lg"
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
