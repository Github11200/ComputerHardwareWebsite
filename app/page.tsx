import * as React from "react";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface HardwareCardProps {
	rowSpan: number;
	colSpan: number;
	name: string;
}

function HardwareCard({ rowSpan, colSpan, name }: HardwareCardProps) {
	return (
		<Card
			className={`w-full h-full col-span-${colSpan} row-span-${rowSpan} flex items-center justify-center`}
		>
			<h2 className="text-center text-3xl font-semibold tracking-tight py-24 px-2">
				{name}
			</h2>
		</Card>
	);
}

export default function Home() {
	const cardParameters: Array<HardwareCardProps> = [
		{
			rowSpan: 4,
			colSpan: 3,
			name: "CPU",
		},
		{
			rowSpan: 5,
			colSpan: 1,
			name: "Heat Sink",
		},
		{
			rowSpan: 2,
			colSpan: 3,
			name: "Hard Drive / SSD",
		},
		{
			rowSpan: 2,
			colSpan: 3,
			name: "RAM",
		},
		{
			rowSpan: 1,
			colSpan: 3,
			name: "Power Supply / Battery",
		},
		{
			rowSpan: 1,
			colSpan: 3,
			name: "Expansion Slots",
		},
		{
			rowSpan: 1,
			colSpan: 7,
			name: "GPU",
		},
	];

	return (
		<div className="p-10">
			<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
				Computer Hardware
			</h1>
			<div
				className="border rounded-lg bg-card text-card-foreground shadow w-[80rem] gap-8 p-8 grid grid-cols-7
		mx-auto mt-16"
			>
				<h2 className="text-4xl col-span-7 text-center font-semibold tracking-tight m-0 p-0">
					Mother Board
				</h2>
				{cardParameters.map((object, index) => {
					return (
						<Card
							className={`w-full h-full col-span-${object.colSpan} row-span-${object.rowSpan} flex items-center justify-center`}
							key={index}
						>
							<h2 className="text-center text-3xl font-semibold tracking-tight py-24 px-2">
								{object.name}
							</h2>
						</Card>
					);
				})}
			</div>
		</div>
	);
}
