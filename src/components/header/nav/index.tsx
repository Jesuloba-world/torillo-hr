"use client";

import { useState } from "react";
import { navElements } from "./constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const NavBar = () => {
	const [selected, setSelected] = useState(navElements[0]);

	return (
		<div className="flex gap-[30px] mt-[15px]">
			{navElements.map((e, i) => (
				<Button
					key={i}
					className={cn(
						"bg-transparent py-[11px] px-[15px] hover:bg-primary-100 rounded-t-[10px] rounded-b-none",
						{
							"bg-primary-50 hover:bg-primary-100 border-b border-b-primary":
								selected === e,
						}
					)}
					onClick={() => setSelected(e)}
				>
					<span
						className={cn("", {
							"text-primary font-semibold": selected === e,
						})}
					>
						{e}
					</span>
				</Button>
			))}
		</div>
	);
};
