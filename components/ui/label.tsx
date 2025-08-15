import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const labelVariants = cva(
	"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
	{
		variants: {
			variant: {
				default: "",
				muted: "text-muted-foreground",
			},
			size: {
				default: "",
				sm: "text-xs",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
)

export interface LabelProps
	extends React.LabelHTMLAttributes<HTMLLabelElement>,
		VariantProps<typeof labelVariants> {
	asChild?: boolean
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "label"
		return (
			<Comp
				data-slot="label"
				ref={ref}
				className={cn(labelVariants({ variant, size, className }))}
				{...props}
			/>
		)
	}
)
Label.displayName = "Label"

export { Label, labelVariants }
