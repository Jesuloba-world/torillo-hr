"use client";

import { ChevronDown } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import React from "react";

export const OtherActions = ({
	buttonText,
	button,
}: {
	buttonText?: React.ReactNode;
	button?: React.ReactNode;
}) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				{button ? (
					button
				) : (
					<Button className="rounded-[10px] rounded-l-none h-[45px] w-[32px] p-0">
						{buttonText || <ChevronDown className="text-white" />}
					</Button>
				)}
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{actions.map((e, i) => (
					<>
						<DropdownMenuItem
							key={i}
							className="py-3 pl-[15px] pr-[25px] w-60"
						>
							{e}
						</DropdownMenuItem>
						{i < actions.length - 1 && <DropdownMenuSeparator />}
					</>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

const actions = [
	"Add People",
	"Import People List",
	"Add Timeoff",
	"Add Benefit",
	"Add Training",
	"Upload Document",
	"Create Task",
	"Add Department",
];
