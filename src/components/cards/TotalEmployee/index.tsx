import Image from "next/image";
import Rectangle from "@/assets/rectangle-pattern.svg";
import Link from "next/link";

export const TotalEmployeeCard = () => {
	return (
		<div className="rounded-[12px] bg-[hsl(0,0%,97%)] relative h-[133.57px] overflow-hidden">
			<Image
				src={Rectangle}
				alt=""
				className="absolute bottom-0 right-0"
			/>
			<div className="relative h-full w-full pt-[16px] pb-[7px] pr-[12px] pl-[15px] flex flex-col">
				<p className="font-semibold">Total Employees</p>
				<div className="mt-auto flex items-center justify-between">
					<Link href="#">
						<p className="text-sm font-semibold text-primary underline">
							View all employees
						</p>
					</Link>
					<p className="text-[28px] font-semibold">36</p>
				</div>
			</div>
		</div>
	);
};
