import { MotionProvider } from "@/components/providers/motion-provider"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { VisitorWelcome } from "@/components/visitor-welcome"

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<MotionProvider>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				<VisitorWelcome />
				{children}
				<Toaster />
			</ThemeProvider>
		</MotionProvider>
	)
}
