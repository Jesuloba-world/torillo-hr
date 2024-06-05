import { TotalEmployeeCard } from "@/components/cards/TotalEmployee";
import { PageTop } from "./top";
import { AttendanceCard } from "@/components/cards/Attendance";
import { CelebrationCard } from "@/components/cards/Celebration";
import { GenderDistribution } from "@/components/cards/GenderDistribution";
import { PeopleOnLeave } from "@/components/cards/PeopleOnLeave";
import { PPDandTurnOver } from "@/components/cards/PPDandTurnOver";

export default function Home() {
	return (
		<div className="space-y-5">
			<PageTop />
			<div className="grid grid-cols-[1fr_1.846fr] gap-x-6">
				{/* Both columns have different row gaps, so I'll use diffferent flex containers for the columns */}
				<div className="flex flex-col gap-4">
					<TotalEmployeeCard />
					<AttendanceCard />
					<CelebrationCard />
					<GenderDistribution />
				</div>
				<div className="flex flex-col gap-5">
					<PeopleOnLeave />
					<PPDandTurnOver defaultTab="ppd" />
					<PPDandTurnOver defaultTab="turn" />
				</div>
			</div>
		</div>
	);
}
