import { generateText } from 'ai'

export async function POST(req: Request) {
  const { prompt }: { prompt: string } = await req.json()

  const { text } = await generateText({
    model: 'openai/gpt-4.1',
    maxOutputTokens: 512,
    temperature: 0.3,
    maxRetries: 5,
    presencePenalty: 0,
    frequencyPenalty: 0,
    system: 'You are a helpful assistant.',
    prompt,
  })

  return Response.json({ text })
}
