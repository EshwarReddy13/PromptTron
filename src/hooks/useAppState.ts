import { useState } from 'react'
import type { UIState } from '../types'

export const useAppState = () => {
  const [prompt, setPrompt] = useState<string>('')
  const [uiState, setUIState] = useState<UIState>('initial')
  const [userMessage, setUserMessage] = useState<string>('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [aiResponse, setAIResponse] = useState<string>('')
  const [animatingText, setAnimatingText] = useState<string>('')

  const handleSubmit = async () => {
    if (!prompt.trim()) return
    
    // Store user message and start animation sequence
    setUserMessage(prompt)
    setAnimatingText(prompt)
    setUIState('expanding')
    
    // After input starts expanding, begin text movement
    setTimeout(() => {
      setUIState('text-moving')
    }, 500)
    
    // After text movement completes, show processing
    setTimeout(() => {
      setUIState('processing')
      setPrompt('') // Clear input
      setAnimatingText('') // Clear animating text
      setIsGenerating(true)
    }, 2000)
    
    // After 5 seconds of processing, show response
    setTimeout(() => {
      setUIState('chat')
      setIsGenerating(false)
      setAIResponse("Here's your enhanced prompt:\n\n\"Create a comprehensive digital marketing strategy for a sustainable fashion brand targeting millennials. Include specific tactics for social media engagement, influencer partnerships, and content marketing that emphasizes environmental consciousness and authentic brand storytelling. Provide measurable KPIs and a 6-month implementation timeline.\"")
    }, 7000) // 2s for animation + 5s for processing
  }

  const handleReset = () => {
    // Reset all state to initial
    setUIState('initial')
    setPrompt('')
    setUserMessage('')
    setIsGenerating(false)
    setAIResponse('')
    setAnimatingText('')
  }

  const handleNewMessage = () => {
    setPrompt('')
  }

  const handlePromptChange = (value: string) => {
    setPrompt(value)
  }

  return {
    // State
    prompt,
    uiState,
    userMessage,
    isGenerating,
    aiResponse,
    animatingText,
    
    // Actions
    handleSubmit,
    handleReset,
    handleNewMessage,
    handlePromptChange
  }
} 