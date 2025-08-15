import { MotionProvider } from "@/components/providers/motion-provider"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { Toaster } from "react-hot-toast"

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<MotionProvider>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				{children}
				<Toaster
					position="top-right"
					toastOptions={{
						style: { fontSize: "0.875rem" },
						success: {
							iconTheme: { primary: "hsl(var(--primary))", secondary: "#fff" },
						},
					}}
				/>
			</ThemeProvider>
		</MotionProvider>
	)
}
