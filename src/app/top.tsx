import { OtherActions } from "@/components/otherActions";
import { SearchPeople } from "@/components/searchPeople";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export const PageTop = () => {
	return (
		<div className="flex justify-between items-center">
			<SearchPeople />
			<div className="flex gap-[5px]">
				<Button className="text-white w-[168px] h-[45px] rounded-[10px] rounded-r-none">
					Add New
				</Button>
				{/* This is where the actions dropdown should be, not on the "View all" button. Implemented on both */}
				<OtherActions />
			</div>
		</div>
	);
};
