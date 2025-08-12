import {
	SectionContent,
	SectionHeader,
	SectionHeading,
} from "@/components/section-header"
import { siteConfig } from "@/config/site"
import { Variants } from "motion"
import * as m from "motion/react-m"

const variants: Variants = {
	initial: { opacity: 0, y: 20, filter: "blur(12px)" },
	animate: { opacity: 1, y: 0, filter: "blur(0px)" },
}

export function Services() {
	if (!siteConfig.services) return null
	return (
		<SectionHeader id="services">
			<SectionHeading
				motion
				variants={variants}
				whileInView="animate"
				initial="initial"
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ once: true }}
			>
				{siteConfig.services.title}
			</SectionHeading>
			<SectionContent>
				<ul className="grid grid-cols-1 gap-3 sm:gap-4">
					{siteConfig.services.items.map((item, index) => (
						<m.li
							key={item.title}
							className="flex flex-col gap-1 rounded-md border border-border bg-secondary/90 px-4 py-3"
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
							<h3 className="font-medium text-sm">{item.title}</h3>
							<p className="text-foreground/60 text-sm leading-relaxed">
								{item.description}
							</p>
						</m.li>
					))}
				</ul>
			</SectionContent>
		</SectionHeader>
	)
}
