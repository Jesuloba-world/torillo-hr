"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { useState } from "react";
import User from "@/assets/user.png";
import Cake from "@/assets/cake.svg";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export const Birthdays = () => {
	const [openItems, setOpenItems] = useState(["today"]);

	const handleToggle = (value: string) => {
		setOpenItems((prev) =>
			prev.includes(value)
				? prev.filter((item) => item !== value)
				: [...prev, value]
		);
	};

	return (
		<ScrollArea
			className={cn("h-min w-full transition-all", {
				"h-[320px]": openItems.length > 1,
			})}
		>
			<Accordion
				type="multiple"
				value={openItems}
				onValueChange={setOpenItems}
			>
				<AccordionItem value="today" disabled>
					<AccordionTrigger>
						<p className="text-muted-foreground font-semibold">
							Today
						</p>
					</AccordionTrigger>
					<AccordionContent>
						<div className="space-y-3">
							<PersonBirthdayCard />
							<PersonBirthdayCard />
							<PersonBirthdayCard />
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="upcoming">
					<AccordionTrigger>
						<p className="text-muted-foreground font-semibold">
							Upcoming Birthdays
						</p>
					</AccordionTrigger>
					<AccordionContent>
						<div className="space-y-3">
							<PersonBirthdayCard noBirthday />
							<PersonBirthdayCard noBirthday />
							<PersonBirthdayCard noBirthday />
							<PersonBirthdayCard noBirthday />
							<PersonBirthdayCard noBirthday />
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</ScrollArea>
	);
};

const PersonBirthdayCard = ({ noBirthday }: { noBirthday?: boolean }) => {
	return (
		<div className="py-3 px-2.5 bg-bizedge-blue-50 rounded-[20px] flex justify-between items-center">
			<div className="flex gap-[13px] items-center">
				<Image src={User} alt="" className="h-9 w-9" />
				<div className="space-y-1">
					<p className="font-semibold text-sm">John Micheal</p>
					<p className="text-[10px] leading-3">Lead Designer</p>
				</div>
			</div>
			<div className="flex flex-col items-center gap-0.5">
				{!noBirthday && <Image src={Cake} alt="" />}
				<p className="text-xs text-[13px]">Jan 23</p>
			</div>
		</div>
	);
};
