import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

const Header = () => {
	return (
		<header className="w-full border-b py-4 flex items-center justify-between">
			<Link href="/">
				<h1 className="font-semibold hover:underline">whx</h1>
			</Link>
			<div className="flex items-center gap-2">
				<ThemeToggle />
			</div>
		</header>
	);
};

export default Header;
