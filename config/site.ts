import { urls } from "@/config/urls"
import { Metadata } from "next"

export type ProjectItem = {
	title: string
	description: string
	video?: string
	image?: string
	github?: string
	livePreview?: string
}

export type ExperienceItem = {
	company: string
	position: string
	duration: string
	description: string
}

export type NavItem = {
	title: string
	href: string
	external?: boolean
}

export type SiteConfig = {
	metadata: Metadata
	banner?: {
		enabled: boolean
		variant: "default" | "success" | "info" | "warning"
		message: string
		emoji?: string
		ctaLabel?: string
		ctaHref?: string
		dismissible?: boolean
	}
	landing: {
		hero: {
			topLine: string
			h1:
				| {
						type: "multi-line"
						content: string[]
				  }
				| {
						type: "single-line"
						content: string
				  }
			description: string
			actions: {
				primary: {
					label: string
					href: string
				}
				secondary: {
					label: string
					href: string
				}
			}
		}
	}
	projects: {
		title: string
		projects: ProjectItem[]
	}
	experience?: {
		title: string
		experiences: ExperienceItem[]
	}
	activities?: {
		title: string
		items: {
			title: string
			description: string
			date: string
			image?: string
			images?: string[]
			link?: string
		}[]
	}
	connect: {
		title: string
		email: string
		socials: {
			label: string
			href: string
		}[]
	}
	header: {
		logoImage: string
		nav: NavItem[]
		button: {
			label: string
			href: string
		}
	}
	footer: {
		copyright: string
	}
}

