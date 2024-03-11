import { PROJECTS } from "@/config/site-config";
import { getProjectNameFromGithubLink, getReadme } from "@/lib/utils";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
	return PROJECTS.map((project) => ({
		slug: project.slug,
	}));
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
	return <div className="prose pt-10 dark:prose-invert">{content}</div>;
};

export default ProjectPage;
