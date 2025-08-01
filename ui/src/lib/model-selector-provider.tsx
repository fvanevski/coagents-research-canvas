"use client";

import { createContext, useContext } from "react";

export type AgentState = {
  model?: string;
  research_question?: string;
  resources?: Resource[];
  report?: string;
  logs?: Log[];
};

export type Resource = {
  url: string;
  title: string;
  description: string;
};

export type Log = {
  message: string;
  done: boolean;
};
