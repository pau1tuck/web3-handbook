// @/lib/config.ts
export const config = {
	app: {
		title: "Web3 Handbook",
		description: "This is the best place to learn about Web3.",
	},
	navlinks: [
		{
			title: "Blockchain",
			href: "/docs/blockchain/introduction-to-blockchain",
		},
		{
			title: "Ethereum",
			href: "/docs/ethereum/introduction-to-ethereum",
		},
		{
			title: "dApps",
			href: "/docs/dapps/introduction-to-dapps",
		},
		{
			title: "deFi",
			href: "/docs/defi/introduction-to-defi",
		},
		{
			title: "Digital Assets",
			href: "/docs/digital-assets/introduction-to-nfts",
		},
	],
	topics: [
		// Blockchain
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
				{
					title: "Consensus Mechanisms",
					href: "/consensus-mechanisms",
				},
				{
					title: "Types of Blockchains",
					href: "/types-of-blockchains",
				},
				{ title: "Use Cases", href: "/blockchain-use-cases" },
			],
		},
		// Ethereum
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
				{
					title: "Gas and Transactions",
					href: "/gas-and-transactions",
				},
				{ title: "ERC Standards", href: "/erc-standards" },
				{
					title: "Development Tools",
					href: "/ethereum-development-tools",
				},
			],
		},
		// dApps
		{
			title: "dApps",
			href: "dapps",
			items: [
				{
					title: "Introduction to dApps",
					href: "/introduction-to-dapps",
				},
				{
					title: "Architecture of dApps",
					href: "/architecture-of-dapps",
				},
				{ title: "Popular dApps", href: "/popular-dapps" },
				{ title: "Developing dApps", href: "/developing-dapps" },
				{
					title: "Tools and Frameworks",
					href: "/dapps-tools-and-frameworks",
				},
			],
		},
		// DeFi
		{
			title: "deFi",
			href: "defi",
			items: [
				{
					title: "Introduction to DeFi",
					href: "/introduction-to-defi",
				},
				{ title: "Key Components", href: "/key-components" },
				{
					title: "Yield Farming and Staking",
					href: "/yield-farming-and-staking",
				},
				{
					title: "Risks and Security in DeFi",
					href: "/risks-and-security-in-defi",
				},
				{
					title: "Regulatory Considerations",
					href: "/regulatory-considerations",
				},
			],
		},
		// Digital Assets
		{
			title: "Digital Assets",
			href: "digital-assets",
			items: [
				{
					title: "Introduction to NFTs",
					href: "/introduction-to-nfts",
				},
				{ title: "Use Cases for NFTs", href: "/use-cases-for-nfts" },
				{
					title: "Creating and Trading NFTs",
					href: "/creating-and-trading-nfts",
				},
				{ title: "NFT Marketplaces", href: "/nft-marketplaces" },
				{
					title: "Legal and Ethical Considerations",
					href: "/legal-and-ethical-considerations",
				},
			],
		},
	],
};

export const ROUTES = config.topics.flatMap(({ href, items }) => {
	return items.map((link) => {
		return {
			title: link.title,
			href: `${href}${link.href}`,
		};
	});
});
