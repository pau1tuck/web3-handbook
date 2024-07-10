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

interface Section {
	title: string;
	href: string;
	topics: Topic[];
}

export interface Config {
	app: {
		title: string;
		description: string;
	};
	sections: Section[];
}

export const config: Config = {
	app: {
		title: "Web3 Handbook",
		description: "This is the best place to learn about Web3.",
	},
	sections: [
		{
			title: "Core Concepts",
			href: "/docs/core-concepts/introduction",
			topics: [
				{
					title: "Introduction to Web3",
					href: "/docs/core-concepts/introduction",
					chapters: [
						{
							title: "Blockchain Technology",
							href: "/docs/core-concepts/blockchain-technology",
						},
                        {
							title: "Cryptocurrency",
							href: "/docs/core-concepts/cryptocurrency",
						},
					],
				},
			],
		},
		{
			title: "Blockchains",
			href: "/blockchains/blockchains",
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

export const ROUTES = config.sections.flatMap(({ href, topics }) => {
	return topics.map((topic) => {
		return {
			title: topic.title,
			href: `${href}/${topic.href}`,
			chapters: topic.chapters,
		};
	});
});
