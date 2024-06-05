"use client";

import {
	PieChart,
	Pie,
	Cell,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const data = [
	{ name: "Male", value: 20, color: "hsl(185,60%,81%)" },
	{ name: "Female", value: 12, color: "hsl(40,94%,81%)" },
	{ name: "Not Specified", value: 4, color: "hsl(0,100%,81%)" },
];

export const GenderDistributionChart = () => {
	return (
		<div className="flex flex-col gap-2.5 w-full">
			<ResponsiveContainer height={280} width="100%">
				<PieChart width={270} height={270}>
					<Pie
						data={data}
						cx="50%"
						cy="50%"
						innerRadius={80}
						outerRadius={140}
						fill="#8884d8"
						paddingAngle={5}
						dataKey="value"
						cornerRadius={10}
					>
						{data.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={entry.color} />
						))}
					</Pie>
					<Tooltip />
					<text
						x="50%"
						y="45%"
						textAnchor="middle"
						dominantBaseline="middle"
						className="font-semibold text-2xl text-foreground"
						fill="currentcolor"
					>
						<tspan x="50%" dy="0">
							{data.reduce((a, b) => a + b.value, 0)}
						</tspan>
						<tspan x="50%" dy="1.4em">
							People
						</tspan>
					</text>
				</PieChart>
			</ResponsiveContainer>
			<div className="flex gap-2 justify-around">
				{data.map((e, i) => (
					<div key={i} className="flex items-center gap-2">
						<div
							className="w-3 h-3"
							style={{ backgroundColor: e.color }}
						/>
						<p className="text-xs">{e.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};
