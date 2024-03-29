import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Hero = () => {
	return (
		<section className="flex flex-col gap-8 py-20">
			<h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
				about me
			</h1>
			<p className="leading-7">
				Hi, I&apos;m Kamil, a 20-year-old IT student from Poland with a passion
				for technology. Eager to dive deep into the world of IT, I thrive on
				challenges and enjoy exploring new concepts and technologies. Constantly
				seeking opportunities to learn and grow, I&apos;m excited to embark on
				new projects and contribute to the ever-evolving tech landscape.
			</p>
			<p>currently looking for a job 🙌</p>
			<div>
				<Link
					href="mailto:teczakm@gmail.com"
					className={cn(buttonVariants({}), "font-semilbold")}
				>
					contact
				</Link>
			</div>
		</section>
	);
};

export default Hero;
