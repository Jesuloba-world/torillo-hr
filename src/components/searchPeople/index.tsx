"use client";

import { useState } from "react";
import { people } from "./constants";
import User from "@/assets/user.png";
import Image from "next/image";

export const SearchPeople = () => {
	const [query, setQuery] = useState("");
	const [filteredPeople, setFilteredPeople] = useState<
		{
			name: string;
			job_title: string;
		}[]
	>([]);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.toLowerCase();
		setQuery(value);
		const filtered = people
			.filter((person) => person.name.toLowerCase().includes(value))
			.slice(0, 5); // Get top 5 results
		setFilteredPeople(filtered);
	};

	return (
		<div className="relative">
			<input
				type="text"
				value={query}
				onChange={handleSearch}
				placeholder="Search..."
				className="h-[45px] w-[680px] border rounded-[10px] py-[11px] px-[19px] bg-light-grey"
			/>
			{query !== "" && filteredPeople.length > 0 && (
				<div className="absolute top-[calc(45px+12px)] left-0 w-full border shadow-[1px_5px_22px_4px_rgba(0,0,0,0.15)] rounded-[15px] py-5 px-[18px] space-y-5 bg-white z-30">
					<p className="font-semibold text-darker-grey">
						Search Results
					</p>
					<div className="space-y-2">
						{filteredPeople.map((e, i) => (
							<ResultCard
								name={e.name}
								title={e.job_title}
								key={i}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

const ResultCard = ({ name, title }: { name: string; title: string }) => {
	return (
		<div className="flex items-center gap-[13px] py-3 pl-4 pr-5 rounded-sm border-b-2 hover:bg-light-grey">
			<Image src={User} alt="user" className="h-9 w-9" />
			<div className="flex flex-col space-y-[3px]">
				<p className="font-semibold">{name}</p>
				<span className="text-xs">{title}</span>
			</div>
		</div>
	);
};
