import * as React from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { loadEnvConfig } from "@next/env";
import { remark } from "remark";
import html from "remark-html";
import parse from "html-react-parser";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

import { Card } from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface HardwareCardProps {
	rowSpan: number;
	colSpan: number;
	name: string;
	description: string;
}

async function promptGemini(prompt: string) {
	// For text-only input, use the gemini-pro model
	const genAI = new GoogleGenerativeAI(process.env.API_KEY);

	const model = genAI.getGenerativeModel({ model: "gemini-pro" });

	const result = await model.generateContent(prompt);
	const response = await result.response;
	const text = response.text();
	const processed = (await remark().use(html).process(text)).toString();
	console.log(processed);
	return processed;
}

async function HardwareCard({
	rowSpan,
	colSpan,
	name,
	description,
}: HardwareCardProps) {
	const data = await promptGemini(`What is a ${name}? DO NOT INCLUDE LISTS.`);

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Card
					className={`w-full h-full col-span-${colSpan} row-span-${rowSpan} flex items-center justify-center hover:cursor-pointer`}
				>
					<h2 className="text-center text-3xl font-semibold tracking-tight py-24 px-2">
						{name}
					</h2>
				</Card>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{name}</DialogTitle>
					<DialogDescription color="#FFFFFF">
						{parse(data)}
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}

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
