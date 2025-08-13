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
}

export type NavItem = {
	title: string
	href: string
	external?: boolean
}

export type SiteConfig = {
	metadata: Metadata
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
		title: "Raya Adinda",
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
		],
		authors: [{ name: "Raya Adinda" }],
		creator: "Raya Adinda",
		openGraph: {
			title: "Raya Adinda - Full Stack Developer",
			description:
				"Personal portfolio showcasing my projects and expertise in full stack development.",
			type: "website",
			locale: "en_US",
		},
		twitter: {
			card: "summary_large_image",
			title: "Raya Adinda - Full Stack Developer",
			description:
				"Personal portfolio showcasing my projects and expertise in full stack development.",
		},
	},
	header: {
		logoImage: "/avatar.jpg",
		nav: [
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
					"Web Developer.",
					"✦ I focus on building your MVP.",
					"✦ You focus on growing it fast.",
				],
			},
			description:
				"Developer with over 3+ years of experience in building web applications, specializing in rapid MVP development. I leverage modern technologies to create scalable and efficient solutions.",
			actions: {
				primary: {
					label: "Talk with me",
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
				title: "Promptthing",
				description:
					"A open-source alternative to t3.chat, created it for theo's cloneathon.",
				video:
					"https://res.cloudinary.com/dalh8le5w/video/upload/v1752544093/Screen_Recording_2025-07-15_at_6.47.37_AM_spzl4t.mov",
				github: "https://github.com/alifarooq9/promptthing",
				livePreview: "https://prompthing.vercel.app/",
			},
			{
				title: "Fern AI",
				description:
					"Fern AI is a chatbot summarizer document file using OpenRouter API",
				video:
					"https://res.cloudinary.com/dpsofmxsd/video/upload/v1755065542/ferrnai.mov",
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
		],
	},
	experience: {
		title: "Work Experience",
		experiences: [
			{
				company: "Maxy Academy",
				position: "Frontend Developer Bootcamp",
				duration: "2025 - Present",
			},
			{
				company: "Bangkit Academy",
				position: "Mobile Developer",
				duration: "2024 - 2025",
			},
			{
				company: "Universitas Pamulang",
				position: "Computer Science Student",
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
