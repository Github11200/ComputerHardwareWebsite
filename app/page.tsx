import * as React from "react";
import HardwareCard from "@/components/ui/hardware-card";
import Link from "next/link";

export default function Home() {
	return (
		<div className="p-10">
			<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
				Computer Hardware
			</h1>
			<p className="[&:not(:first-child)]:mt-6 w-[50%] mx-auto">
				Try clicking on any of the boxes that you want to learn more
				about, and then click on the learn more button to access a
				chatbot where you can ask more questions.
			</p>
			<div
				className="border rounded-lg bg-card text-card-foreground shadow w-[80rem] gap-8 p-8 grid grid-cols-7
			 auto-rows-max mx-auto mt-10"
			>
				<h2 className="text-4xl col-span-7 text-center font-semibold tracking-tight m-0 p-0">
					Mother Board
				</h2>
				<HardwareCard rowSpan={4} colSpan={3} name="CPU" />
				<HardwareCard rowSpan={5} colSpan={1} name="Heat Sink" />
				<HardwareCard rowSpan={2} colSpan={3} name="Hard Drive / SSD" />
				<HardwareCard rowSpan={2} colSpan={3} name="RAM" />
				<HardwareCard
					rowSpan={1}
					colSpan={3}
					name="Power Supply / Battery"
				/>
				<HardwareCard rowSpan={1} colSpan={3} name="Expansion Slots" />
				<HardwareCard rowSpan={1} colSpan={7} name="GPU" />
			</div>
			<div className="mt-10">
				<p className="leading-7 [&:not(:first-child)]:mt-6">
					Made by{" "}
					<Link
						href={"https://github.com/Github11200"}
						className="underline"
					>
						Jinay Patel
					</Link>
				</p>
			</div>
		</div>
	);
}
