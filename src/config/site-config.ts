import { ProjectCardProps } from "@/components/projects";

export const siteConfig = {
	title: "whoyoux's Portfolio",
	description: "nextjs helping under the hood",
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
			: "https://portfolio-whx.vercel.app",
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

export const PROJECTS: ProjectCardProps[] = [
	{
		title: "ecommerce site",
		slug: "/ecommerce",
		description: "technologies here",
		image: ecommerce,
		imageAlt: "screenshot of ecommerce site",
		githubLink: "/",
		projectLink: "/",
	},
	{
		title: "social app",
		slug: "/social-app",
		description: "technologies here",
		image: socialapp,
		imageAlt: "screenshot of social app",
		githubLink: "/",
		projectLink: "/",
	},
	{
		title: "url shortener",
		slug: "/url-shortener",
		description: "technologies here",
		image: whxref,
		imageAlt: "screenshot of whxref.pl",
		githubLink: "/",
		projectLink: "/",
	},
	{
		title: "file converter",
		slug: "/file-converter",
		description: "technologies here",
		image: fileconverter,
		imageAlt: "screenshot of fileconverter",
		githubLink: "/",
		projectLink: "/",
	},
];
