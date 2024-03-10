import { cn } from "@/lib/utils";
import { Github, Mail } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Footer = () => {
	return (
		<footer className="py-10 mt-20 border-t flex justify-between items-center">
			<h4 className="text-xl font-semibold tracking-tight">
				&#169; 2024 whoyoux
			</h4>
			<div className="flex items-center gap-2">
				<Link
					href="https://github.com/whoyoux"
					rel="noopener noreferrer"
					target="_blank"
					className={cn(buttonVariants({ size: "icon", variant: "secondary" }))}
				>
					<Github />
				</Link>
				<Link
					href="mailto:teczakm@gmail.com"
					className={cn(buttonVariants({ size: "icon", variant: "secondary" }))}
				>
					<Mail />
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
