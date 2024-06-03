import Logo from "@/assets/logo.svg";
import Image from "next/image";
import { HeaderDropDown } from "./dropdown";
import { Icons } from "./constants";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Separator } from "../ui/separator";
import { NavBar } from "./nav";

export const Header = () => {
	return (
		<div className="pt-[18px] px-[49px] border-b mb-[17.5px]">
			<div className="flex justify-between pb-[15px] items-center">
				<div className="flex gap-5 items-center">
					<Image src={Logo} alt={"logo"} />
					<HeaderDropDown />
				</div>
				<div className="flex items-center">
					<div className="flex gap-[45px] items-center">
						{Icons.map((e, i) => (
							<Image src={e} alt="" key={i} />
						))}
					</div>
					<Separator
						orientation="vertical"
						className="ml-[24.5px] mr-[12.5px] h-[29px]"
					/>
					<div>
						<Avatar className={"rounded-lg"}>
							<AvatarFallback
								className={
									"bg-secondary text-secondary-foreground rounded-lg"
								}
							>
								w
							</AvatarFallback>
						</Avatar>
					</div>
				</div>
			</div>
			<Separator />
			<NavBar />
		</div>
	);
};
