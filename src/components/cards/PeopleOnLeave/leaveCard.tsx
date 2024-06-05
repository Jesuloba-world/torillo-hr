import { cn } from "@/lib/utils";
import Image from "next/image";
import User from "@/assets/user.png";
import { format, differenceInDays } from "date-fns";

export const LeaveCard = ({
	endDate,
	leaveType,
	name,
	role,
	startDate,
}: {
	name: string;
	role: string;
	leaveType: string;
	startDate: Date;
	endDate: Date;
}) => {
	return (
		<div
			className={cn(
				"px-3 py-3 h-[195px] w-full rounded-lg flex flex-col items-center",
				{
					"bg-secondary-50": leaveType === "sick leave",
					"bg-bizedge-green-50": leaveType === "travel leave",
					"bg-bizedge-blue-50": leaveType === "maternity leave",
				}
			)}
		>
			<Image src={User} alt="" className="w-8 h-8 mb-[5px]" />
			<div className="space-y-[4px] flex flex-col items-center mb-[13px]">
				<p className="text-sm font-semibold">{name}</p>
				<p className="text-xs">{role}</p>
			</div>
			<p
				className={cn(
					"capitalize text-xs font-semibold px-2.5 py-[2px] rounded-[20px]",
					{
						"bg-secondary-200 text-secondary-700":
							leaveType === "sick leave",
						"bg-bizedge-green-100 text-bizedge-green-500":
							leaveType === "travel leave",
						"bg-bizedge-blue-100 text-bizedge-blue-500":
							leaveType === "maternity leave",
					}
				)}
			>
				{leaveType}
			</p>
			<div className="mt-0.5">
				<p className="capitalize text-[10px] font-semibold text-center">
					<span className="font-normal">start date: </span>
					{format(startDate, "MMM dd")}
				</p>
				<p className="capitalize text-[10px] font-semibold text-center">
					<span className="font-normal">resumption date: </span>
					{format(endDate, "MMM dd")}
				</p>
				<p className="text-[10px] font-semibold text-center">
					{differenceInDays(endDate, startDate)} Day(s)
				</p>
			</div>
		</div>
	);
};
