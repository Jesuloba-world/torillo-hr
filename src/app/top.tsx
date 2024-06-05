import { SearchPeople } from "@/components/searchPeople";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const PageTop = () => {
	return (
		<div className="flex justify-between items-center">
			<SearchPeople />
			<div className="flex gap-[5px]">
				<Button className="text-white w-[168px] h-[45px] rounded-[10px] rounded-r-none">
					Add New
				</Button>
				<Button className="rounded-[10px] rounded-l-none h-[45px] w-[32px] p-0">
					<ChevronDown className="text-white" />
				</Button>
			</div>
		</div>
	);
};
