import { Badge } from "@/components/ui/badge";
import { Technology } from "@/types/types";

const TechnologyStack = ({ stack }: { stack: Technology[] }) => {
	return (
		<div className="flex items-center gap-2 w-full flex-wrap">
			{stack.map((tech, idx) => (
				<Badge
					variant="secondary"
					key={`${tech}_${
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						idx
					}`}
				>
					{tech}
				</Badge>
			))}
		</div>
	);
};

export default TechnologyStack;
