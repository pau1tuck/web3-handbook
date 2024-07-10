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
			href: "/docs/core-concepts",
			topics: [
				{
					title: "Introduction to Web3",
					href: "/introduction",
					chapters: [
						{
							title: "Dog",
							href: "/blockchain-fundamentals",
						},
                        {
							title: "Cryptocurrency",
							href: "/cryptocurrency",
						},
                        {
							title: "Smart Contracts",
							href: "/smart-contracts",
						},
					],

				},
                {
                    title: "Blockchain Fundamentals",
					href: "/blockchain-fundamentals",
                    chapters: [
                        {
							title: "What is Blockchain?",
							href: "/what-is-blockchain",
						},
                    ]
                },
                {
                    title: "Cryptocurrency",
					href: "/cryptocurrency",
                    chapters: []
                }
			],

		},
		{
			title: "Ethereum",
			href: "/docs/ethereum",
			topics: [],
		},
		{
			title: "Solana",
			href: "/docs/solana",
			topics: [],
		},
		{
			title: "deFi",
			href: "/docs/defi",
			topics: [],
		},
		{
			title: "Digital Assets",
			href: "/docs/digital-assets",
			topics: [],
		},
	],
};

export const ROUTES = config.sections.flatMap(({ href, topics }) => {
	return topics.flatMap((topic) => {
		return topic.chapters.map((chapter) => {
			return {
				title: chapter.title,
				href: `${href}${topic.href}${chapter.href}`,
			};
		});
	});
});
