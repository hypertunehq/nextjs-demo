/* eslint-disable */

import * as sdk from "hypertune";

export const queryId = "1d2105d4-4c3e-56e8-99db-28166b6fb792";

export const query: sdk.Query<sdk.ObjectValueWithVariables> = {"variableDefinitions":{},"fragmentDefinitions":{"OpenAIPromptMessages":{"type":"InlineFragment","objectTypeName":"OpenAIPromptMessages","selection":{"content":{"fieldArguments":{},"fieldQuery":null},"role":{"fieldArguments":{},"fieldQuery":null},"name":{"fieldArguments":{},"fieldQuery":null}}},"NullableFloat":{"type":"InlineFragment","objectTypeName":"NullableFloat","selection":{"value":{"fieldArguments":{},"fieldQuery":null},"isNull":{"fieldArguments":{},"fieldQuery":null}}},"OpenAIPrompt":{"type":"InlineFragment","objectTypeName":"OpenAIPrompt","selection":{"model":{"fieldArguments":{},"fieldQuery":null},"messages":{"fieldArguments":{},"fieldQuery":{"OpenAIPromptMessages":{"type":"FragmentSpread","fragmentName":"OpenAIPromptMessages"}}},"temperature":{"fieldArguments":{},"fieldQuery":{"NullableFloat":{"type":"FragmentSpread","fragmentName":"NullableFloat"}}},"topP":{"fieldArguments":{},"fieldQuery":{"NullableFloat":{"type":"FragmentSpread","fragmentName":"NullableFloat"}}},"topLogprobs":{"fieldArguments":{},"fieldQuery":{"NullableFloat":{"type":"FragmentSpread","fragmentName":"NullableFloat"}}},"presencePenalty":{"fieldArguments":{},"fieldQuery":{"NullableFloat":{"type":"FragmentSpread","fragmentName":"NullableFloat"}}},"maxTokens":{"fieldArguments":{},"fieldQuery":{"NullableFloat":{"type":"FragmentSpread","fragmentName":"NullableFloat"}}},"maxCompletionTokens":{"fieldArguments":{},"fieldQuery":{"NullableFloat":{"type":"FragmentSpread","fragmentName":"NullableFloat"}}}}},"AI":{"type":"InlineFragment","objectTypeName":"AI","selection":{"loadingMessage":{"fieldArguments":{},"fieldQuery":null},"featureSuggestionPrompt":{"fieldArguments":{},"fieldQuery":{"OpenAIPrompt":{"type":"FragmentSpread","fragmentName":"OpenAIPrompt"}}}}},"Landing":{"type":"InlineFragment","objectTypeName":"Landing","selection":{"headline":{"fieldArguments":{},"fieldQuery":null},"layout":{"fieldArguments":{},"fieldQuery":null}}},"Events":{"type":"InlineFragment","objectTypeName":"Events","selection":{"thumbsDown":{"fieldArguments":{},"fieldQuery":null},"thumbsUp":{"fieldArguments":{},"fieldQuery":null},"pageView":{"fieldArguments":{"__isPartialObject__":true},"fieldQuery":null},"signUp":{"fieldArguments":{"__isPartialObject__":true},"fieldQuery":null},"upgrade":{"fieldArguments":{"__isPartialObject__":true},"fieldQuery":null}}},"Discount":{"type":"InlineFragment","objectTypeName":"Discount","selection":{"name":{"fieldArguments":{},"fieldQuery":null},"isEnabled":{"fieldArguments":{},"fieldQuery":null},"percentage":{"fieldArguments":{},"fieldQuery":null}}},"PlanData":{"type":"InlineFragment","objectTypeName":"PlanData","selection":{"enabled":{"fieldArguments":{},"fieldQuery":null},"text":{"fieldArguments":{},"fieldQuery":null}}},"Feature":{"type":"InlineFragment","objectTypeName":"Feature","selection":{"name":{"fieldArguments":{},"fieldQuery":null},"planData":{"fieldArguments":{"__isPartialObject__":true},"fieldQuery":{"PlanData":{"type":"FragmentSpread","fragmentName":"PlanData"}}}}},"FeatureGroup":{"type":"InlineFragment","objectTypeName":"FeatureGroup","selection":{"name":{"fieldArguments":{},"fieldQuery":null},"feature":{"fieldArguments":{},"fieldQuery":{"Feature":{"type":"FragmentSpread","fragmentName":"Feature"}}}}}},"fieldQuery":{"Query":{"type":"InlineFragment","objectTypeName":"Query","selection":{"root":{"fieldArguments":{"__isPartialObject__":true},"fieldQuery":{"Root":{"type":"InlineFragment","objectTypeName":"Root","selection":{"testFlag":{"fieldArguments":{},"fieldQuery":null},"ai":{"fieldArguments":{},"fieldQuery":{"AI":{"type":"FragmentSpread","fragmentName":"AI"}}},"landing":{"fieldArguments":{},"fieldQuery":{"Landing":{"type":"FragmentSpread","fragmentName":"Landing"}}},"events":{"fieldArguments":{},"fieldQuery":{"Events":{"type":"FragmentSpread","fragmentName":"Events"}}},"discounts":{"fieldArguments":{"__isPartialObject__":true},"fieldQuery":{"Discount":{"type":"FragmentSpread","fragmentName":"Discount"}}},"price":{"fieldArguments":{"__isPartialObject__":true},"fieldQuery":null},"featureGrid":{"fieldArguments":{},"fieldQuery":{"FeatureGroup":{"type":"FragmentSpread","fragmentName":"FeatureGroup"}}}}}}}}}}};

