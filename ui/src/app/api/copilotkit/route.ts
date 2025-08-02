import {
  CopilotRuntime,
  OpenAIAdapter,
  copilotRuntimeNextJSAppRouterEndpoint,
  LangGraphAgent,
  LangGraphHttpAgent,
} from "@copilotkit/runtime";
import OpenAI from "openai";
import { NextRequest } from "next/server";
 
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const llmAdapter = new OpenAIAdapter({ openai } as any);
const langsmithApiKey = process.env.LANGSMITH_API_KEY as string;

const deploymentUrl = process.env.deplomentUrl || "http://localhost:3000/";

const runtime = new CopilotRuntime({
      agents: {
        'research_agent': new LangGraphAgent({
          deploymentUrl,
          langsmithApiKey,
          graphId: 'research_agent',
        }),
      }
  })

export const POST = async (req: NextRequest) => {
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    serviceAdapter: llmAdapter,
    endpoint: "/",
  });

  return handleRequest(req);
} 
