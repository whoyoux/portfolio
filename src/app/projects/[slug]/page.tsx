import { buttonVariants } from "@/components/ui/button";
import { PROJECTS } from "@/config/site-config";
import { cn, getProjectNameFromGithubLink, getReadme } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { compileMDX } from "next-mdx-remote/rsc";
import { unstable_noStore } from "next/cache";
import Link from "next/link";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
	return PROJECTS.map((project) => ({
		slug: project.slug,
	}));
}

export async function generateMetadata({
	params,
}: { params: { slug: string } }) {
	const project = PROJECTS.find((project) => project.slug === params.slug);
	if (!project) return;

	return {
		title: project.title,
		description: project.description,
	};
}

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
	const { slug } = params;

	const project = PROJECTS.find((project) => project.slug === slug);
	if (!project) return notFound();

	const ghProjectName = getProjectNameFromGithubLink(project.githubLink);
	const source = await getReadme(ghProjectName);

	const { content } = await compileMDX({
		source,
		options: {
			parseFrontmatter: true,
			mdxOptions: {
				remarkPlugins: [remarkGfm],
			},
		},
	});
	return (
		<div className="prose pt-4 dark:prose-invert w-full max-w-full">
			<div>
				<Link
					href="/"
					className={cn(
						buttonVariants({ variant: "link" }),
						"px-0 mb-4 flex items-center justify-start gap-1",
					)}
				>
					<ChevronLeft /> Go back
				</Link>
			</div>
			{content}
		</div>
	);
};

export default ProjectPage;
