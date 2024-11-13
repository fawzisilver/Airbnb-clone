import { SubmitButton } from "@/components/form/SubmitButton";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/Forminput";

const createProfileAction = async (prevState: any, formData: FormData) => {
	"use server";
	const firstName = formData.get("firstName") as string;
	const lastName = formData.get("lastname") as string;
	const username = formData.get("username") as string;

	console.log("Form Data:", { firstName, lastName, username });
	console.log("Action triggered");
	console.log("Form data ", formData);
	return { message: "Profile Created" };
};

function CreateProfilePage() {
	return (
		<section>
			<h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
			<div className="border p-8 rounded-mb">
				<FormContainer action={createProfileAction}>
					<div className="grid md:grid-cols-2 gap-4 mt-4">
						<FormInput type="text" name="firstname" label="First Name" />
						<FormInput type="text" name="lirstname" label="Last Name" />
						<FormInput type="text" name="username" label="UserName" />
					</div>
					<SubmitButton text="Create Profile" className="mt-8" />
				</FormContainer>
			</div>
		</section>
	);
}

export default CreateProfilePage;
