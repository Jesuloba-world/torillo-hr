import { CardWrapper } from "../wrapper";
import { GenderDistributionChart } from "./chart";

export const GenderDistribution = () => {
	return (
		<CardWrapper>
			<div className="p-[30px] space-y-6">
				<div className="space-y-[6px]">
					<p className="font-semibold text-xl">
						Employee Gender Distribution
					</p>
					<p className="text-sm">
						Here is a breakdown of gender distribution
					</p>
				</div>
				<GenderDistributionChart />
			</div>
		</CardWrapper>
	);
};
