import { TotalEmployeeCard } from "@/components/cards/TotalEmployee";
import { PageTop } from "./top";
import { AttendanceCard } from "@/components/cards/Attendance";
import { CelebrationCard } from "@/components/cards/Celebration";
import { GenderDistribution } from "@/components/cards/GenderDistribution";

export default function Home() {
	return (
		<div className="space-y-5">
			<PageTop />
			<div className="grid grid-cols-[1fr_1.846fr] gap-x-6">
				<div className="flex flex-col gap-4">
					<TotalEmployeeCard />
					<AttendanceCard />
					<CelebrationCard />
					<GenderDistribution />
				</div>
				<div className="bg-indigo-700 text-white"></div>
			</div>
		</div>
	);
}
