import { LuUser2 } from "react-icons/lu";
import { fetchProfileImage } from "@/app/utils/actions";

async function UserIcon() {
	const profileImage = await fetchProfileImage();

	if (profileImage) {
		return <img src={profileImage} className="w-6 h-6 rounded-full object-cover" />;
	}
	return (
		<LuUser2
			style={{ width: "1.5rem", height: "1.5rem" }}
			className="bg-primary rounded full text-white"
		/>
	);
}

export default UserIcon;