export const vercelFlagDefinitions = {"testFlag":{"options":[{"label":"Off","value":false},{"label":"On","value":true}],"origin":"https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3EtestFlag"},"ai.loadingMessage":{"options":[],"origin":"https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Eai%3EloadingMessage"},"ai.featureSuggestionPrompt.model":{"options":[{"value":"gpt_4o","label":"Gpt 4o"},{"value":"gpt_4o_mini","label":"Gpt 4o Mini"},{"value":"gpt_3_5_turbo","label":"Gpt 3 5 Turbo"}],"origin":"https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Eai%3EfeatureSuggestionPrompt%3Emodel"},"ai.featureSuggestionPrompt.temperature.value":{"options":[],"origin":"https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22NullableFloat%22%2C%22selectedChildName%22%3A%22value%22%7D"},"ai.featureSuggestionPrompt.temperature.isNull":{"options":[{"label":"Off","value":false},{"label":"On","value":true}],"origin":"https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22NullableFloat%22%2C%22selectedChildName%22%3A%22isNull%22%7D"},"ai.featureSuggestionPrompt.topP.value":{"options":[],"origin":"https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22NullableFloat%22%2C%22selectedChildName%22%3A%22value%22%7D"},"ai.featureSuggestionPrompt.topP.isNull":{"options":[{"label":"Off","value":false},{"label":"On","value":true}],"origin":"https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22NullableFloat%22%2C%22selectedChildName%22%3A%22isNull%22%7D"},"ai.featureSuggestionPrompt.topLogprobs.value":{"options":[],"origin":"https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22NullableFloat%22%2C%22selectedChildName%22%3A%22value%22%7D"},"ai.featureSuggestionPrompt.topLogprobs.isNull":{"options":[{"label":"Off","value":false},{"label":"On","value":true}],"origin":"https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22NullableFloat%22%2C%22selectedChildName%22%3A%22isNull%22%7D"},"ai.featureSuggestionPrompt.presencePenalty.value":{"options":[],"origin":"https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22NullableFloat%22%2C%22selectedChildName%22%3A%22value%22%7D"},"ai.featureSuggestionPrompt.presencePenalty.isNull":{"options":[{"label":"Off","value":false},{"label":"On","value":true}],"origin":"https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22NullableFloat%22%2C%22selectedChildName%22%3A%22isNull%22%7D"},"ai.featureSuggestionPrompt.maxTokens.value":{"options":[],"origin":"https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22NullableFloat%22%2C%22selectedChildName%22%3A%22value%22%7D"},"ai.featureSuggestionPrompt.maxTokens.isNull":{"options":[{"label":"Off","value":false},{"label":"On","value":true}],"origin":"https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22NullableFloat%22%2C%22selectedChildName%22%3A%22isNull%22%7D"},"ai.featureSuggestionPrompt.maxCompletionTokens.value":{"options":[],"origin":"https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22NullableFloat%22%2C%22selectedChildName%22%3A%22value%22%7D"},"ai.featureSuggestionPrompt.maxCompletionTokens.isNull":{"options":[{"label":"Off","value":false},{"label":"On","value":true}],"origin":"https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22NullableFloat%22%2C%22selectedChildName%22%3A%22isNull%22%7D"},"landing.headline":{"options":[],"origin":"https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Elanding%3Eheadline"},"landing.layout":{"options":[{"value":"vertical","label":"Vertical"},{"value":"horizontal","label":"Horizontal"}],"origin":"https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Elanding%3Elayout"}};

export type FlagValues = {
  "testFlag": boolean;
  "ai.loadingMessage": string;
  "ai.featureSuggestionPrompt.model": OpenAIModel;
  "ai.featureSuggestionPrompt.temperature.value": number;
  "ai.featureSuggestionPrompt.temperature.isNull": boolean;
  "ai.featureSuggestionPrompt.topP.value": number;
  "ai.featureSuggestionPrompt.topP.isNull": boolean;
  "ai.featureSuggestionPrompt.topLogprobs.value": number;
  "ai.featureSuggestionPrompt.topLogprobs.isNull": boolean;
  "ai.featureSuggestionPrompt.presencePenalty.value": number;
  "ai.featureSuggestionPrompt.presencePenalty.isNull": boolean;
  "ai.featureSuggestionPrompt.maxTokens.value": number;
  "ai.featureSuggestionPrompt.maxTokens.isNull": boolean;
  "ai.featureSuggestionPrompt.maxCompletionTokens.value": number;
  "ai.featureSuggestionPrompt.maxCompletionTokens.isNull": boolean;
  "landing.headline": string;
  "landing.layout": Layout;
}

export type FlagPath = keyof FlagValues & string;

export const flagFallbacks: FlagValues = {
  "testFlag": false,
  "ai.loadingMessage": "",
  "ai.featureSuggestionPrompt.model": "gpt_4o",
  "ai.featureSuggestionPrompt.temperature.value": 0,
  "ai.featureSuggestionPrompt.temperature.isNull": false,
  "ai.featureSuggestionPrompt.topP.value": 0,
  "ai.featureSuggestionPrompt.topP.isNull": false,
  "ai.featureSuggestionPrompt.topLogprobs.value": 0,
  "ai.featureSuggestionPrompt.topLogprobs.isNull": false,
  "ai.featureSuggestionPrompt.presencePenalty.value": 0,
  "ai.featureSuggestionPrompt.presencePenalty.isNull": false,
  "ai.featureSuggestionPrompt.maxTokens.value": 0,
  "ai.featureSuggestionPrompt.maxTokens.isNull": false,
  "ai.featureSuggestionPrompt.maxCompletionTokens.value": 0,
  "ai.featureSuggestionPrompt.maxCompletionTokens.isNull": false,
  "landing.headline": "",
  "landing.layout": "vertical",
}

export function decodeFlagValues<TFlagPath extends keyof FlagValues & string>(
  encodedFlagValues: string,
  flagPaths: TFlagPath[]
): Pick<FlagValues, TFlagPath> {
  return sdk.decodeFlagValues({ encodedFlagValues, flagPaths })
}

export type VariableValues = {};

export const EnvironmentEnumValues = [
  "development",
  "production",
  "test"
] as const;
export type Environment = typeof EnvironmentEnumValues[number];

export const CountryEnumValues = [
  "UnitedStates",
  "UnitedKingdom",
  "France",
  "Germany"
] as const;
export type Country = typeof CountryEnumValues[number];

export type User = {
  id: string;
  name: string;
  email: string;
  country: Country;
}

export const PlanTypeEnumValues = [
  "free",
  "pro",
  "business"
] as const;
export type PlanType = typeof PlanTypeEnumValues[number];

export type Organization = {
  id: string;
  name: string;
  plan: PlanType;
}

/**
 * This `Context` input type is used for the `context` argument on your root field.
 * It contains details of the current `user` and `environment`.
 * 
 * You can define other custom input types with fields that are primitives, enums 
 * or other input types.
 */
export type Context = {
  environment: Environment;
  user: User;
  organization: Organization;
}

export type RootArgs = {
  context: Context;
}

export type EmptyObject = {};

export const OpenAIModelEnumValues = [
  "gpt_4o",
  "gpt_4o_mini",
  "gpt_3_5_turbo"
] as const;
export type OpenAIModel = typeof OpenAIModelEnumValues[number];

