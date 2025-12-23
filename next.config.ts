import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "res.cloudinary.com" },
			{ protocol: "https", hostname: "via.placeholder.com" },
			{
				protocol: "https",
				hostname: "cdn-rayaadinda.sgp1.cdn.digitaloceanspaces.com",
			},
		],
	},
}

export default nextConfig
