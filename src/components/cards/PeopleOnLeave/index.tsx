import { Button } from "@/components/ui/button";
import { CardWrapper } from "../wrapper";
import { LeaveCard } from "./leaveCard";
import { OtherActions } from "@/components/otherActions";

export const PeopleOnLeave = () => {
	return (
		<CardWrapper>
			<div className="px-[26.5px] pt-[21.5px] pb-[19.5px] space-y-[22px]">
				<div className="flex justify-between">
					<div className="space-y-[6px]">
						<p className="font-semibold text-xl">People On Leave</p>
						<p className="text-xs">
							View employees on leave at a glance.
						</p>
					</div>
					{/* View all should take a user to a more detailed page, but the design 😒 */}
					<OtherActions
						button={
							<Button className="bg-muted hover:bg-bizedge-green-100 py-2.5 px-[22px]">
								View all
							</Button>
						}
					/>
				</div>
				<div className="flex gap-4">
					{leaveData.map((e, i) => (
						<LeaveCard key={i} {...e} />
					))}
				</div>
			</div>
		</CardWrapper>
	);
};

const leaveData = [
	{
		name: "John Micheal",
		role: "Lead designer",
		leaveType: "sick leave",
		startDate: new Date("January 23, 2024"),
		endDate: new Date("January 24, 2024"),
	},
	{
		name: "Godwin Folorunke",
		role: "Lead marketer",
		leaveType: "sick leave",
		startDate: new Date("January 23, 2024"),
		endDate: new Date("January 26, 2024"),
	},
	{
		name: "Godwin Folorunke",
		role: "Designer",
		leaveType: "travel leave",
		startDate: new Date("January 23, 2024"),
		endDate: new Date("January 31, 2024"),
	},
	{
		name: "John Micheal",
		role: "Lead designer",
		leaveType: "maternity leave",
		startDate: new Date("January 23, 2024"),
		endDate: new Date("February 24, 2024"),
	},
];
