// @/lib/config.ts
interface Chapter {
	title: string;
	href: string;
}

interface Topic {
	title: string;
	href: string;
	chapters: Chapter[];
}

interface Module {
	title: string;
	href: string;
	topics: Topic[];
}

export interface Config {
	app: {
		title: string;
		description: string;
	};
	modules: Module[];
}

export const config: Config = {
	app: {
		title: "Web3 Handbook",
		description: "This is the best place to learn about Web3.",
	},
	modules: [
		{
			title: "Blockchain",
			href: "/docs/getting-started/introduction",
			topics: [
				{
					title: "Introduction",
					href: "introduction",
					chapters: [
						{
							title: "Introduction to Web3",
							href: "/introduction-to-web3",
						},
					],
				},
			],
		},
		{
			title: "Ethereum",
			href: "/ethereum/introduction-to-ethereum",
			topics: [],
		},
		{
			title: "dApps",
			href: "/dapps/introduction-to-dapps",
			topics: [],
		},
		{
			title: "deFi",
			href: "/defi/introduction-to-defi",
			topics: [],
		},
		{
			title: "Digital Assets",
			href: "/digital-assets/introduction-to-nfts",
			topics: [],
		},
	],
};

export const ROUTES = config.modules.flatMap(({ href, topics }) => {
	return topics.map((topic) => {
		return {
			title: topic.title,
			href: `${href}/${topic.href}`,
			chapters: topic.chapters,
		};
	});
});
