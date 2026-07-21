import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

console.log("Key exists:", !!process.env.GEMINI_API_KEY);

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro",
      contents: prompt,
    });

    return NextResponse.json({
      result: response.text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "AI request failed",
      },
      {
        status: 500,
      }
    );
  }
}