export class OpenAIModelNode extends sdk.Node {
  override typeName = "OpenAIModel" as const;

  get({
    fallback,
    shouldReturnUnrecognizedValues = false,
   }: {
    fallback: OpenAIModel; 
    shouldReturnUnrecognizedValues?: boolean;
  }): OpenAIModel {
    const value = this.getValue({ fallback });

    if (typeof value !== "string" || !value) {
      this.logUnexpectedValueError(value);
      return fallback;
    }
    if (!shouldReturnUnrecognizedValues && !OpenAIModelEnumValues.includes(value as OpenAIModel)) {
      this.logUnexpectedValueError(value);
      return fallback;
    }

    return value as OpenAIModel;
  }
}

export const OpenAIPromtRoleEnumValues = [
  "system",
  "user"
] as const;
export type OpenAIPromtRole = typeof OpenAIPromtRoleEnumValues[number];

export class OpenAIPromtRoleNode extends sdk.Node {
  override typeName = "OpenAIPromtRole" as const;

  get({
    fallback,
    shouldReturnUnrecognizedValues = false,
   }: {
    fallback: OpenAIPromtRole; 
    shouldReturnUnrecognizedValues?: boolean;
  }): OpenAIPromtRole {
    const value = this.getValue({ fallback });

    if (typeof value !== "string" || !value) {
      this.logUnexpectedValueError(value);
      return fallback;
    }
    if (!shouldReturnUnrecognizedValues && !OpenAIPromtRoleEnumValues.includes(value as OpenAIPromtRole)) {
      this.logUnexpectedValueError(value);
      return fallback;
    }

    return value as OpenAIPromtRole;
  }
}

export type OpenAIPromptMessages = {
  content: string;
  role: OpenAIPromtRole;
  /**
   * Optional name of the user.
   */
  name: string;
}

const openAIPromptMessagesFallback = {content:"",role:"system",name:""};

export class OpenAIPromptMessagesNode extends sdk.Node {
  override typeName = "OpenAIPromptMessages" as const;

  get({ fallback = openAIPromptMessagesFallback as OpenAIPromptMessages}: { fallback?: OpenAIPromptMessages } = {}): OpenAIPromptMessages {
    const getQuery = sdk.mergeFieldQueryAndArgs(
      query.fragmentDefinitions,
      sdk.getFieldQueryForPath(query.fragmentDefinitions, query.fieldQuery, ["Query", "root", "Root", "ai", "AI", "featureSuggestionPrompt", "OpenAIPrompt", "messages"]), 
      null,
    );
    return this.getValue({ query: getQuery, fallback }) as OpenAIPromptMessages;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22OpenAIPromptMessages%22%2C%22selectedChildName%22%3A%22content%22%7D})
   */
  content({ args = {}, fallback }: { args?: EmptyObject; fallback: string; }): string {
    const props0 = this.getFieldNodeProps("content", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "StringExpression"
    ) {
      const node = new sdk.StringNode(props0);
      return node.get({ fallback });
    }

    const node = new sdk.StringNode(props0);
    node._logUnexpectedTypeError();
    return node.get({ fallback });
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22OpenAIPromptMessages%22%2C%22selectedChildName%22%3A%22role%22%7D})
   */
  role({ args = {}, fallback, shouldReturnUnrecognizedValues = false }: { args?: EmptyObject; fallback: OpenAIPromtRole; shouldReturnUnrecognizedValues?: boolean; }): OpenAIPromtRole {
    const props0 = this.getFieldNodeProps("role", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      (expression0.type === "StringExpression" || 
        expression0.type === "EnumExpression") &&
      OpenAIPromtRoleEnumValues.includes(expression0.value as OpenAIPromtRole)
    ) {
      const node = new OpenAIPromtRoleNode(props0);
      return node.get({ fallback, shouldReturnUnrecognizedValues });
    }

    const node = new OpenAIPromtRoleNode(props0);
    node._logUnexpectedTypeError();
    return fallback;
  }

  /**
   * Optional name of the user.
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22OpenAIPromptMessages%22%2C%22selectedChildName%22%3A%22name%22%7D})
   */
  name({ args = {}, fallback }: { args?: EmptyObject; fallback: string; }): string {
    const props0 = this.getFieldNodeProps("name", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "StringExpression"
    ) {
      const node = new sdk.StringNode(props0);
      return node.get({ fallback });
    }

    const node = new sdk.StringNode(props0);
    node._logUnexpectedTypeError();
    return node.get({ fallback });
  }
}

export type NullableFloat = {
  value: number;
  isNull: boolean;
}

const nullableFloatFallback = {value:0,isNull:false};

export class NullableFloatNode extends sdk.Node {
  override typeName = "NullableFloat" as const;

  get({ fallback = nullableFloatFallback as NullableFloat}: { fallback?: NullableFloat } = {}): NullableFloat {
    const getQuery = sdk.mergeFieldQueryAndArgs(
      query.fragmentDefinitions,
      sdk.getFieldQueryForPath(query.fragmentDefinitions, query.fieldQuery, ["Query", "root", "Root", "ai", "AI", "featureSuggestionPrompt", "OpenAIPrompt", "temperature"]), 
      null,
    );
    return this.getValue({ query: getQuery, fallback }) as NullableFloat;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22NullableFloat%22%2C%22selectedChildName%22%3A%22value%22%7D})
   */
  value({ args = {}, fallback }: { args?: EmptyObject; fallback: number; }): number {
    const props0 = this.getFieldNodeProps("value", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      (expression0.type === "IntExpression" ||
      expression0.type === "FloatExpression")
    ) {
      const node = new sdk.FloatNode(props0);
      return node.get({ fallback });
    }
    const node = new sdk.FloatNode(props0);
    node._logUnexpectedTypeError();
    return fallback;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22NullableFloat%22%2C%22selectedChildName%22%3A%22isNull%22%7D})
   */
  isNull({ args = {}, fallback }: { args?: EmptyObject; fallback: boolean; }): boolean {
    const props0 = this.getFieldNodeProps("isNull", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "BooleanExpression"
    ) {
      const node = new sdk.BooleanNode(props0);
      return node.get({ fallback });
    }

    const node = new sdk.BooleanNode(props0);
    node._logUnexpectedTypeError();
    return node.get({ fallback });
  }
}

