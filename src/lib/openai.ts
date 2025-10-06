import 'server-only'
import { unstable_noStore as noStore } from 'next/cache'
import OpenAI from 'openai'
import { NullableFloat, OpenAIModel, OpenAIPrompt } from '@/generated/hypertune'

const openai = new OpenAI()

export default function getOpenAI(): OpenAI {
  noStore()

  return openai
}

export function parseHypertunePrompt(
  prompt: OpenAIPrompt
): OpenAI.ChatCompletionCreateParamsNonStreaming {
  return {
    model: hypertuneToOpenAIModel(prompt.model),
    messages: prompt.messages.map((message) => ({
      ...message,
      name: message.name || undefined,
    })),
    temperature: parseHypertuneNullableNumber(prompt.temperature),
    top_p: parseHypertuneNullableNumber(prompt.topP),
    top_logprobs: parseHypertuneNullableNumber(prompt.topLogprobs),
    presence_penalty: parseHypertuneNullableNumber(prompt.presencePenalty),
    max_tokens: parseHypertuneNullableNumber(prompt.maxTokens),
    max_completion_tokens: parseHypertuneNullableNumber(
      prompt.maxCompletionTokens
    ),
  }
}

export function parseHypertuneNullableNumber(
  nullableNumber: NullableFloat
): number | null {
  return nullableNumber.isNull ? null : nullableNumber.value
}

export function hypertuneToOpenAIModel(model: OpenAIModel): OpenAI.ChatModel {
  switch (model) {
    case 'gpt_3_5_turbo':
      return 'gpt-3.5-turbo'
    case 'gpt_4o':
      return 'gpt-4o'
    case 'gpt_4o_mini':
      return 'gpt-4o-mini'
    default: {
      const neverModel: never = model
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new Error(`unexpected open ai model: "${neverModel}"`)
    }
  }
}