export const siteConfig: SiteConfig = {
	metadata: {
		title: {
			default:
				"Raya Adinda - Full Stack Developer | React, Next.js, TypeScript",
			template: "%s | Raya Adinda",
		},
		description:
			"I am a full stack developer with over 3+ years of experience in building web applications, specializing in rapid MVP development. I leverage modern technologies to create scalable and efficient solutions.",
		keywords: [
			"Raya Adinda",
			"Full Stack Developer",
			"Portfolio",
			"Web Developer",
			"React",
			"Next.js",
			"TypeScript",
			"Mobile Developer",
			"MVP Development",
			"Indonesia Developer",
			"Bangkit Academy",
			"Frontend Developer",
			"Backend Developer",
			"UI/UX",
		],
		authors: [{ name: "Raya Adinda", url: "https://rayaadinda.dev" }],
		creator: "Raya Adinda",
		publisher: "Raya Adinda",
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
		alternates: {
			canonical: "https://rayaadinda.dev",
		},
		// Ensure absolute URLs generated for /og and canonical tags
		metadataBase: new URL("https://rayaadinda.dev"),
		openGraph: {
			title: "Raya Adinda - Full Stack Developer",
			description:
				"Personal portfolio showcasing my projects and expertise in full stack development.",
			type: "website",
			locale: "en_US",
			url: "https://rayaadinda.dev",
			siteName: "Raya Adinda - Full Stack Developer",
			images: [
				// Dynamic OG
				{
					url: "/og", // served by app/og/route.ts
					alt: "Raya Adinda - Full Stack Developer",
					width: 1200,
					height: 630,
				},
				// Static fallback (optional second image)
				{
					url: "https://res.cloudinary.com/dpsofmxsd/image/upload/v1755146395/Screenshot_2025-08-14_113916_jfw7hs.png",
					alt: "Raya Adinda - Full Stack Developer (Static Fallback)",
					width: 1200,
					height: 630,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: "Raya Adinda - Full Stack Developer",
			description:
				"Personal portfolio showcasing my projects and expertise in full stack development.",
			images: [
				"/og",
				"https://res.cloudinary.com/dpsofmxsd/image/upload/v1755146395/Screenshot_2025-08-14_113916_jfw7hs.png",
			],
		},
	},
	banner: {
		enabled: true,
		variant: "success",
		message: "Open to work and internship opportunities!",
		emoji: "🚀",
		ctaLabel: "Contact me",
		ctaHref: urls.bookCall,
		dismissible: true,
	},
	header: {
		logoImage: "/avatar.jpg",
		nav: [
			{
				title: "Projects",
				href: "/projects",
				external: true,
			},
			{
				title: "Github",
				href: urls.github,
				external: true,
			},
			{
				title: "LinkedIn",
				href: urls.linkedin,
				external: true,
			},
		],
		button: {
			label: "Book a Call",
			href: urls.bookCall,
		},
	},
	landing: {
		hero: {
			topLine: "👋 Hi there, I'm Raya Adinda. nice to meet you...",
			h1: {
				type: "multi-line",
				content: [
					"Web Dev, Mobile Dev, Palugada Dev.",
					"✦ I focus on building your MVP.",
					"✦ You focus on growing it fast.",
				],
			},
			description:
				"Developer with over 3+ years of experience in building web applications, specializing in rapid MVP development. I leverage modern technologies to create scalable and efficient solutions.",
			actions: {
				primary: {
					label: "Hire me",
					href: urls.bookCall,
				},
				secondary: {
					label: "Recent activity",
					href: "#activities",
				},
			},
		},
	},
	projects: {
		title: "Projects",
		projects: [
			{
				title: "Unchain",
				description:
					"Unchain is innovative mobile application that leverages artificial intelligence to help users understand, track, and overcome sugar addiction.",
				image:
					"https://res.cloudinary.com/dpsofmxsd/image/upload/v1754997272/template_29_1_zie82i.jpg",
				github: "https://github.com/unChain-Capstone",
				livePreview: "https://github.com/unChain-Capstone/",
			},
			{
				title: "UGC Management Hub",
				description:
					"A dedicated web application for TDR Racing to manage User Generated Content (UGC). Built with Vite and React, it features Supabase integration for database needs, TanStack Query for efficient data handling, Apify for content scraping, and a sleek UI using shadcn/ui components.",
				image:
					"https://res.cloudinary.com/dpsofmxsd/image/upload/v1761644485/Maxy_x_TDR_2nd_Hackathon_Kelompok_1_ifbvoo.gif",
			},
			{
				title: "Snapify",
				description:
					"Snapify is an interactive web project designed to simulate and modernize the photobooth experience.",
				video:
					"https://res.cloudinary.com/dpsofmxsd/video/upload/v1754996334/2025-08-12_17-56-01_quqlxh.mp4",
				github: "https://github.com/rayaadinda/Snapify",
				livePreview: "https://snapifynjz.vercel.app/",
			},

			{
				title: "Monogatari",
				description:
					"Monogatari is a full-stack blog application designed to replicate the clean reading and writing experience of Medium.",
				image:
					"https://res.cloudinary.com/dpsofmxsd/image/upload/v1754999507/monogatari.png",
				github: "https://github.com/rayaadinda/frontend-monogatari",
				livePreview: "https://monogatariv2.vercel.app/",
			},
			{
				title: "Fern AI",
				description:
					"Fern AI is a chatbot summarizer document file using OpenRouter API",
				video:
					"https://res.cloudinary.com/dpsofmxsd/video/upload/v1755145774/ferrnai_pejqwa.mp4",
				github: "https://github.com/rayaadinda/Fern",
				livePreview: "https://fernai.vercel.app/",
			},
			{
				title: "Inventory Management System Dashboard",
				description:
					"An application to manage inventory effectively for CV Kurnia Jaya Industry providing features for tracking stock levels, orders, and sales.",
				video:
					"https://res.cloudinary.com/dpsofmxsd/video/upload/v1755079340/2025-08-13_13-20-39_hgjvx2.mp4",
				github: "https://github.com/rayaadinda/frontend-kp",
				livePreview: "https://frontend-kp-gamma.vercel.app/",
			},
			{
				title: "Temani",
				description:
					"AI‑assisted volunteer management for Indonesian Heritage Society (rosters, smart matching, impact analytics).",
				video:
					"https://res.cloudinary.com/dpsofmxsd/video/upload/v1755067287/Untitled_design_tmgl6g.mp4",
				github: "https://github.com/rayaadinda/Hackathon-Backend",
				livePreview: "https://temani-sigma.vercel.app/",
			},
			{
				title: "HPZ Crew Dashboard",
				description:
					"A comprehensive Next.js 15 crew dashboard application for TDR Racing HPZ Crew with approval based authentication, performance tracking, content management, and real-time analytics using Supabase.",
				video:
					"https://res.cloudinary.com/dpsofmxsd/video/upload/v1761643935/2025-10-28_16-26-53_pck6jv.mp4",
				github: "https://github.com/rayaadinda/HPZCrew-Dashboard",
			},

			{
				title: "HPZ Crew",
				description:
					"HPZ Crew frontend application built with React and Vite, providing a fast and modern web experience for the HPZ community.",
				video:
					"https://res.cloudinary.com/dpsofmxsd/video/upload/v1761645364/2025-10-28_16-23-37_zdkt6h.mp4",
				github: "https://github.com/rayaadinda/HPZCrew",
			},
			{
				title: "HPZ Crew Discord Bot",
				description:
					"Official Discord bot for HPZ Crew community with Supabase integration, featuring point system, tier management, mission tracking, leaderboard, and welcome system.",
				github: "https://github.com/rayaadinda/bot-discord",
			},
			{
				title: "HPZ Chatbot Backend",
				description:
					"Backend server for HPZ Crew Chatbot using Express.js and OpenRouter API with Llama 3.1, supporting Indonesian language commands and Supabase authentication.",
				github: "https://github.com/rayaadinda/hpz-chatbot-backend",
			},
		],
	},
	experience: {
		title: "Work Experience",
		experiences: [
			{
				company: "Maxy Academy",
				position: "Frontend Developer Bootcamp",
				description:
					"Participated in an intensive frontend developer bootcamp, learning fundamental web development, React.js, Next.js, Expo React Native, and more through hands on projects and collaborative learning.",
				duration: "2025 - Present",
			},
			{
				company: "Bangkit Academy",
				position: "Mobile Developer",
				description:
					"Developed mobile applications using Kotlin, focusing on user experience and performance optimization.",
				duration: "2024 - 2025",
			},
			{
				company: "Universitas Pamulang",
				position: "Computer Science Student",
				description:
					"Studied various computer science topics, including algorithms, data structures, and software engineering principles.",
				duration: "2022 - Present",
			},
		],
	},
	activities: {
		title: "Recent Activity",
		items: [
			{
				title: "Garuda Hacks 6.0",
				description:
					"Built Temani in a 30‑hour hackathon: AI‑assisted volunteer management for Indonesian Heritage Society (rosters, smart matching, impact analytics).",
				date: "2025-07-24",
				images: [
					"https://res.cloudinary.com/dpsofmxsd/image/upload/v1755062639/hackthon_h3ihae.jpg",
					"https://res.cloudinary.com/dpsofmxsd/image/upload/v1755064576/IMG_4834_lif2rf.jpg",
					"https://res.cloudinary.com/dpsofmxsd/image/upload/v1755064575/97b4b47b-e075-4077-ab2b-b95bb46ab47d_tkubxv.jpg",
					"https://res.cloudinary.com/dpsofmxsd/image/upload/v1755064576/IMG_4904_xapjjv.jpg",
				],
				link: "https://devpost.com/software/temani",
			},
			{
				title: "Bangkit Academy",
				description:
					'Create "Unchain", an innovative mobile application that leverages artificial intelligence to help users understand, track, and overcome sugar addiction.',
				date: "2025-01-25",
				images: [
					"https://res.cloudinary.com/dpsofmxsd/image/upload/v1755062878/unchain_Team_tuq3by.jpg",
					"https://res.cloudinary.com/dpsofmxsd/image/upload/v1755064753/bangkit_kb6qlr.png",
					"https://res.cloudinary.com/dpsofmxsd/image/upload/v1755064221/IMG_0369_xuyu2q.png",
					"https://res.cloudinary.com/dpsofmxsd/image/upload/v1755064236/Screenshot_2025-08-13_124944_mp1rw8.png",
				],
				link: "https://github.com/unChain-Capstone",
			},
		],
	},
	connect: {
		title: "Connect",
		email: "rayaadinda78@gmail.com",
		socials: [
			{
				label: "Github",
				href: "https://github.com/rayaadinda",
			},
			{
				label: "Linkedin",
				href: "https://www.linkedin.com/in/rayaadinda/",
			},
			{
				label: "Spotify",
				href: "https://open.spotify.com/user/31pg743zjzyci2xlhnbey6rk6vdu?si=720ff2cc893f45d4",
			},
			{
				label: "Instagram",
				href: "https://www.instagram.com/fromrayacamera/",
			},
		],
	},
	footer: {
		copyright: "© 2025 Raya Adinda",
	},
}