export type OpenAIPrompt = {
  model: OpenAIModel;
  messages: OpenAIPromptMessages[];
  temperature: NullableFloat;
  topP: NullableFloat;
  topLogprobs: NullableFloat;
  presencePenalty: NullableFloat;
  maxTokens: NullableFloat;
  maxCompletionTokens: NullableFloat;
}

const openAIPromptFallback = {model:"gpt_4o",messages:[],temperature:{value:0,isNull:false},topP:{value:0,isNull:false},topLogprobs:{value:0,isNull:false},presencePenalty:{value:0,isNull:false},maxTokens:{value:0,isNull:false},maxCompletionTokens:{value:0,isNull:false}};

export class OpenAIPromptNode extends sdk.Node {
  override typeName = "OpenAIPrompt" as const;

  get({ fallback = openAIPromptFallback as OpenAIPrompt}: { fallback?: OpenAIPrompt } = {}): OpenAIPrompt {
    const getQuery = sdk.mergeFieldQueryAndArgs(
      query.fragmentDefinitions,
      sdk.getFieldQueryForPath(query.fragmentDefinitions, query.fieldQuery, ["Query", "root", "Root", "ai", "AI", "featureSuggestionPrompt"]), 
      null,
    );
    return this.getValue({ query: getQuery, fallback }) as OpenAIPrompt;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Eai%3EfeatureSuggestionPrompt%3Emodel})
   */
  model({ args = {}, fallback, shouldReturnUnrecognizedValues = false }: { args?: EmptyObject; fallback: OpenAIModel; shouldReturnUnrecognizedValues?: boolean; }): OpenAIModel {
    const props0 = this.getFieldNodeProps("model", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      (expression0.type === "StringExpression" || 
        expression0.type === "EnumExpression") &&
      OpenAIModelEnumValues.includes(expression0.value as OpenAIModel)
    ) {
      const node = new OpenAIModelNode(props0);
      return node.get({ fallback, shouldReturnUnrecognizedValues });
    }

    const node = new OpenAIModelNode(props0);
    node._logUnexpectedTypeError();
    return fallback;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Eai%3EfeatureSuggestionPrompt%3Emessages})
   */
  messages({ args = {}, listFallbackLength = 0 }: { args?: EmptyObject; listFallbackLength?: number; } = {}): OpenAIPromptMessagesNode[] {
    const props0 = this.getFieldNodeProps("messages", { fieldArguments: args });

    return new sdk.Node(props0).getItemNodeProps({ fallbackLength: listFallbackLength }).map((props1) => {
      const expression1 = props1.expression;

      if (
        expression1 &&
        expression1.type === "ObjectExpression" &&
        expression1.objectTypeName === "OpenAIPromptMessages"
      ) {
        return new OpenAIPromptMessagesNode(props1);
      }
  
      const node = new OpenAIPromptMessagesNode(props1);
      node._logUnexpectedTypeError();
      return node;
    });
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Eai%3EfeatureSuggestionPrompt%3Etemperature})
   */
  temperature({ args = {} }: { args?: EmptyObject; } = {}): NullableFloatNode {
    const props0 = this.getFieldNodeProps("temperature", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "ObjectExpression" &&
      expression0.objectTypeName === "NullableFloat"
    ) {
      return new NullableFloatNode(props0);
    }

    const node = new NullableFloatNode(props0);
    node._logUnexpectedTypeError();
    return node;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Eai%3EfeatureSuggestionPrompt%3EtopP})
   */
  topP({ args = {} }: { args?: EmptyObject; } = {}): NullableFloatNode {
    const props0 = this.getFieldNodeProps("topP", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "ObjectExpression" &&
      expression0.objectTypeName === "NullableFloat"
    ) {
      return new NullableFloatNode(props0);
    }

    const node = new NullableFloatNode(props0);
    node._logUnexpectedTypeError();
    return node;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Eai%3EfeatureSuggestionPrompt%3EtopLogprobs})
   */
  topLogprobs({ args = {} }: { args?: EmptyObject; } = {}): NullableFloatNode {
    const props0 = this.getFieldNodeProps("topLogprobs", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "ObjectExpression" &&
      expression0.objectTypeName === "NullableFloat"
    ) {
      return new NullableFloatNode(props0);
    }

    const node = new NullableFloatNode(props0);
    node._logUnexpectedTypeError();
    return node;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Eai%3EfeatureSuggestionPrompt%3EpresencePenalty})
   */
  presencePenalty({ args = {} }: { args?: EmptyObject; } = {}): NullableFloatNode {
    const props0 = this.getFieldNodeProps("presencePenalty", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "ObjectExpression" &&
      expression0.objectTypeName === "NullableFloat"
    ) {
      return new NullableFloatNode(props0);
    }

    const node = new NullableFloatNode(props0);
    node._logUnexpectedTypeError();
    return node;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Eai%3EfeatureSuggestionPrompt%3EmaxTokens})
   */
  maxTokens({ args = {} }: { args?: EmptyObject; } = {}): NullableFloatNode {
    const props0 = this.getFieldNodeProps("maxTokens", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "ObjectExpression" &&
      expression0.objectTypeName === "NullableFloat"
    ) {
      return new NullableFloatNode(props0);
    }

    const node = new NullableFloatNode(props0);
    node._logUnexpectedTypeError();
    return node;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Eai%3EfeatureSuggestionPrompt%3EmaxCompletionTokens})
   */
  maxCompletionTokens({ args = {} }: { args?: EmptyObject; } = {}): NullableFloatNode {
    const props0 = this.getFieldNodeProps("maxCompletionTokens", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "ObjectExpression" &&
      expression0.objectTypeName === "NullableFloat"
    ) {
      return new NullableFloatNode(props0);
    }

    const node = new NullableFloatNode(props0);
    node._logUnexpectedTypeError();
    return node;
  }
}

export type AI = {
  loadingMessage: string;
  featureSuggestionPrompt: OpenAIPrompt;
}

const aIFallback = {loadingMessage:"",featureSuggestionPrompt:{model:"gpt_4o",messages:[],temperature:{value:0,isNull:false},topP:{value:0,isNull:false},topLogprobs:{value:0,isNull:false},presencePenalty:{value:0,isNull:false},maxTokens:{value:0,isNull:false},maxCompletionTokens:{value:0,isNull:false}}};

export class AINode extends sdk.Node {
  override typeName = "AI" as const;

