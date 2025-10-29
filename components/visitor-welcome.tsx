"use client"

import { useEffect } from "react"
import { toast } from "sonner"

const VISITOR_NOTIFICATION_SHOWN = "visitor_notification_shown_v3"

const gratefulMessages = [
	"if you're from twitter... thank you so much?? 😭 this porto literally just hit 4k++ visitors (last night)",
]

export function VisitorWelcome() {
	useEffect(() => {
		const wasShown = localStorage.getItem(VISITOR_NOTIFICATION_SHOWN)

		if (!wasShown) {
			localStorage.setItem(VISITOR_NOTIFICATION_SHOWN, "true")

			const timer = setTimeout(() => {
				const randomMessage =
					gratefulMessages[Math.floor(Math.random() * gratefulMessages.length)]

				toast.success(randomMessage, {
					duration: 8000,
					position: "top-center",
				})
			}, 800)

			return () => clearTimeout(timer)
		}
	}, [])

	return null
}
