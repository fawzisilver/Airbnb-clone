"use client";
import { useActionState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { actionFunction } from "@/app/utils/types";
import { useFormState } from "react-dom";

const initialState = {
	message: "",
};

function FormContainer({
	action,
	children,
}: {
	action: actionFunction;
	children: React.ReactNode;
}) {
	const [state, formAction] = useFormState(action, initialState);
	const { toast } = useToast();

	useEffect(() => {
		console.log("State", state);
		if (state.message) {
			console.log("Triggering toast with message: ", state.message);
			toast({ description: state.message });
		}
	}, [state]);
	return <form action={formAction}>{children}</form>;
}

export default FormContainer;
