"use client";

import { MapContainer, TileLayer, Marker, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";
import { useEffect } from "react";
// import findCountryByCode from "@app/utils/countries";
import { findCountryByCode } from "@/app/utils/countries";
import CountryFlagAndName from "../card/CountryFlagAndName";
import Title from "./Title";

const iconUrl = "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";
const markerIcon = icon({
	iconUrl: iconUrl,
	iconSize: [20, 30],
});

function PropertyMap({ countryCode }: { countryCode: string }) {
	const defaultLocation = [51.505, -0.09] as [number, number];
	const location = findCountryByCode(countryCode)?.location as [number, number];

	useEffect(() => {
		// Clean up any existing map containers on unmount
		return () => {
			const mapContainers = document.querySelectorAll(".leaflet-container");
			mapContainers.forEach((container) => {
				if ("_leaflet_id" in container) {
					delete (container as any)._leaflet_id; // Prevent map reinitialization
				}
				container.innerHTML = ""; // Clear DOM
			});
		};
	}, []);

	return (
		<div className="mt-4">
			<div className="mb-4">
				<Title text="Where will you be staying" />
				<CountryFlagAndName countryCode={countryCode} />
			</div>
			<MapContainer
				id="unique-map-id"
				scrollWheelZoom={true}
				zoomControl={true}
				className="h-[50vh] rounded-lg relative z-0"
				center={location || defaultLocation}
				zoom={7}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<ZoomControl position="bottomright" />
				<Marker position={location || defaultLocation} icon={markerIcon} />
			</MapContainer>
		</div>
	);
}

export default PropertyMap;
