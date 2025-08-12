import { Connect } from "@/components/landing/connect"
import { Experience } from "@/components/landing/experience"
import { Hero } from "@/components/landing/hero"
import { Projects } from "@/components/landing/projects"
import { Services } from "@/components/landing/services"
import { PageContainer } from "@/components/page-header"
import { siteConfig } from "@/config/site"

export default function Home() {
	return (
		<PageContainer>
			<Hero />
			<Projects />
			<Services />
			{siteConfig.experience && <Experience />}
			<Connect />
		</PageContainer>
	)
}
