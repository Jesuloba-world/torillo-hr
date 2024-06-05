"use client";

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

export const Chart = () => {
	const data = [
		{ name: "Attendance", Present: 20, Absent: 10, OutOfWork: 6 },
	];

	return (
		<div className="flex flex-col gap-[14px] w-full">
			<ResponsiveContainer width={"100%"} height={13}>
				<BarChart
					width={300}
					height={13}
					data={data}
					layout="vertical"
					margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
				>
					<XAxis type="number" hide />
					<YAxis type="category" dataKey="name" hide />
					<Bar
						dataKey="Present"
						stackId="a"
						fill="hsl(222,100%,89%)"
						radius={[44, 0, 0, 44]}
					/>
					<Bar
						dataKey="Absent"
						stackId="a"
						fill="hsl(0,100%,95%)"
						radius={[0, 0, 0, 0]}
					/>
					<Bar
						dataKey="OutOfWork"
						stackId="a"
						fill="hsl(39,92%,83%)"
						radius={[0, 44, 44, 0]}
					/>
				</BarChart>
			</ResponsiveContainer>
			<div className="flex gap-2 justify-around">
				<div className="flex items-center gap-2">
					<div className="w-3 h-3 bg-[hsl(222,100%,89%)] rounded-[2px]" />
					<p className="text-xs">Present</p>
				</div>
				<div className="flex items-center gap-2">
					<div className="w-3 h-3 bg-[hsl(0,100%,95%)] rounded-[2px]" />
					<p className="text-xs">Absent</p>
				</div>
				<div className="flex items-center gap-2">
					<div className="w-3 h-3 bg-[hsl(39,92%,83%)] rounded-[2px]" />
					<p className="text-xs">Out of Work</p>
				</div>
			</div>
		</div>
	);
};
