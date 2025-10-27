"use client"

import * as React from "react"

export function useMediaQuery(query: string) {
	const [value, setValue] = React.useState(false)

	React.useEffect(() => {
		if (typeof window === "undefined") return
		const mql = window.matchMedia(query)
		const onChange = () => setValue(mql.matches)
		onChange()
		mql.addEventListener("change", onChange)
		return () => mql.removeEventListener("change", onChange)
	}, [query])

	return value
}
