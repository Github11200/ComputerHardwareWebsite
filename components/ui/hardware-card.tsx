import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
import { promptGemini } from "@/lib/utils";

import ChatBox from "./chatbox";

interface HardwareCardProps {
	rowSpan: number;
	colSpan: number;
	name: string;
	description: string;
}

interface Message {
	personOrComputer: "person" | "computer";
	message: string | React.JSX.Element | React.JSX.Element[];
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
				<DialogDescription color="#FFFFFF">{data} </DialogDescription>
				<DialogFooter>
					{" "}
					<ChatBox name={name} initialAnswer={data} />
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
