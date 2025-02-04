import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site-config";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Noto_Sans_Mono as FontSans } from "next/font/google";
import "./globals.css";

import { ViewTransitions } from "next-view-transitions";

import { Analytics } from "@vercel/analytics/react"

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: siteConfig.title,
		template: `%s - ${siteConfig.title}`,
	},
	description: siteConfig.description,
	keywords: siteConfig.keywords,
	authors: siteConfig.authors,
	creator: siteConfig.creator,
	openGraph: {
		type: "website",
		title: siteConfig.title,
		description: siteConfig.description,
		url: siteConfig.url,
		siteName: siteConfig.title,
		images: [
			{
				url: "https://whx.world/ogimage.jpg",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		creator: "@whoyoux1",
		images: "https://whx.world/ogimage.jpg",
		title: siteConfig.title,
		description: siteConfig.description,
		site: siteConfig.url,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ViewTransitions>
			<html lang="en" suppressHydrationWarning>
				<body
					className={cn(
						"min-h-screen bg-background font-sans antialiased",
						fontSans.variable,
					)}
				>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<div className="max-w-screen-lg mx-auto px-2">
							<Header />
							{children}
							<Footer />
						</div>
						<Analytics />
					</ThemeProvider>
				</body>
			</html>
		</ViewTransitions>
	);
}
