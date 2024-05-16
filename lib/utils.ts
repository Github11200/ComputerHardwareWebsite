import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { GoogleGenerativeAI } from "@google/generative-ai";
import { loadEnvConfig } from "@next/env";
import { remark } from "remark";
import html from "remark-html";
import parse from "html-react-parser";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export async function promptGemini(prompt: string) {
	// For text-only input, use the gemini-pro model
	const genAI = new GoogleGenerativeAI(process.env.API_KEY!);

	const model = genAI.getGenerativeModel({ model: "gemini-pro" });

	const result = await model.generateContent(prompt);
	const response = await result.response;
	const text = response.text();
	const processed = (await remark().use(html).process(text)).toString();

	return processed;
}
