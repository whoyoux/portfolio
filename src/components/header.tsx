import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const Header = () => {
	return (
		<header className="w-full border-b py-4 flex items-center justify-between">
			<h1 className="font-semibold">whx</h1>
			<div className="flex items-center gap-2">
				<Button variant={"link"}>about</Button>
				<ThemeToggle />
			</div>
		</header>
	);
};

export default Header;
