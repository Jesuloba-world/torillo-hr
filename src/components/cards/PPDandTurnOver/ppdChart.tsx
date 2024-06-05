"use client";

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	LegendProps,
} from "recharts";

export const PPDChart = () => {
	return (
		<div className="flex flex-col gap-5 w-full">
			<ResponsiveContainer width={"100%"} height={300}>
				<BarChart
					width={600}
					height={300}
					data={data}
					margin={{
						top: 16,
						right: 0,
						left: -28,
						bottom: 0,
					}}
				>
					<CartesianGrid strokeDasharray="0" vertical={false} />
					<XAxis
						axisLine={false}
						dataKey="name"
						tick={{ fontSize: 12 }}
						tickLine={false}
						interval={0}
					/>
					<YAxis
						axisLine={false}
						ticks={[0, 10, 20, 30, 40]}
						tick={{ fontSize: 12 }}
						tickLine={false}
					/>
					<Tooltip />
					<Bar
						dataKey="Male"
						stackId="a"
						fill="hsl(185,60%,81%)"
						barSize={30}
					/>
					<Bar
						dataKey="Female"
						stackId="a"
						fill="hsl(40,94%,81%)"
						barSize={30}
					/>
				</BarChart>
			</ResponsiveContainer>
			<div className="flex gap-6 justify-center">
				<div className="flex items-center gap-2">
					<div className="w-3 h-3 bg-[hsl(185,60%,81%)] rounded-[2px]" />
					<p className="text-xs">Male</p>
				</div>
				<div className="flex items-center gap-2">
					<div className="w-3 h-3 bg-[hsl(40,94%,81%)] rounded-[2px]" />
					<p className="text-xs">Female</p>
				</div>
			</div>
		</div>
	);
};

const data = [
	{ name: "Tech", Male: 0, Female: 0 },
	{ name: "Admin", Male: 0, Female: 0 },
	{ name: "Customer Support", Male: 10, Female: 0 },
	{ name: "Operations", Male: 4, Female: 1 },
	{ name: "Frontdesk", Male: 1, Female: 23 },
	{ name: "Backend", Male: 2, Female: 4 },
];
