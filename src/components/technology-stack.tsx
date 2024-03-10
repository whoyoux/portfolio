import { Badge } from "@/components/ui/badge";
import { Technology } from "@/types/types";

const TechnologyStack = ({ stack }: { stack: Technology[] }) => {
	return (
		<div className="flex items-center gap-2 w-full flex-wrap">
			{stack.map((tech) => (
				<Badge variant="secondary">{tech}</Badge>
			))}
		</div>
	);
};

export default TechnologyStack;
