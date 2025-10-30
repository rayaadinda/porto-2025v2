import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { Providers } from "@/components/providers/providers"
import { SiteFooter } from "@/components/site-footer"
import { siteConfig } from "@/config/site"
import { ScrollProgressBar } from "@/components/scroll-progress"
import { Analytics } from "@vercel/analytics/next"
import DarkVeil from "@/components/DarkVeil"
import { StructuredData } from "@/components/structured-data"

const fontsans = Inter({
	variable: "--font-sans",
	subsets: ["latin"],
})

const fontmono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = siteConfig.metadata

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<StructuredData />
			</head>
			<body
				className={`${fontsans.variable} ${fontmono.variable} antialiased font-sans relative`}
			>
				<Providers>
					{/* Fixed background canvas */}
					<div className="fixed inset-0 -z-10">
						<DarkVeil
							hueShift={29}
							noiseIntensity={0.04}
							speed={0.5}
							scanlineFrequency={0.5}
							warpAmount={0.3}
							resolutionScale={1}
						/>
					</div>
					<ScrollProgressBar />
					<SiteHeader />
					{children}
					<SiteFooter />
				</Providers>
				<Analytics />
			</body>
		</html>
	)
}
