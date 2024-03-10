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
