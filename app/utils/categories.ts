import { IconType } from "react-icons";
import { MdCabin } from "react-icons/md";

import { TbCaravan, TbTent, TbBuildingCottage } from "react-icons/tb";

import { GiWoodCabin, GiMushroomHouse } from "react-icons/gi";
import { PiWarehouse, PiLighthouse, PiVan } from "react-icons/pi";
import { PiBuildingApartment } from "react-icons/pi"; //<PiBuildingApartment />
import { GiTreehouse } from "react-icons/gi"; // <GiTreehouse />
import { BsHouseHeart } from "react-icons/bs"; // <BsHouseHeart />

import { GoContainer } from "react-icons/go";

type Category = {
	label: CategoryLabel;
	icon: IconType;
};

export type CategoryLabel =
	| "cabin"
	| "tent"
	| "airstream"
	| "cottage"
	| "treehouse"
	| "caravan"
	| "apartment"
	| "house"
	| "warehouse"
	| "lodge";

export const categories: Category[] = [
	{
		label: "cabin",
		icon: MdCabin,
	},
	{
		label: "airstream",
		icon: PiVan,
	},
	{
		label: "tent",
		icon: TbTent,
	},
	{
		label: "warehouse",
		icon: PiWarehouse,
	},
	{
		label: "cottage",
		icon: TbBuildingCottage,
	},
	{
		label: "house",
		icon: BsHouseHeart,
	},
	{
		label: "treehouse", //
		icon: GiTreehouse,
	},
	{
		label: "caravan",
		icon: TbCaravan,
	},

	{
		label: "apartment", //
		icon: PiLighthouse,
	},
	{
		label: "lodge",
		icon: GiWoodCabin,
	},
];
