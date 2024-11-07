import Link from "next/link";
import { TbBuildingStore } from "react-icons/tb";
import { Button } from "../ui/button";

function Logo() {
	return (
		<Button size="icon" asChild>
			<Link href="/">
				<TbBuildingStore
					style={{ width: "1.5rem", height: "1.5rem" }}
				/>
			</Link>
		</Button>
	);
}

export default Logo;
