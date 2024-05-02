import * as React from "react";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function Home() {
	return (
		<div className="p-10">
			<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
				Computer Hardware
			</h1>
			<div className="border rounded-lg bg-card text-card-foreground shadow w-[80rem] gap-8 p-8 grid grid-cols-5 grid-rows-5 mx-auto">
				<Card className="w-full h-full col-span-2 row-span-3">
					<h2 className="scroll-m-20 text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0">
						CPU
					</h2>
				</Card>
				<Card className="w-full h-full col-span-3 row-span-3">
					<h2 className="scroll-m-20 text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0">
						GPU
					</h2>
				</Card>
				<Card className="w-full h-full">
					<h2 className="scroll-m-20 text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0">
						Hard Drive / SSD
					</h2>
				</Card>
				<Card className="w-full h-full">
					<h2 className="scroll-m-20 text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0">
						Power Supply / Battery
					</h2>
				</Card>
				<Card className="w-full h-full">
					<h2 className="scroll-m-20 text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0">
						RAM
					</h2>
				</Card>{" "}
				<Card className="w-full h-full">
					<h2 className="scroll-m-20 text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0">
						Heat Sink
					</h2>
				</Card>
				<Card className="w-full h-full">
					<h2 className="scroll-m-20 text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0">
						Expansion Slots
					</h2>
				</Card>
			</div>
		</div>
	);
}
