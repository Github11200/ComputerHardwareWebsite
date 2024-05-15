import * as React from "react";
import HardwareCard from "@/components/ui/hardware-card";

export default function Home() {
	return (
		<div className="p-10">
			<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
				Computer Hardware
			</h1>
			<div
				className="border rounded-lg bg-card text-card-foreground shadow w-[80rem] gap-8 p-8 grid grid-cols-7
			 auto-rows-max mx-auto mt-16"
			>
				<h2 className="text-4xl col-span-7 text-center font-semibold tracking-tight m-0 p-0">
					Mother Board
				</h2>
				<HardwareCard
					rowSpan={4}
					colSpan={3}
					name="CPU"
					description="aldsjflkasdjfkl;"
				/>
				<HardwareCard
					rowSpan={5}
					colSpan={1}
					name="Heat Sink"
					description="aldsjflkasdjfkl;"
				/>
				<HardwareCard
					rowSpan={2}
					colSpan={3}
					name="Hard Drive / SSD"
					description="aldsjflkasdjfkl;"
				/>
				<HardwareCard
					rowSpan={2}
					colSpan={3}
					name="RAM"
					description="aldsjflkasdjfkl;"
				/>
				<HardwareCard
					rowSpan={1}
					colSpan={3}
					name="Power Supply / Battery"
					description="aldsjflkasdjfkl;"
				/>
				<HardwareCard
					rowSpan={1}
					colSpan={3}
					name="Expansion Slots"
					description="aldsjflkasdjfkl;"
				/>
				<HardwareCard
					rowSpan={1}
					colSpan={7}
					name="GPU"
					description="aldsjflkasdjfkl;"
				/>
			</div>
		</div>
	);
}
