export const ROUTES = [
	// Blockchain Section
	{
		title: "Blockchain",
		href: "blockchain",
		items: [
			{
				title: "Introduction to Blockchain",
				href: "/introduction-to-blockchain",
			},
			{
				title: "Blockchain Fundamentals",
				href: "/blockchain-fundamentals",
			},
			{ title: "Consensus Mechanisms", href: "/consensus-mechanisms" },
			{ title: "Types of Blockchains", href: "/types-of-blockchains" },
			{ title: "Use Cases", href: "/blockchain-use-cases" },
		],
	},
	// Ethereum Section
	{
		title: "Ethereum",
		href: "ethereum",
		items: [
			{
				title: "Introduction to Ethereum",
				href: "/introduction-to-ethereum",
			},
			{
				title: "Ethereum Virtual Machine",
				href: "/ethereum-virtual-machine",
			},
			{ title: "Solidity", href: "/solidity" },
			{ title: "Gas and Transactions", href: "/gas-and-transactions" },
			{ title: "ERC Standards", href: "/erc-standards" },
			{ title: "Development Tools", href: "/ethereum-development-tools" },
		],
	},
	// dApps Section
	{
		title: "dApps",
		href: "dapps",
		items: [
			{ title: "Introduction to dApps", href: "/introduction-to-dapps" },
			{ title: "Architecture of dApps", href: "/architecture-of-dapps" },
			{ title: "Popular dApps", href: "/popular-dapps" },
			{ title: "Developing dApps", href: "/developing-dapps" },
			{
				title: "Tools and Frameworks",
				href: "/dapps-tools-and-frameworks",
			},
		],
	},
];

export const page_routes = ROUTES.flatMap(({ href, items }) => {
	return items.map((link) => {
		return {
			title: link.title,
			href: href + link.href,
		};
	});
});
