import {
	SectionContent,
	SectionHeader,
	SectionHeading,
} from "@/components/section-header"
import { buttonVariants } from "@/components/ui/button"
import { type ProjectItem, siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ArrowUpRightIcon } from "lucide-react"
import { Variants } from "motion"
import * as m from "motion/react-m"
import Image from "next/image"

const variants: Variants = {
	initial: { opacity: 0, y: 20, filter: "blur(12px)" },
	animate: { opacity: 1, y: 0, filter: "blur(0px)" },
}

export function Projects() {
	return (
		<SectionHeader>
			<SectionHeading
				variants={variants}
				initial="initial"
				animate="animate"
				motion
				transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
			>
				{siteConfig.projects.title}
			</SectionHeading>
			<SectionContent>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					{siteConfig.projects.projects.map((project, index) => (
						<ProjectItem key={index} project={project} index={index} />
					))}
				</div>
			</SectionContent>
		</SectionHeader>
	)
}

export function ProjectItem({
	project,
	index,
}: {
	project: ProjectItem
	index: number
}) {
	return (
		<m.div
			variants={variants}
			initial="initial"
			animate="animate"
			transition={{
				duration: 0.6,
				ease: "easeOut",
				delay: 1.4 + index * 0.4,
			}}
			className="flex flex-col gap-1"
		>
			<div className="relative w-full rounded-lg overflow-hidden border border-border aspect-video bg-secondary/50">
				{project.video ? (
					<video
						src={project.video}
						autoPlay
						loop
						muted
						playsInline
						preload="none"
						className="size-full object-cover"
					/>
				) : project.image ? (
					<Image
						src={project.image}
						alt={project.title}
						fill
						priority={index === 0}
						sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
						className="object-cover"
					/>
				) : null}
			</div>
			<div className="flex items-cener gap-2 mt-2">
				<h3 className="font-medium text-balance">{project.title}</h3>
			</div>
			<p className="text-muted-foreground font-light text-balance">
				{project.description}
			</p>
			<div className="flex items-center gap-4 flex-wrap">
				{project.github && (
					<a
						href={project.github}
						className={cn(
							buttonVariants({
								variant: "link",
								size: "sm",
							}),
							"px-0 has-[>svg]:px-0 text-foreground/90"
						)}
						target="_blank"
						rel="noopener noreferrer"
					>
						Code
						<ArrowUpRightIcon />
					</a>
				)}

				{project.livePreview && (
					<a
						href={project.livePreview}
						className={cn(
							buttonVariants({
								variant: "link",
								size: "sm",
							}),
							"px-0 has-[>svg]:px-0 text-foreground/90"
						)}
						target="_blank"
						rel="noopener noreferrer"
					>
						Live Preview
						<ArrowUpRightIcon />
					</a>
				)}
			</div>
		</m.div>
	)
}
