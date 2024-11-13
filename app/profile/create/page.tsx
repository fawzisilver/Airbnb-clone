import { SubmitButton } from "@/components/form/SubmitButton";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/Forminput";
import { createProfileAction } from "@/app/utils/actions";

function CreateProfilePage() {
	return (
		<section>
			<h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
			<div className="border p-8 rounded-mb">
				<FormContainer action={createProfileAction}>
					<div className="grid md:grid-cols-2 gap-4 mt-4">
						<FormInput type="text" name="firstname" label="First Name" />
						<FormInput type="text" name="lastname" label="Last Name" />
						<FormInput type="text" name="username" label="UserName" />
					</div>
					<SubmitButton text="Create Profile" className="mt-8" />
				</FormContainer>
			</div>
		</section>
	);
}

export default CreateProfilePage;
