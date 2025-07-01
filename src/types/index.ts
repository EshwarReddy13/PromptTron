export type UIState = 'initial' | 'expanding' | 'text-moving' | 'processing' | 'chat'

export interface AppState {
  prompt: string
  uiState: UIState
  userMessage: string
  isGenerating: boolean
  aiResponse: string
  animatingText: string
}

export interface ChatMessage {
  id: string
  text: string
  type: 'user' | 'ai' | 'processing'
  timestamp: Date
}

export interface SidebarItem {
  id: string
  label: string
  icon: string
  href?: string
  onClick?: () => void
} 