  get({ fallback = aIFallback as AI}: { fallback?: AI } = {}): AI {
    const getQuery = sdk.mergeFieldQueryAndArgs(
      query.fragmentDefinitions,
      sdk.getFieldQueryForPath(query.fragmentDefinitions, query.fieldQuery, ["Query", "root", "Root", "ai"]), 
      null,
    );
    return this.getValue({ query: getQuery, fallback }) as AI;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Eai%3EloadingMessage})
   */
  loadingMessage({ args = {}, fallback }: { args?: EmptyObject; fallback: string; }): string {
    const props0 = this.getFieldNodeProps("loadingMessage", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "StringExpression"
    ) {
      const node = new sdk.StringNode(props0);
      return node.get({ fallback });
    }

    const node = new sdk.StringNode(props0);
    node._logUnexpectedTypeError();
    return node.get({ fallback });
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Eai%3EfeatureSuggestionPrompt})
   */
  featureSuggestionPrompt({ args = {} }: { args?: EmptyObject; } = {}): OpenAIPromptNode {
    const props0 = this.getFieldNodeProps("featureSuggestionPrompt", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "ObjectExpression" &&
      expression0.objectTypeName === "OpenAIPrompt"
    ) {
      return new OpenAIPromptNode(props0);
    }

    const node = new OpenAIPromptNode(props0);
    node._logUnexpectedTypeError();
    return node;
  }
}

export const LayoutEnumValues = [
  "vertical",
  "horizontal"
] as const;
export type Layout = typeof LayoutEnumValues[number];

export class LayoutNode extends sdk.Node {
  override typeName = "Layout" as const;

  get({
    fallback,
    shouldReturnUnrecognizedValues = false,
   }: {
    fallback: Layout; 
    shouldReturnUnrecognizedValues?: boolean;
  }): Layout {
    const value = this.getValue({ fallback });

    if (typeof value !== "string" || !value) {
      this.logUnexpectedValueError(value);
      return fallback;
    }
    if (!shouldReturnUnrecognizedValues && !LayoutEnumValues.includes(value as Layout)) {
      this.logUnexpectedValueError(value);
      return fallback;
    }

    return value as Layout;
  }
}

export type Landing = {
  headline: string;
  layout: Layout;
}

const landingFallback = {headline:"",layout:"vertical"};

export class LandingNode extends sdk.Node {
  override typeName = "Landing" as const;

  get({ fallback = landingFallback as Landing}: { fallback?: Landing } = {}): Landing {
    const getQuery = sdk.mergeFieldQueryAndArgs(
      query.fragmentDefinitions,
      sdk.getFieldQueryForPath(query.fragmentDefinitions, query.fieldQuery, ["Query", "root", "Root", "landing"]), 
      null,
    );
    return this.getValue({ query: getQuery, fallback }) as Landing;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Elanding%3Eheadline})
   */
  headline({ args = {}, fallback }: { args?: EmptyObject; fallback: string; }): string {
    const props0 = this.getFieldNodeProps("headline", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "StringExpression"
    ) {
      const node = new sdk.StringNode(props0);
      return node.get({ fallback });
    }

    const node = new sdk.StringNode(props0);
    node._logUnexpectedTypeError();
    return node.get({ fallback });
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Elanding%3Elayout})
   */
  layout({ args = {}, fallback, shouldReturnUnrecognizedValues = false }: { args?: EmptyObject; fallback: Layout; shouldReturnUnrecognizedValues?: boolean; }): Layout {
    const props0 = this.getFieldNodeProps("layout", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      (expression0.type === "StringExpression" || 
        expression0.type === "EnumExpression") &&
      LayoutEnumValues.includes(expression0.value as Layout)
    ) {
      const node = new LayoutNode(props0);
      return node.get({ fallback, shouldReturnUnrecognizedValues });
    }

    const node = new LayoutNode(props0);
    node._logUnexpectedTypeError();
    return fallback;
  }
}

export type EventsPageViewArgs = {
  userAgent: string;
  href: string;
}

export type EventsSignUpArgs = {
  userAgent: string;
}

export type EventsUpgradeArgs = {
  userAgent: string;
  plan: PlanType;
}

export type Events = {
  thumbsDown: boolean;
  thumbsUp: boolean;
  pageView: boolean;
  signUp: boolean;
  upgrade: boolean;
}

const eventsFallback = {thumbsDown:false,thumbsUp:false,pageView:false,signUp:false,upgrade:false};

export type GetEventsPageViewArgs = {
  args: EventsPageViewArgs;
}

export type GetEventsSignUpArgs = {
  args: EventsSignUpArgs;
}

export type GetEventsUpgradeArgs = {
  args: EventsUpgradeArgs;
}

export type GetEventsArgs = {
  pageView: GetEventsPageViewArgs;
  signUp: GetEventsSignUpArgs;
  upgrade: GetEventsUpgradeArgs;
}

export class EventsNode extends sdk.Node {
  override typeName = "Events" as const;

  get({ args, fallback = eventsFallback as Events}: { args: GetEventsArgs; fallback?: Events }): Events {
    const getQuery = sdk.mergeFieldQueryAndArgs(
      query.fragmentDefinitions,
      sdk.getFieldQueryForPath(query.fragmentDefinitions, query.fieldQuery, ["Query", "root", "Root", "events"]), 
      args,
    );
    return this.getValue({ query: getQuery, fallback }) as Events;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Eevents%3EthumbsDown})
   */
  thumbsDown({ args = {} }: { args?: EmptyObject; } = {}): void {
    const props0 = this.getFieldNodeProps("thumbsDown", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "NoOpExpression"
    ) {
      const node = new sdk.VoidNode(props0);
      return node.get({});
    }

    const node = new sdk.VoidNode(props0);
    node._logUnexpectedTypeError();
    return node.get({});
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Eevents%3EthumbsUp})
   */
  thumbsUp({ args = {} }: { args?: EmptyObject; } = {}): void {
    const props0 = this.getFieldNodeProps("thumbsUp", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "NoOpExpression"
    ) {
      const node = new sdk.VoidNode(props0);
      return node.get({});
    }

    const node = new sdk.VoidNode(props0);
    node._logUnexpectedTypeError();
    return node.get({});
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Eevents%3EpageView})
   */
  pageView({ args }: { args: EventsPageViewArgs; }): void {
    const props0 = this.getFieldNodeProps("pageView", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "NoOpExpression"
    ) {
      const node = new sdk.VoidNode(props0);
      return node.get({});
    }

    const node = new sdk.VoidNode(props0);
    node._logUnexpectedTypeError();
    return node.get({});
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Eevents%3EsignUp})
   */
  signUp({ args }: { args: EventsSignUpArgs; }): void {
    const props0 = this.getFieldNodeProps("signUp", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "NoOpExpression"
    ) {
      const node = new sdk.VoidNode(props0);
      return node.get({});
    }

    const node = new sdk.VoidNode(props0);
    node._logUnexpectedTypeError();
    return node.get({});
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Eevents%3Eupgrade})
   */
  upgrade({ args }: { args: EventsUpgradeArgs; }): void {
    const props0 = this.getFieldNodeProps("upgrade", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "NoOpExpression"
    ) {
      const node = new sdk.VoidNode(props0);
      return node.get({});
    }

    const node = new sdk.VoidNode(props0);
    node._logUnexpectedTypeError();
    return node.get({});
  }
}

