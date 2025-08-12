import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ModeSwitcher } from "@/components/mode-switcher";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="flex container w-full z-50 items-center justify-center h-14 sm:h-16 fixed top-0 left-0 right-0 bg-transparent">
      <div className="flex items-center w-full px-0 sm:px-2 py-2 justify-between h-14 bg-background border-0 sm:border sm:border-border sm:rounded-lg">
        <Link href="/" className="focus-ring p-1 text-sm font-bold">
          <Image
            src={siteConfig.header.logoImage}
            alt="Logo"
            width={30}
            height={30}
            className="rounded-full border border-border aspect-square"
          />
        </Link>

        <nav className="flex items-center gap-3 h-full">
          <div className="sm:flex items-center gap-3 hidden">
            {siteConfig.header.nav.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={cn(
                  buttonVariants({
                    variant: "link",
                    size: "sm",
                  }),
                  "px-1.5 has-[>svg]:px-1.5 text-foreground/70 gap-1"
                )}
              >
                {item.title}
                {item.external && <ArrowUpRightIcon />}
              </Link>
            ))}
            <Separator
              orientation="vertical"
              className="data-[orientation=vertical]:h-5"
            />
          </div>

          <ModeSwitcher />

          <Link
            href={siteConfig.header.button.href}
            className={buttonVariants({ size: "sm" })}
          >
            {siteConfig.header.button.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
