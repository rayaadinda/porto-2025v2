import { ImageResponse } from "next/og"
import { siteConfig } from "@/config/site"

export const runtime = "edge"
export const alt = "Raya Adinda - Full Stack Developer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Preload font (Inter variable or bold weight). Adjust if you add self-hosted fonts.
const fontBold = fetch(
	"https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMaqqw.woff2"
).then((r) => r.arrayBuffer())

export async function GET() {
	const { hero } = siteConfig.landing
	const lines =
		hero.h1.type === "multi-line" ? hero.h1.content : [hero.h1.content]

	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					fontFamily: "Inter",
					background:
						"linear-gradient(135deg,#0d0d10 0%,#141823 55%,#1f2937 100%)",
					color: "white",
					padding: "64px",
					justifyContent: "space-between",
				}}
			>
				<div style={{ fontSize: 32, opacity: 0.7 }}>
					{hero.topLine.replace("👋 ", "")}
				</div>
				<div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
					{lines.map((l, i) => (
						<div
							key={i}
							style={{
								fontSize: 72,
								fontWeight: 700,
								lineHeight: 1.05,
								letterSpacing: "-2px",
							}}
						>
							{l}
						</div>
					))}
				</div>
				<div
					style={{
						fontSize: 30,
						maxWidth: 900,
						lineHeight: 1.25,
						color: "#cbd5e1",
						whiteSpace: "pre-wrap",
					}}
				>
					{siteConfig.metadata.description}
				</div>
				<div
					style={{
						display: "flex",
						fontSize: 32,
						fontWeight: 600,
						gap: 24,
						alignItems: "center",
					}}
				>
					<div
						style={{
							background: "#ffffff10",
							padding: "12px 24px",
							borderRadius: 100,
							fontSize: 28,
						}}
					>
						rayaadinda.dev
					</div>
				</div>
			</div>
		),
		{
			...size,
			fonts: [
				{
					name: "Inter",
					data: await fontBold,
					style: "normal",
					weight: 700,
				},
			],
		}
	)
}
