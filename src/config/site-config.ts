import { ProjectCardProps } from "@/components/projects";

export const siteConfig = {
	title: "whx",
	description: "whoyoux's portfolio",
	keywords: [
		"portfolio",
		"nextjs portfolio",
		"whoyoux",
		"whx",
		"whoyoux portfolio",
		"whx portfolio",
	],

	url:
		process.env.NODE_ENV === "development"
			? "http://localhost:3000"
			: "https://whx.world",
	authors: [
		{
			name: "whoyoux",
			url: "https://github.com/whoyoux",
		},
	],
	creator: "whoyoux",
};

import ecommerce from "@/images/ecommerce.jpg";
import fileconverter from "@/images/file-converter.jpg";
import socialapp from "@/images/social-app.jpg";
import whxref from "@/images/whxref.jpg";
import { Technology } from "@/types/types.d";

export const PROJECTS: ProjectCardProps[] = [
	{
		title: "ecommerce site",
		slug: "ecommerce",
		description: "technologies here",
		image: ecommerce,
		imageAlt: "screenshot of ecommerce site",
		githubLink: "https://github.com/whoyoux/ecommerce",
		projectLink: "https://ecommerce-whx.vercel.app/",
		technologyStack: [
			Technology.TS,
			Technology.NextJS,
			Technology.PrismaORM,
			Technology.TailwindCSS,
			Technology.Stripe,
			Technology.Postgres,
		],
	},
	{
		title: "social app",
		slug: "social-app",
		description: "technologies here",
		image: socialapp,
		imageAlt: "screenshot of social app",
		githubLink: "https://github.com/whoyoux/social-app",
		projectLink: "https://social-app-whx.vercel.app",
		technologyStack: [
			Technology.TS,
			Technology.NextJS,
			Technology.DrizzleORM,
			Technology.TailwindCSS,
			Technology.Postgres,
		],
	},
	{
		title: "url shortener",
		slug: "url-shortener",
		description: "technologies here",
		image: whxref,
		imageAlt: "screenshot of whxref.pl",
		githubLink: "https://github.com/whoyoux/url-shortener",
		projectLink: "https://www.whxref.pl",
		technologyStack: [
			Technology.TS,
			Technology.NextJS,
			Technology.TailwindCSS,
			Technology.Stripe,
			Technology.PrismaORM,
			Technology.Postgres,
		],
	},
	{
		title: "file converter",
		slug: "file-converter",
		description: "technologies here",
		image: fileconverter,
		imageAlt: "screenshot of fileconverter",
		githubLink: "https://github.com/whoyoux/file-converter",
		projectLink: "https://file-converter-whx.vercel.app",
		technologyStack: [
			Technology.TS,
			Technology.NextJS,
			Technology.TailwindCSS,
			Technology.FFmpeg,
		],
	},
];
