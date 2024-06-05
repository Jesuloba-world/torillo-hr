"use client";

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const data = [
	{ name: "Tech", uv: 23, pv: 27 },
	{ name: "Admin", uv: 7, pv: 13 },
	{ name: "Customer Support", uv: 3, pv: 8 },
	{ name: "Operations", uv: 4, pv: 11 },
	{ name: "Frontdesk", uv: 12, pv: 6 },
	{ name: "Logistics", uv: 3, pv: 6 },
];

export const TurnOverChart = () => {
	return (
		<div>
			<ResponsiveContainer width="100%" height={300}>
				<LineChart
					data={data}
					margin={{
						top: 20,
						right: 32,
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
						padding={{ left: 30, right: 10 }}
						dy={10}
					/>
					<YAxis
						axisLine={false}
						ticks={[0, 10, 20, 30, 40]}
						tick={{ fontSize: 12 }}
						tickLine={false}
					/>
					<Line
						type="linear"
						dataKey="uv"
						stroke="hsl(0,100%,73%)"
						dot={false}
					/>
					<Line
						type="linear"
						dataKey="pv"
						stroke="hsl(185,60%,41%)"
						dot={false}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};
