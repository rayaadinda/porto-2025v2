import { Connect } from "@/components/landing/connect"
import { Experience } from "@/components/landing/experience"
import { Hero } from "@/components/landing/hero"
import { Projects } from "@/components/landing/projects"
import { Activities } from "@/components/landing/activities"
import { PageContainer } from "@/components/page-header"
import { siteConfig } from "@/config/site"

export default function Home() {
	return (
		<PageContainer>
			<Hero />
			<Projects />
			<Activities />
			{siteConfig.experience && <Experience />}
			<Connect />
		</PageContainer>
	)
}