export type RootDiscountsArgs = {
  plan: PlanType;
  code: string;
}

export type Discount = {
  name: string;
  isEnabled: boolean;
  percentage: number;
}

const discountFallback = {name:"",isEnabled:false,percentage:0};

export class DiscountNode extends sdk.Node {
  override typeName = "Discount" as const;

  get({ fallback = discountFallback as Discount}: { fallback?: Discount } = {}): Discount {
    const getQuery = sdk.mergeFieldQueryAndArgs(
      query.fragmentDefinitions,
      sdk.getFieldQueryForPath(query.fragmentDefinitions, query.fieldQuery, ["Query", "root", "Root", "discounts"]), 
      null,
    );
    return this.getValue({ query: getQuery, fallback }) as Discount;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22Discount%22%2C%22selectedChildName%22%3A%22name%22%7D})
   */
  name({ args = {}, fallback }: { args?: EmptyObject; fallback: string; }): string {
    const props0 = this.getFieldNodeProps("name", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "StringExpression"
    ) {
      const node = new sdk.StringNode(props0);
      return node.get({ fallback });
    }

    const node = new sdk.StringNode(props0);
    node._logUnexpectedTypeError();
    return node.get({ fallback });
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22Discount%22%2C%22selectedChildName%22%3A%22isEnabled%22%7D})
   */
  isEnabled({ args = {}, fallback }: { args?: EmptyObject; fallback: boolean; }): boolean {
    const props0 = this.getFieldNodeProps("isEnabled", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "BooleanExpression"
    ) {
      const node = new sdk.BooleanNode(props0);
      return node.get({ fallback });
    }

    const node = new sdk.BooleanNode(props0);
    node._logUnexpectedTypeError();
    return node.get({ fallback });
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22Discount%22%2C%22selectedChildName%22%3A%22percentage%22%7D})
   */
  percentage({ args = {}, fallback }: { args?: EmptyObject; fallback: number; }): number {
    const props0 = this.getFieldNodeProps("percentage", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      (expression0.type === "IntExpression" ||
      expression0.type === "FloatExpression")
    ) {
      const node = new sdk.FloatNode(props0);
      return node.get({ fallback });
    }
    const node = new sdk.FloatNode(props0);
    node._logUnexpectedTypeError();
    return fallback;
  }
}

export type RootPriceArgs = {
  plan: PlanType;
}

export type FeaturePlanDataArgs = {
  plan: PlanType;
}

export type PlanData = {
  enabled: boolean;
  text: string;
}

const planDataFallback = {enabled:false,text:""};

export class PlanDataNode extends sdk.Node {
  override typeName = "PlanData" as const;

  get({ fallback = planDataFallback as PlanData}: { fallback?: PlanData } = {}): PlanData {
    const getQuery = sdk.mergeFieldQueryAndArgs(
      query.fragmentDefinitions,
      sdk.getFieldQueryForPath(query.fragmentDefinitions, query.fieldQuery, ["Query", "root", "Root", "featureGrid", "FeatureGroup", "feature", "Feature", "planData"]), 
      null,
    );
    return this.getValue({ query: getQuery, fallback }) as PlanData;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3EfeatureGrid%3Efeature%3EplanData%3Eenabled})
   */
  enabled({ args = {}, fallback }: { args?: EmptyObject; fallback: boolean; }): boolean {
    const props0 = this.getFieldNodeProps("enabled", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "BooleanExpression"
    ) {
      const node = new sdk.BooleanNode(props0);
      return node.get({ fallback });
    }

    const node = new sdk.BooleanNode(props0);
    node._logUnexpectedTypeError();
    return node.get({ fallback });
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3EfeatureGrid%3Efeature%3EplanData%3Etext})
   */
  text({ args = {}, fallback }: { args?: EmptyObject; fallback: string; }): string {
    const props0 = this.getFieldNodeProps("text", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "StringExpression"
    ) {
      const node = new sdk.StringNode(props0);
      return node.get({ fallback });
    }

    const node = new sdk.StringNode(props0);
    node._logUnexpectedTypeError();
    return node.get({ fallback });
  }
}

export type Feature = {
  name: string;
  planData: PlanData;
}

const featureFallback = {name:"",planData:{enabled:false,text:""}};

export type GetFeaturePlanDataArgs = {
  args: FeaturePlanDataArgs;
}

export type GetFeatureArgs = {
  planData: GetFeaturePlanDataArgs;
}

export class FeatureNode extends sdk.Node {
  override typeName = "Feature" as const;

  get({ args, fallback = featureFallback as Feature}: { args: GetFeatureArgs; fallback?: Feature }): Feature {
    const getQuery = sdk.mergeFieldQueryAndArgs(
      query.fragmentDefinitions,
      sdk.getFieldQueryForPath(query.fragmentDefinitions, query.fieldQuery, ["Query", "root", "Root", "featureGrid", "FeatureGroup", "feature"]), 
      args,
    );
    return this.getValue({ query: getQuery, fallback }) as Feature;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22Feature%22%2C%22selectedChildName%22%3A%22name%22%7D})
   */
  name({ args = {}, fallback }: { args?: EmptyObject; fallback: string; }): string {
    const props0 = this.getFieldNodeProps("name", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "StringExpression"
    ) {
      const node = new sdk.StringNode(props0);
      return node.get({ fallback });
    }

    const node = new sdk.StringNode(props0);
    node._logUnexpectedTypeError();
    return node.get({ fallback });
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22Feature%22%2C%22selectedChildName%22%3A%22planData%22%7D})
   */
  planData({ args }: { args: FeaturePlanDataArgs; }): PlanDataNode {
    const props0 = this.getFieldNodeProps("planData", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "ObjectExpression" &&
      expression0.objectTypeName === "PlanData"
    ) {
      return new PlanDataNode(props0);
    }

    const node = new PlanDataNode(props0);
    node._logUnexpectedTypeError();
    return node;
  }
}

