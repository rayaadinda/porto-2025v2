"use client"

import { buttonVariants } from "@/components/ui/button"
import { type ProjectItem as ProjectItemType } from "@/config/site"
import { cn } from "@/lib/utils"
import { ArrowUpRightIcon } from "lucide-react"
import { Variants } from "motion"
import * as m from "motion/react-m"
import Image from "next/image"
import Link from "next/link"

const variants: Variants = {
	initial: { opacity: 0, y: 20, filter: "blur(12px)" },
	animate: { opacity: 1, y: 0, filter: "blur(0px)" },
}

// Helper function to convert title to slug
function titleToSlug(title: string): string {
	return title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "")
}

export function ProjectItem({
	project,
	index,
}: {
	project: ProjectItemType
	index: number
}) {
	const projectSlug = titleToSlug(project.title)

	return (
		<m.div
			variants={variants}
			initial="initial"
			whileInView="animate"
			viewport={{ once: true, margin: "-100px" }}
			transition={{
				duration: 0.6,
				ease: "easeOut",
				delay: index * 0.1,
			}}
			className="flex flex-col gap-1"
		>
			<Link
				href={`/projects/${projectSlug}`}
				className="relative w-full rounded-lg overflow-hidden border border-border aspect-video bg-secondary/50 hover:border-foreground/20 transition-colors group"
			>
				{project.video ? (
					<video
						src={project.video}
						autoPlay
						loop
						muted
						playsInline
						preload="none"
						className="size-full object-cover group-hover:scale-105 transition-transform duration-300"
					/>
				) : project.image ? (
					<Image
						src={project.image}
						alt={project.title}
						fill
						priority={index < 6}
						sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
						className="object-cover group-hover:scale-105 transition-transform duration-300"
					/>
				) : (
					<div className="size-full flex items-center justify-center text-muted-foreground text-sm">
						No preview available
					</div>
				)}
			</Link>
			<div className="flex items-center gap-2 mt-2">
				<Link href={`/projects/${projectSlug}`}>
					<h3 className="font-medium text-balance hover:underline">
						{project.title}
					</h3>
				</Link>
			</div>
			<p className="text-muted-foreground font-light text-balance text-sm line-clamp-2">
				{project.description}
			</p>
			<div className="flex items-center gap-4 flex-wrap mt-1">
				<Link
					href={`/projects/${projectSlug}`}
					className={cn(
						buttonVariants({
							variant: "link",
							size: "sm",
						}),
						"px-0 has-[>svg]:px-0 text-foreground/90"
					)}
				>
					View Details
					<ArrowUpRightIcon />
				</Link>
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
						onClick={(e) => e.stopPropagation()}
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
						onClick={(e) => e.stopPropagation()}
					>
						Live Preview
						<ArrowUpRightIcon />
					</a>
				)}
			</div>
		</m.div>
	)
}
