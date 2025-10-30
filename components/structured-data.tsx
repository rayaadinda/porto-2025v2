import { siteConfig } from "@/config/site"

export function StructuredData() {
	const personSchema = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Raya Adinda",
		url: "https://rayaadinda.dev",
		image: "https://rayaadinda.dev/avatar.jpg",
		jobTitle: "Full Stack Developer",
		description: siteConfig.metadata.description,
		email: siteConfig.connect.email,
		sameAs: siteConfig.connect.socials.map((social) => social.href),
		knowsAbout: ["Web Development", "Mobile Development", "React", "Next.js", "TypeScript", "Full Stack Development"],
	}

	const websiteSchema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "Raya Adinda - Full Stack Developer",
		url: "https://rayaadinda.dev",
		description: siteConfig.metadata.description,
		author: {
			"@type": "Person",
			name: "Raya Adinda",
		},
		inLanguage: "en-US",
	}

	const portfolioSchema = {
		"@context": "https://schema.org",
		"@type": "ProfilePage",
		mainEntity: {
			"@type": "Person",
			name: "Raya Adinda",
			alternateName: "Rey",
			description: siteConfig.metadata.description,
			image: "https://rayaadinda.dev/avatar.jpg",
			url: "https://rayaadinda.dev",
			sameAs: siteConfig.connect.socials.map((social) => social.href),
			hasOccupation: {
				"@type": "Occupation",
				name: "Full Stack Developer",
				occupationLocation: {
					"@type": "Country",
					name: "Indonesia",
				},
				skills: "React, Next.js, TypeScript, Node.js, Mobile Development, Web Development",
			},
		},
	}

	const breadcrumbSchema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: "https://rayaadinda.dev",
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Projects",
				item: "https://rayaadinda.dev/projects",
			},
		],
	}

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
			/>
		</>
	)
}
