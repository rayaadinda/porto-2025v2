import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "res.cloudinary.com" },
			{ protocol: "https", hostname: "via.placeholder.com" },
		],
	},
}

export default nextConfig
