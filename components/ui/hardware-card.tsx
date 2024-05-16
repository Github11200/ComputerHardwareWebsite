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

interface HardwareCardProps {
	rowSpan: number;
	colSpan: number;
	name: string;
	description: string;
}

interface Message {
	personOrComputer: "person" | "computer";
	message: string;
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

	const messages: Array<Message> = [
		{
			personOrComputer: "person",
			message: `What is a ${name}?`,
		},
		{
			personOrComputer: "computer",
			message: parse(data),
		},
	];

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
						<SheetContent className="w-[600px]">
							<SheetHeader>
								<SheetTitle>Chat</SheetTitle>
							</SheetHeader>
							<SheetDescription>
								Here you can chat with your own chatbot to learn
								more about a hardware component.
							</SheetDescription>
							<Card className="mt-2 h-[85%] p-3">
								{messages.map((object, index) => {
									return (
										<div
											key={index}
											className={`bg-secondary rounded-[var(--radius)] min-w-min flex items-center p-2 w-[90%] gap-3 ${
												index < messages.length - 1 &&
												"mb-3"
											}`}
										>
											<Avatar className={"self-start"}>
												{object.personOrComputer ==
												"person" ? (
													<AvatarImage src="https://img.icons8.com/color/48/oggy--v1.png" />
												) : (
													<AvatarImage src="https://img.icons8.com/color/48/transformer.png" />
												)}
											</Avatar>
											<p className="text-sm">
												{object.message}
											</p>
										</div>
									);
								})}
							</Card>
							<div className="flex w-full max-w-sm items-center space-x-2 mt-3">
								<Input type="email" placeholder="Message..." />
								<Button
									type="submit"
									className="max-w-min max-h-min"
								>
									<svg
										width="15"
										height="15"
										viewBox="0 0 15 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z"
											fill="currentColor"
											fill-rule="evenodd"
											clip-rule="evenodd"
										></path>
									</svg>
								</Button>
							</div>
						</SheetContent>
					</Sheet>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
