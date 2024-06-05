import { CardWrapper } from "../wrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Birthdays } from "./birthdays";

export const CelebrationCard = () => {
	return (
		<CardWrapper>
			<div className="px-[15px] py-[22px] flex flex-col gap-[15px]">
				<p className="font-semibold text-xl">Celebration</p>
				<Tabs defaultValue="birthday" className="w-full">
					<TabsList className="">
						<TabsTrigger value="birthday">Birthdays</TabsTrigger>
						<TabsTrigger value="job_anniversary">
							Job Anniversary
						</TabsTrigger>
						<TabsTrigger value="new_hire">New Hire</TabsTrigger>
					</TabsList>
					<TabsContent value="birthday">
						<Birthdays />
					</TabsContent>
					<TabsContent value="job_anniversary">
						Job anniversary here
					</TabsContent>
					<TabsContent value="new_hire">New hire here</TabsContent>
				</Tabs>
			</div>
		</CardWrapper>
	);
};
