// components/TestToast.tsx
import React from "react";
import { useToast } from "@/hooks/use-toast"; // Adjust this path if necessary
import { Button } from "@/components/ui/button"; // Adjust according to your Button component

export default function TestToast() {
	const { toast } = useToast();

	const handleClick = () => {
		toast({
			title: "Success!",
			description: "This is a test toast message.",
		});
	};

	return (
		<div className="p-4">
			<Button onClick={handleClick} className="bg-blue-500 text-white">
				Show Test Toast
			</Button>
		</div>
	);
}
