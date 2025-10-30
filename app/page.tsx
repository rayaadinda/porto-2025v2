import { Connect } from "@/components/landing/connect"
import { Hero } from "@/components/landing/hero"
import { Projects } from "@/components/landing/projects"
import { Activities } from "@/components/landing/activities"
import { PageContainer } from "@/components/page-header"
import { Experience1 } from "@/components/landing/experience-copy"

export default function Home() {
	return (
		<PageContainer>
			<Hero />
			<Projects />
			<Activities />
			<Experience1 />
			<Connect />
		</PageContainer>
	)
}
