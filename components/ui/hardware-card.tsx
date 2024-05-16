import * as React from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { loadEnvConfig } from "@next/env";
import { remark } from "remark";
import html from "remark-html";
import parse from "html-react-parser";

import { Card } from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

async function promptGemini(prompt: string) {
	// For text-only input, use the gemini-pro model
	const genAI = new GoogleGenerativeAI(process.env.API_KEY!);

	const model = genAI.getGenerativeModel({ model: "gemini-pro" });

	const result = await model.generateContent(prompt);
	const response = await result.response;
	const text = response.text();
	const processed = (await remark().use(html).process(text)).toString();

	return processed;
}

interface HardwareCardProps {
	rowSpan: number;
	colSpan: number;
	name: string;
	description: string;
}

export default async function HardwareCard({
	rowSpan,
	colSpan,
	name,
	description,
}: HardwareCardProps) {
	const data = await promptGemini(
		`What is a ${name}? DO NOT INCLUDE LISTS OR MARKDOWN DATA JUST SIMPLE TEXT. Write about a paragraph of text.`
	);

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
				</DialogHeader>
				<DialogDescription color="#FFFFFF">
					{parse(data)}{" "}
				</DialogDescription>
				<DialogFooter>
					{" "}
					<Sheet>
						<SheetTrigger>
							<Button>Learn More</Button>
						</SheetTrigger>
						<SheetContent>
							<SheetHeader>
								<SheetTitle>Hello</SheetTitle>
							</SheetHeader>
						</SheetContent>
					</Sheet>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
