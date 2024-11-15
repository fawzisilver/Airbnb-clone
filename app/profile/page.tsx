import React from "react";
import FormContainer from "@/components/form/FormContainer";
import {
	updateProfileAction,
	fetchProfile,
	updateProfileImageAction,
} from "../utils/actions";
import FormInput from "@/components/form/Forminput";
import { SubmitButton } from "@/components/form/SubmitButton";
import ImageInputContainer from "@/components/form/ImageInputContainer";

async function ProfilePage() {
	const profile = await fetchProfile();
	return (
		<section>
			<h1 className="text-2xl font-semibold mb-8 capitalize">user profile</h1>
			<div className="border p-8 rounded-mb">
				{/** img input container */}
				<ImageInputContainer
					image={profile.profileImage}
					name={profile.firstname}
					action={updateProfileImageAction}
					text="Update profile image"
				/>
				<FormContainer action={updateProfileAction}>
					<div className="grid md:grid-cols-2 gap-4 mt-4">
						<FormInput
							type="text"
							name="firstname"
							label="First Name"
							defaultValue={profile.firstname}
						/>
						<FormInput
							type="text"
							name="lastname"
							label="Last Name"
							defaultValue={profile.lastname}
						/>
						<FormInput
							type="text"
							name="username"
							label="UserName"
							defaultValue={profile.username}
						/>
					</div>
					<SubmitButton text="Update Profile" className="mt-8" />
				</FormContainer>
			</div>
		</section>
	);
}

export default ProfilePage;
