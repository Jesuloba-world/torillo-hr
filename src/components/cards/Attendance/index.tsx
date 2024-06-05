import { Separator } from "@/components/ui/separator";
import { CardWrapper } from "../wrapper";
import Link from "next/link";
import { Chart } from "./chart";
export const AttendanceCard = () => {
	return (
		<CardWrapper>
			<div className="px-[22px] pt-[22px] pb-[12px] flex flex-col">
				<div className="flex flex-col gap-[14px]">
					<div className="flex flex-col gap-[6px] items-center">
						<p className="text-xs font-semibold text-foreground-grey">
							27, Monday January, 2021
						</p>
						<p className="font-semibold text-xl">
							Today’s Attendance
						</p>
					</div>
					<Chart />
				</div>
				<Separator className="mt-5 mb-2.5" />
				<div className="flex flex-col items-center">
					<Link href={"#"}>
						<p className="font-semibold text-primary text-xs">
							View In Time & Attendance
						</p>
					</Link>
				</div>
			</div>
		</CardWrapper>
	);
};
