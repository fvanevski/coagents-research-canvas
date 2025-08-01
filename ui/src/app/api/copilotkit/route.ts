import { CopilotRuntime, langGraphPlatformEndpoint } from "@copilotkit/runtime";
import { copilotRuntimeNextJSAppRouterEndpoint } from "@copilotkit/runtime";

const runtime = new CopilotRuntime({
  remoteEndpoints: [
    langGraphPlatformEndpoint({
      deploymentUrl: "http://localhost:8000",
      agents: [
        {
          name: 'research_agent',
          description: 'A research assistant that can help with planning trips.',
        }
      ]
    }),
  ],
});

export const {
  handleRequest: POST,
  fetchServerSideProps,
} = copilotRuntimeNextJSAppRouterEndpoint({
  runtime,
  endpoint: "/api/copilotkit",
});