import { NextResponse } from "next/server";
import getHypertune from "@/lib/getHypertune";
import getOpenAI, { parseHypertunePrompt } from "@/lib/openai";

export async function GET() {
  const openai = getOpenAI();

  try {
    const hypertune = await getHypertune();
    const prompt = hypertune.ai().featureSuggestionPrompt().get();
    const params = parseHypertunePrompt(prompt);

    const resp = await openai.chat.completions.create(params);
    const message = resp.choices[0]?.message.content ?? "";

    return NextResponse.json({ message });
  } catch (error) {
    console.error("Failed to get recommendations", { error });
    return NextResponse.json(
      { message: "Unexpected error" },
      { status: 500 },
    );
  }
}