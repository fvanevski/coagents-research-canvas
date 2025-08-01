"""
This module provides a function to get a model based on the configuration.
"""
import os
from langchain_openai import ChatOpenAI
from research_canvas.langgraph.state import AgentState

def get_model(state: AgentState) -> ChatOpenAI:
    """
    Get the vLLM model.
    """
    return ChatOpenAI(
        base_url=os.getenv("OPENAI_BASE_URL"),
        model_name=os.getenv("MODEL_NAME"),
        temperature=0,
        api_key="no-key"
    )