"use client"

import {
	SectionContent,
	SectionHeader,
	SectionHeading,
} from "@/components/section-header"
import { siteConfig } from "@/config/site"
import { formatDistanceToNow } from "date-fns"
import * as m from "motion/react-m"
import { Variants } from "motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRightIcon } from "lucide-react"
import { useEffect, useState } from "react"

const variants: Variants = {
	initial: { opacity: 0, y: 20, filter: "blur(12px)" },
	animate: { opacity: 1, y: 0, filter: "blur(0px)" },
}

export function Activities() {
	const data = siteConfig.activities
	if (!data) return null
	return (
		<SectionHeader id="activities">
			<SectionHeading
				motion
				variants={variants}
				whileInView="animate"
				initial="initial"
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ once: true }}
			>
				{data.title}
			</SectionHeading>
			<SectionContent>
				<ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{data.items.map((item, index) => {
						const since = formatDistanceToNow(new Date(item.date), {
							addSuffix: true,
						})
						const CardInner = (
							<m.li
								key={item.title}
								className="group relative flex flex-col gap-3 rounded-md border border-border bg-secondary/90 overflow-hidden"
								variants={variants}
								initial="initial"
								whileInView="animate"
								transition={{
									duration: 0.6,
									ease: "easeOut",
									delay: 0.2 + index * 0.2,
								}}
								viewport={{ once: true }}
							>
								<div className="relative w-full aspect-square bg-secondary/60 overflow-hidden">
									{Array.isArray(item.images) && item.images.length > 0 ? (
										<Slideshow
											images={item.images}
											alt={item.title}
											priority={index === 0}
										/>
									) : item.image ? (
										<Image
											src={item.image}
											alt={item.title}
											fill
											className="object-cover group-hover:scale-[1.02] transition-transform"
											priority={index === 0}
										/>
									) : null}
								</div>
								<div className="flex flex-col gap-1 px-4 pb-4">
									<div className="flex items-center justify-between gap-4">
										<h3 className="font-medium text-sm leading-tight text-balance flex items-center gap-1">
											{item.title}
											{item.link && (
												<span className="inline-flex items-center rounded-sm bg-secondary px-1.5 py-0.5 text-[10px] font-medium text-foreground/70 border border-border/60 group-hover:bg-secondary/70 transition-colors gap-1">
													<span>View</span>
													<ArrowUpRightIcon className="size-3" />
												</span>
											)}
										</h3>
										<span className="text-[10px] uppercase tracking-wide text-foreground/50 whitespace-nowrap">
											{since}
										</span>
									</div>
									<p className="text-foreground/60 text-xs sm:text-sm leading-relaxed text-balance">
										{item.description}
									</p>
								</div>
							</m.li>
						)
						return item.link ? (
							<Link
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
								key={item.title}
								className="contents"
							>
								{CardInner}
							</Link>
						) : (
							CardInner
						)
					})}
				</ul>
			</SectionContent>
		</SectionHeader>
	)
}

function Slideshow({
	images,
	alt,
	priority,
	interval = 3000,
}: {
	images: string[]
	alt: string
	priority?: boolean
	interval?: number
}) {
	const [index, setIndex] = useState(0)
	useEffect(() => {
		if (images.length <= 1) return
		const id = setInterval(
			() => setIndex((i) => (i + 1) % images.length),
			interval
		)
		return () => clearInterval(id)
	}, [images, interval])

	return (
		<div className="size-full relative">
			{images.map((src, i) => (
				<m.div
					key={src + i}
					className="absolute inset-0"
					initial={{ opacity: 0 }}
					animate={{ opacity: i === index ? 1 : 0 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				>
					<Image
						src={src}
						alt={alt}
						fill
						priority={priority && i === 0}
						sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
						className="object-cover"
					/>
				</m.div>
			))}
			{images.length > 1 && (
				<div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full backdrop-blur px-2 py-1">
					{images.map((_, i) => (
						<button
							key={i}
							onClick={(e) => {
								e.preventDefault()
								setIndex(i)
							}}
							className={`size-2 rounded-full transition-colors ${
								i === index ? "bg-foreground" : "bg-foreground/30"
							}`}
							aria-label={`Show image ${i + 1}`}
						/>
					))}
				</div>
			)}
		</div>
	)
}
