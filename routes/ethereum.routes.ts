// for page navigation & to sort on leftbar
export const ROUTES = [
	{
		title: "Introduction to Ethereum",
		href: "/about",
		items: [{ title: "Introduction to Ethereum", href: "/introduction" }],
	},
	{
		title: "History of Ethereum",
		href: "/history",
		items: [{ title: "getSession", href: "history" }],
	},
];

export const ethereum_routes = ROUTES.flatMap(({ href, items }) => {
	return items.map((link) => {
		return {
			title: link.title,
			href: href + link.href,
		};
	});
});
