import { Label } from "@/components/ui/label";
import { categories } from "@/app/utils/categories";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Item } from "@radix-ui/react-dropdown-menu";

const name = "categories";

type CategoryInputProp = {
	defaultValue?: string;
};

function CategoriesInput({ defaultValue }: CategoryInputProp) {
	return (
		<div className="mb-2">
			<Label htmlFor={name} className="capitalize">
				Categories
			</Label>
			<Select
				defaultValue={defaultValue || categories[0].label}
				name={name}
				required
			>
				<SelectTrigger id={name}>
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					{categories.map((category) => {
						return (
							<SelectItem key={category.label} value={category.label}>
								<span className="flex items-center gap-2">
									<category.icon /> {category.label}
								</span>
							</SelectItem>
						);
					})}
				</SelectContent>
			</Select>
		</div>
	);
}

export default CategoriesInput;
