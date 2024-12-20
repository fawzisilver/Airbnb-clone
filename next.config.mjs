const nextConfig = {
	// experimental: {
	// 	serverActions: {
	// 		allowedOrigins: ["*"],
	// 	},
	// },
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "img.clerk.com",
			},
			{
				protocol: "https",
				hostname: "vgpdwckvqarryuwksmwe.supabase.co",
			},
		],
	},
};

export default nextConfig;