export type FeatureGroup = {
  name: string;
  feature: Feature[];
}

const featureGroupFallback = {name:"",feature:[]};

export type GetFeatureGroupFeatureArgs = {
  Feature: GetFeatureArgs;
}

export type GetFeatureGroupArgs = {
  feature: GetFeatureGroupFeatureArgs;
}

export class FeatureGroupNode extends sdk.Node {
  override typeName = "FeatureGroup" as const;

  get({ args, fallback = featureGroupFallback as FeatureGroup}: { args: GetFeatureGroupArgs; fallback?: FeatureGroup }): FeatureGroup {
    const getQuery = sdk.mergeFieldQueryAndArgs(
      query.fragmentDefinitions,
      sdk.getFieldQueryForPath(query.fragmentDefinitions, query.fieldQuery, ["Query", "root", "Root", "featureGrid"]), 
      args,
    );
    return this.getValue({ query: getQuery, fallback }) as FeatureGroup;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22FeatureGroup%22%2C%22selectedChildName%22%3A%22name%22%7D})
   */
  name({ args = {}, fallback }: { args?: EmptyObject; fallback: string; }): string {
    const props0 = this.getFieldNodeProps("name", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "StringExpression"
    ) {
      const node = new sdk.StringNode(props0);
      return node.get({ fallback });
    }

    const node = new sdk.StringNode(props0);
    node._logUnexpectedTypeError();
    return node.get({ fallback });
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/schema?selected_schema_type=%7B%22type%22%3A%22object%22%2C%22name%22%3A%22FeatureGroup%22%2C%22selectedChildName%22%3A%22feature%22%7D})
   */
  feature({ args = {}, listFallbackLength = 0 }: { args?: EmptyObject; listFallbackLength?: number; } = {}): FeatureNode[] {
    const props0 = this.getFieldNodeProps("feature", { fieldArguments: args });

    return new sdk.Node(props0).getItemNodeProps({ fallbackLength: listFallbackLength }).map((props1) => {
      const expression1 = props1.expression;

      if (
        expression1 &&
        expression1.type === "ObjectExpression" &&
        expression1.objectTypeName === "Feature"
      ) {
        return new FeatureNode(props1);
      }
  
      const node = new FeatureNode(props1);
      node._logUnexpectedTypeError();
      return node;
    });
  }
}

export type Root = {
  testFlag: boolean;
  ai: AI;
  landing: Landing;
  events: Events;
  /**
   * A list of discount objects that the marketing team can control.
   */
  discounts: Discount[];
  price: number;
  featureGrid: FeatureGroup[];
}

const rootFallback = {testFlag:false,ai:{loadingMessage:"",featureSuggestionPrompt:{model:"gpt_4o",messages:[],temperature:{value:0,isNull:false},topP:{value:0,isNull:false},topLogprobs:{value:0,isNull:false},presencePenalty:{value:0,isNull:false},maxTokens:{value:0,isNull:false},maxCompletionTokens:{value:0,isNull:false}}},landing:{headline:"",layout:"vertical"},events:{thumbsDown:false,thumbsUp:false,pageView:false,signUp:false,upgrade:false},discounts:[],price:0,featureGrid:[]};

export type GetRootEventsArgs = {
  Events: GetEventsArgs;
}

export type GetRootDiscountsArgs = {
  args: RootDiscountsArgs;
}

export type GetRootPriceArgs = {
  args: RootPriceArgs;
}

export type GetRootFeatureGridArgs = {
  FeatureGroup: GetFeatureGroupArgs;
}

export type GetRootArgs = {
  events: GetRootEventsArgs;
  discounts: GetRootDiscountsArgs;
  price: GetRootPriceArgs;
  featureGrid: GetRootFeatureGridArgs;
}

export class RootNode extends sdk.Node {
  override typeName = "Root" as const;

  getRootArgs(): RootArgs {
    const { step } = this.props;
    return (step?.type === 'GetFieldStep' ? step.fieldArguments : {}) as RootArgs;
  }

  get({ args, fallback = rootFallback as Root}: { args: GetRootArgs; fallback?: Root }): Root {
    const getQuery = sdk.mergeFieldQueryAndArgs(
      query.fragmentDefinitions,
      sdk.getFieldQueryForPath(query.fragmentDefinitions, query.fieldQuery, ["Query", "root"]), 
      args,
    );
    return this.getValue({ query: getQuery, fallback }) as Root;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3EtestFlag})
   */
  testFlag({ args = {}, fallback }: { args?: EmptyObject; fallback: boolean; }): boolean {
    const props0 = this.getFieldNodeProps("testFlag", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "BooleanExpression"
    ) {
      const node = new sdk.BooleanNode(props0);
      return node.get({ fallback });
    }

    const node = new sdk.BooleanNode(props0);
    node._logUnexpectedTypeError();
    return node.get({ fallback });
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Eai})
   */
  ai({ args = {} }: { args?: EmptyObject; } = {}): AINode {
    const props0 = this.getFieldNodeProps("ai", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "ObjectExpression" &&
      expression0.objectTypeName === "AI"
    ) {
      return new AINode(props0);
    }

    const node = new AINode(props0);
    node._logUnexpectedTypeError();
    return node;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Elanding})
   */
  landing({ args = {} }: { args?: EmptyObject; } = {}): LandingNode {
    const props0 = this.getFieldNodeProps("landing", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "ObjectExpression" &&
      expression0.objectTypeName === "Landing"
    ) {
      return new LandingNode(props0);
    }

    const node = new LandingNode(props0);
    node._logUnexpectedTypeError();
    return node;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Eevents})
   */
  events({ args = {} }: { args?: EmptyObject; } = {}): EventsNode {
    const props0 = this.getFieldNodeProps("events", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "ObjectExpression" &&
      expression0.objectTypeName === "Events"
    ) {
      return new EventsNode(props0);
    }

    const node = new EventsNode(props0);
    node._logUnexpectedTypeError();
    return node;
  }

  /**
   * A list of discount objects that the marketing team can control.
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Ediscounts})
   */
  discounts({ args, listFallbackLength = 0 }: { args: RootDiscountsArgs; listFallbackLength?: number; }): DiscountNode[] {
    const props0 = this.getFieldNodeProps("discounts", { fieldArguments: args });

    return new sdk.Node(props0).getItemNodeProps({ fallbackLength: listFallbackLength }).map((props1) => {
      const expression1 = props1.expression;

      if (
        expression1 &&
        expression1.type === "ObjectExpression" &&
        expression1.objectTypeName === "Discount"
      ) {
        return new DiscountNode(props1);
      }
  
      const node = new DiscountNode(props1);
      node._logUnexpectedTypeError();
      return node;
    });
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3Eprice})
   */
  price({ args, fallback }: { args: RootPriceArgs; fallback: number; }): number {
    const props0 = this.getFieldNodeProps("price", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      (expression0.type === "IntExpression" ||
      expression0.type === "FloatExpression")
    ) {
      const node = new sdk.FloatNode(props0);
      return node.get({ fallback });
    }
    const node = new sdk.FloatNode(props0);
    node._logUnexpectedTypeError();
    return fallback;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3652/main/draft/logic?selected_field_path=root%3EfeatureGrid})
   */
  featureGrid({ args = {}, listFallbackLength = 0 }: { args?: EmptyObject; listFallbackLength?: number; } = {}): FeatureGroupNode[] {
    const props0 = this.getFieldNodeProps("featureGrid", { fieldArguments: args });

    return new sdk.Node(props0).getItemNodeProps({ fallbackLength: listFallbackLength }).map((props1) => {
      const expression1 = props1.expression;

      if (
        expression1 &&
        expression1.type === "ObjectExpression" &&
        expression1.objectTypeName === "FeatureGroup"
      ) {
        return new FeatureGroupNode(props1);
      }
  
      const node = new FeatureGroupNode(props1);
      node._logUnexpectedTypeError();
      return node;
    });
  }
}

