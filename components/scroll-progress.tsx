"use client"
import { useEffect, useState } from "react"
import * as m from "motion/react-m"

// Top fixed scroll progress bar (height 3px)
export function ScrollProgressBar() {
	const [progress, setProgress] = useState(0)
	useEffect(() => {
		const onScroll = () => {
			const scrollTop = window.scrollY
			const docHeight =
				document.documentElement.scrollHeight - window.innerHeight
			const p = docHeight > 0 ? scrollTop / docHeight : 0
			setProgress(p)
		}
		onScroll()
		window.addEventListener("scroll", onScroll, { passive: true })
		return () => window.removeEventListener("scroll", onScroll)
	}, [])
	return (
		<div className="pointer-events-none fixed top-0 left-0 w-full z-[60]">
			<m.div
				aria-hidden
				className="h-[3px] bg-gradient-to-r from-primary via-primary/70 to-primary/40 origin-left"
				initial={{ scaleX: 0 }}
				animate={{ scaleX: progress }}
				transition={{ type: "spring", stiffness: 120, damping: 30 }}
				style={{ transformOrigin: "0% 50%" }}
			/>
		</div>
	)
}
