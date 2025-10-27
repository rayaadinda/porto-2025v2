import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "res.cloudinary.com" },
			{ protocol: "https", hostname: "via.placeholder.com" },
		],
	},
	video: {
		remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
	},
}

export default nextConfig
