"use client"

import * as React from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import Image from "next/image"
import { Check } from "lucide-react"

interface ContactDialogProps {
	triggerClassName?: string
	children?: React.ReactNode
}

export function ContactDialog({
	triggerClassName,
	children,
}: ContactDialogProps) {
	const [open, setOpen] = React.useState(false)
	const [loading, setLoading] = React.useState(false)
	const isDesktop = useMediaQuery("(min-width: 768px)")

	function onOpenChange(v: boolean) {
		setOpen(v)
		if (!v) {
			setTimeout(() => {
				setLoading(false)
			}, 200)
		}
	}

	const Form = (
		<div className="space-y-3">
			<ContactForm
				onResult={(ok, msg) => {
					if (ok) {
						toast.success(msg || "Message sent", {
							icon: <Check className="size-4 text-emerald-500" />,
						})
						setTimeout(() => setOpen(false), 900)
					} else {
						toast.error(msg || "Failed to send message")
					}
				}}
				loading={loading}
				setLoading={setLoading}
			/>
			<div className="flex items-center justify-end gap-2 pt-2">
				<span className="text-[10px] uppercase tracking-wide text-muted-foreground">
					Powered by
				</span>
				<a
					href="https://resend.com"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center opacity-70 hover:opacity-100 transition-opacity"
				>
					<Image
						src="https://www.resend.com/static/brand/resend-wordmark-black.svg"
						alt="Resend"
						className="h-3 dark:hidden"
						width={80}
						height={12}
					/>
					<Image
						src="https://www.resend.com/static/brand/resend-wordmark-white.svg"
						alt="Resend"
						className="h-3 hidden dark:block"
						width={80}
						height={12}
					/>
				</a>
			</div>
		</div>
	)

	if (isDesktop) {
		return (
			<Dialog open={open} onOpenChange={onOpenChange}>
				<DialogTrigger asChild>
					<Button className={triggerClassName}>{children || "Hire me"}</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-lg">
					<DialogHeader>
						<DialogTitle>Get in touch</DialogTitle>
						<DialogDescription>
							Fill out the form and I will get back to you shortly.
						</DialogDescription>
					</DialogHeader>
					{Form}
				</DialogContent>
			</Dialog>
		)
	}

	return (
		<Drawer open={open} onOpenChange={onOpenChange}>
			<DrawerTrigger asChild>
				<Button className={triggerClassName}>{children || "Hire me"}</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader className="text-left">
					<DrawerTitle>Get in touch</DrawerTitle>
					<DrawerDescription>
						Fill out the form and I will get back to you shortly.
					</DrawerDescription>
				</DrawerHeader>
				<div className="px-4">{Form}</div>
				<DrawerFooter className="pt-2">
					<DrawerClose asChild>
						<Button variant="outline">Close</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}

interface ContactFormProps {
	className?: string
	onResult: (ok: boolean, message?: string) => void
	loading: boolean
	setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

function ContactForm({
	className,
	onResult,
	loading,
	setLoading,
}: ContactFormProps) {
	const formRef = React.useRef<HTMLFormElement>(null)

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault()
		setLoading(true)
		toast.loading("Sending message...")
		const formData = new FormData(formRef.current!)
		const payload = Object.fromEntries(formData.entries()) as Record<
			string,
			string
		>

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
			})
			const json: { message?: string } = await res.json()
			if (!res.ok) {
				onResult(false, json.message || "Something went wrong")
			} else {
				formRef.current?.reset()
				onResult(true, json.message || "Message sent")
			}
		} catch (err) {
			const message = err instanceof Error ? err.message : "Unexpected error"
			onResult(false, message)
		} finally {
			setLoading(false)
		}
	}

	return (
		<form
			ref={formRef}
			onSubmit={onSubmit}
			className={cn("grid gap-4", className)}
		>
			{/* Honeypot field (bots will fill) */}
			<input
				type="text"
				name="website"
				tabIndex={-1}
				autoComplete="off"
				className="hidden"
				aria-hidden="true"
			/>
			<div className="grid gap-2">
				<Label htmlFor="name">Name</Label>
				<Input id="name" name="name" placeholder="Your name" required />
			</div>
			<div className="grid gap-2">
				<Label htmlFor="email">Email</Label>
				<Input
					id="email"
					name="email"
					type="email"
					placeholder="you@example.com"
					required
				/>
			</div>
			<div className="grid gap-2">
				<Label htmlFor="company">Company (optional)</Label>
				<Input id="company" name="company" placeholder="Company name" />
			</div>
			<div className="grid gap-2">
				<Label htmlFor="message">Message</Label>
				<textarea
					id="message"
					name="message"
					required
					placeholder="Tell me about the project..."
					className="min-h-[120px] resize-y rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50"
				/>
			</div>
			<Button type="submit" disabled={loading} className="w-full">
				{loading ? "Sending..." : "Send Message"}
			</Button>
		</form>
	)
}
