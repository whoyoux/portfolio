import { type ClassValue, clsx } from "clsx";
import { notFound } from "next/navigation";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const getProjectNameFromGithubLink = (githubLink: string) => {
	const url = new URL(githubLink);
	const path = url.pathname;
	const parts = path.split("/");
	return parts[parts.length - 1];
};

export const getReadme = async (ghRepoName: string) => {
	try {
		const res = await fetch(
			`https://raw.githubusercontent.com/whoyoux/${ghRepoName}/main/README.md`,
		);
		const text = await res.text();
		return text;
	} catch (err) {
		console.error(err);
		return notFound();
	}
};
