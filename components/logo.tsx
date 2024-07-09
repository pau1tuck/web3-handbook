import { config } from "@/lib/config";
import { ParenthesesIcon } from "lucide-react";
import Link from "next/link";

export function Logo() {
	return (
		<Link href="/" className="flex items-center gap-2.5">
			<ParenthesesIcon className="w-6 h-6 text-muted-foreground" />
			<h2 className="text-md font-bold">{config.app.title}</h2>
		</Link>
	);
}
