import { Download } from "lucide-react"
import React from "react"
import { siteConfig } from "@/config/site"
import { urls } from "@/config/urls"
import * as m from "motion/react-m"
import { Variants } from "motion"
import Link from "next/link"

import { Button } from "@/components/ui/button"

const variants: Variants = {
	initial: { opacity: 0, y: 20, filter: "blur(12px)" },
	animate: { opacity: 1, y: 0, filter: "blur(0px)" },
}

const Experience1 = () => {
	return (
		<m.section
			className="py-32"
			variants={variants}
			whileInView="animate"
			initial="initial"
			transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
			viewport={{ once: true }}
		>
			<m.div
				className="container space-y-10 lg:space-y-20"
				variants={variants}
				whileInView="animate"
				initial="initial"
				transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
				viewport={{ once: true }}
			>
				<m.div
					variants={variants}
					initial="initial"
					animate="animate"
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
					viewport={{ once: true }}
					className="flex w-full items-end justify-between"
				>
					<h1 className="text-xl font-semibold tracking-tighter lg:text-xl">
						Experience
					</h1>
					<Button
						variant="ghost"
						size="lg"
						className="font-semibold"
						asChild
					>
						<a
							href="/resume.pdf"
							download="Raya_Adinda_Resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							Download CV <Download className="size-4" />
						</a>
					</Button>
				</m.div>

				<ul>
					{siteConfig.experience?.experiences.map((exp, index) => (
						<m.li
							key={index}
							variants={variants}
							initial="initial"
							animate="animate"
							transition={{
								duration: 0.6,
								ease: "easeOut",
								delay: 0.4 + index * 0.2,
							}}
							viewport={{ once: true }}
							className="flex flex-col justify-between border-b py-10 md:flex-row"
						>
							<div className="max-w-lg text-xl font-semibold tracking-tighter lg:w-1/3">
								{exp.duration}
							</div>
							<div className="lg:w-1/3">
								<h2 className="mb-4 text-2xl font-semibold tracking-tighter">
									{exp.position}
								</h2>
								<p className="text-foreground/50">{exp.description}</p>
							</div>
							<div className="text-right lg:w-1/4">{exp.company}</div>
						</m.li>
					))}
				</ul>
			</m.div>
		</m.section>
	)
}

export { Experience1 }
