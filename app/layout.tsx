import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Computer Hardware Website",
	description:
		"Website for explaining the hardware components inside computers",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<Head>
				<link rel="icon" href="/circuit.svg" type="image/svg+xml" />
				<title>ez</title>
			</Head>
			<body className={cn(inter.className)}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
