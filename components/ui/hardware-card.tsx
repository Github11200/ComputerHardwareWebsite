"use client";

import * as React from "react";

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
import { useState } from "react";

import ChatBox from "./chatbox";
import { useEffect } from "react";

interface HardwareCardProps {
	rowSpan: number;
	colSpan: number;
	name: string;
}

export default function HardwareCard({
	rowSpan,
	colSpan,
	name,
}: HardwareCardProps) {
	const [data, setData] = useState<any>("Loading...");

	useEffect(() => {
		fetch("/api", {
			method: "POST",
			body: JSON.stringify({ prompt: `What is a ${name}?` }),
		}).then((res) => {
			res.text().then((test) => {
				setData(JSON.parse(test).message[0].props.children);
				console.log(data);
			});
		});
	});

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
				<DialogDescription color="#FFFFFF">{data}</DialogDescription>
				<DialogFooter>
					{" "}
					<ChatBox name={name} initialAnswer={data} />
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
