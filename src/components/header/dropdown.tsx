"use client";

import { useState } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Percent from "@/assets/percent.svg";
import Image from "next/image";
import { dropDownOptions } from "./constants";

export const HeaderDropDown = () => {
	const [selected, setSelected] = useState(dropDownOptions[0]);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				className={
					"px-[15px] py-[11px] bg-light-grey rounded-[60px] flex gap-2.5"
				}
			>
				<div className="grid place-items-center w-5 h-5 bg-sky-blue rounded">
					<Image src={Percent} alt="" />
				</div>
				<span className="text-foreground-grey font-semibold text-sm">
					{selected}
				</span>
				<ChevronDown className="text-foreground-grey" />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{dropDownOptions.map((e, i) => (
					<>
						<DropdownMenuItem
							key={i}
							onClick={() => setSelected(e)}
						>
							{e}
						</DropdownMenuItem>
						{i < dropDownOptions.length - 1 && (
							<DropdownMenuSeparator />
						)}
					</>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
