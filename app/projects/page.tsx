import {
	PageContainer,
	PageContent,
	PageDescription,
	PageHeader,
	PageHeading,
} from "@/components/page-header"
import { siteConfig } from "@/config/site"
import { Metadata } from "next"
import { ProjectItem } from "./project-item"

export const metadata: Metadata = {
	title: "All Projects",
	description:
		"Explore all my projects including web applications, mobile apps, and backend systems built with modern technologies like React, Next.js, TypeScript, and more.",
	openGraph: {
		title: "All Projects - Raya Adinda",
		description:
			"Explore all my projects including web applications, mobile apps, and backend systems built with modern technologies.",
		url: "https://rayaadinda.dev/projects",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "All Projects - Raya Adinda",
		description:
			"Explore all my projects including web applications, mobile apps, and backend systems.",
	},
	alternates: {
		canonical: "https://rayaadinda.dev/projects",
	},
}

export default function ProjectsPage() {
	return (
		<PageContainer>
			<PageHeader>
				<PageHeading>All Projects</PageHeading>
				<PageDescription>
					A comprehensive collection of my work spanning web development, mobile
					applications, and backend systems.
				</PageDescription>
			</PageHeader>
			<PageContent>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{siteConfig.projects.projects.map((project, index) => (
						<ProjectItem key={index} project={project} index={index} />
					))}
				</div>
			</PageContent>
		</PageContainer>
	)
}
