import { GoogleGenerativeAI } from "@google/generative-ai";
import { remark } from "remark";
import parse from "html-react-parser";
import html from "remark-html";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const api_key = process.env.API_KEY;
	console.log(api_key);
	const prompt: string = JSON.parse(await request.text()).prompt;

	// For text-only input, use the gemini-pro model
	const genAI = new GoogleGenerativeAI(api_key!);

	const model = genAI.getGenerativeModel({
		model: "gemini-pro",
	});

	const result = await model.generateContent(prompt);

	const response = await result.response;

	const text = response.text();

	return NextResponse.json({ message: text }, { status: 200 });
}