/**
 * This is your project schema expressed in GraphQL.
 * 
 * Define `Boolean` fields for feature flags, custom `enum` fields for flags with 
 * more than two states, `Int` fields for numeric flags like timeouts and limits, 
 * `String` fields to manage in-app copy, `Void` fields for analytics events, and 
 * fields with custom object and list types for more complex app configuration, 
 * e.g. to use Hypertune as a CMS.
 * 
 * Once you've changed your schema, set your flag logic in the Logic view.
 */
export type Source = {
  /**
   * You can add arguments to any field in your schema, which you can then use when
   * setting its logic, including the logic of any nested fields. Your root field 
   * already has a `context` argument. Since all flags are nested under the root 
   * field, this context will be available to all of them.
   */
  root: Root;
}

const sourceFallback = {root:{testFlag:false,ai:{loadingMessage:"",featureSuggestionPrompt:{model:"gpt_4o",messages:[],temperature:{value:0,isNull:false},topP:{value:0,isNull:false},topLogprobs:{value:0,isNull:false},presencePenalty:{value:0,isNull:false},maxTokens:{value:0,isNull:false},maxCompletionTokens:{value:0,isNull:false}}},landing:{headline:"",layout:"vertical"},events:{thumbsDown:false,thumbsUp:false,pageView:false,signUp:false,upgrade:false},discounts:[],price:0,featureGrid:[]}};

export type GetQueryRootArgs = {
  args: RootArgs;
  Root: GetRootArgs;
}

export type GetQueryArgs = {
  root: GetQueryRootArgs;
}

/**
 * This is your project schema expressed in GraphQL.
 * 
 * Define `Boolean` fields for feature flags, custom `enum` fields for flags with 
 * more than two states, `Int` fields for numeric flags like timeouts and limits, 
 * `String` fields to manage in-app copy, `Void` fields for analytics events, and 
 * fields with custom object and list types for more complex app configuration, 
 * e.g. to use Hypertune as a CMS.
 * 
 * Once you've changed your schema, set your flag logic in the Logic view.
 */
export class SourceNode extends sdk.Node {
  override typeName = "Query" as const;

  get({ args, fallback = sourceFallback as Source}: { args: GetQueryArgs; fallback?: Source }): Source {
    const getQuery = sdk.mergeFieldQueryAndArgs(
      query.fragmentDefinitions,
      sdk.getFieldQueryForPath(query.fragmentDefinitions, query.fieldQuery, []), 
      args,
    );
    return this.getValue({ query: getQuery, fallback }) as Source;
  }

  /**
   * You can add arguments to any field in your schema, which you can then use when
   * setting its logic, including the logic of any nested fields. Your root field 
   * already has a `context` argument. Since all flags are nested under the root 
   * field, this context will be available to all of them.
   */
  root({ args }: { args: RootArgs; }): RootNode {
    const props0 = this.getFieldNodeProps("root", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "ObjectExpression" &&
      expression0.objectTypeName === "Root"
    ) {
      return new RootNode(props0);
    }

    const node = new RootNode(props0);
    node._logUnexpectedTypeError();
    return node;
  }
}

export type DehydratedState = sdk.DehydratedState<Source, VariableValues>

const sources: { [key: string]: SourceNode } = {};

export type CreateSourceOptions = {
  token: string; 
  variableValues?: VariableValues;
  override?: sdk.DeepPartial<Source> | null;
  key?: string;
} & sdk.CreateOptions

export function createSource({
  token,
  variableValues = {},
  override,
  key,
  ...options
}: CreateSourceOptions): SourceNode {
  const sourceKey =
    key ?? (typeof window === "undefined" ? "server" : "client");

  if (!sources[sourceKey]) {
    sources[sourceKey] = sdk.create({
      NodeConstructor: SourceNode,
      token,
      variableValues,
      override,
      options,
    });
  }

  return sources[sourceKey];
}

export const emptySource = new SourceNode({
  context: null,
  logger: null,
  parent: null,
  step: null,
  expression: null,
  initDataHash: null,
});

export function createSourceForServerOnly({
  token,
  variableValues = {},
  override,
  key,
  ...options
}: CreateSourceOptions): SourceNode {
  return typeof window === "undefined"
    ? createSource({ token, variableValues, override, ...options })
    : emptySource;
}

export const overrideCookieName = "hypertuneOverride";

/**
 * @deprecated use createSource instead.
 */
export const initHypertune = createSource
/**
 * @deprecated use SourceNode instead.
 */
export type QueryNode = SourceNode;
/**
 * @deprecated use Source instead.
 */
export type Query = Source;
