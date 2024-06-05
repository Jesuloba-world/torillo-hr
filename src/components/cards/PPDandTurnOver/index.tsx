import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardWrapper } from "../wrapper";
import { PPDChart } from "./ppdChart";
import { TurnOverChart } from "./turnOverChart";

export const PPDandTurnOver = ({
	defaultTab = "ppd",
}: {
	defaultTab?: "ppd" | "turn";
}) => {
	return (
		<CardWrapper>
			<div className="px-[30px] py-5">
				<Tabs defaultValue={defaultTab} className="w-full">
					<TabsList className="">
						<TabsTrigger value="ppd">
							People Per Department
						</TabsTrigger>
						<TabsTrigger value="turn">Turn Over</TabsTrigger>
					</TabsList>
					<TabsContent value="ppd">
						<PPDChart />
					</TabsContent>
					<TabsContent value="turn">
						<TurnOverChart />
					</TabsContent>
				</Tabs>
			</div>
		</CardWrapper>
	);
};
