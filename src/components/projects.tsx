import { buttonVariants } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Github, Link as LinkImage } from "lucide-react";
import Image, { type StaticImageData } from "next/image";

import { PROJECTS } from "@/config/site-config";
import { cn } from "@/lib/utils";
import type { Technology } from "@/types/types";
// import Link from "next/link";
import { Link } from "next-view-transitions";
import TechnologyStack from "./technology-stack";

const Projects = () => {
	return (
		<section id="projects">
			<h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
				My projects
			</h2>
			<ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
				{PROJECTS.map((project) => (
					<ProjectCard key={project.title} {...project} />
				))}
			</ul>
		</section>
	);
};

export type ProjectCardProps = {
	title: string;
	slug: string;
	description: string;
	image: StaticImageData;
	imageAlt: string;
	technologyStack: Technology[];
	githubLink: string;
	projectLink?: string;
};

const ProjectCard = ({
	title,
	slug,
	description,
	technologyStack,
	image,
	imageAlt,
	githubLink,
	projectLink,
}: ProjectCardProps) => {
	return (
		<Card className="flex flex-col">
			<CardHeader>
				<Link href={`/projects/${slug}`} className="hover:underline">
					<CardTitle>{title}</CardTitle>
				</Link>
				{/* <CardDescription>{description}</CardDescription> */}
			</CardHeader>
			<CardContent className="flex flex-col gap-4 flex-1">
				<TechnologyStack stack={technologyStack} />
				<Image
					src={image}
					alt={imageAlt}
					className="rounded-md border"
					style={{ viewTransitionName: `img-${slug}` }}
				/>
			</CardContent>
			<CardFooter className="flex justify-end gap-2">
				<Link
					href={githubLink}
					className={cn(buttonVariants({ variant: "secondary", size: "icon" }))}
					target="_blank"
					referrerPolicy="no-referrer"
				>
					<Github />
				</Link>
				<Link
					href={projectLink ?? "/"}
					className={cn(buttonVariants({ variant: "secondary", size: "icon" }))}
					target="_blank"
					referrerPolicy="no-referrer"
				>
					<LinkImage />
				</Link>
			</CardFooter>
		</Card>
	);
};

export default Projects;
