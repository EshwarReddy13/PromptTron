import Header from '../Layout/Header'
import ChatBubble from './ChatBubble'
import ChatInput from './ChatInput'

interface ChatContainerProps {
  userMessage: string
  aiResponse: string
  isProcessing: boolean
  prompt: string
  onPromptChange: (value: string) => void
  onLogoClick: () => void
  onNewMessage: () => void
}

const ChatContainer = ({
  userMessage,
  aiResponse,
  isProcessing,
  prompt,
  onPromptChange,
  onLogoClick,
  onNewMessage
}: ChatContainerProps) => {
  return (
    <div className="min-h-screen animate-bg-gradient font-poppins relative flex flex-col">
      {/* Header */}
      <Header onLogoClick={onLogoClick} showBorder />

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-80 py-6 space-y-6">
        {/* User Message */}
        <ChatBubble 
          message={userMessage}
          type="user"
        />

        {/* AI Response or Processing */}
        {isProcessing ? (
          <ChatBubble 
            message="Processing prompt..."
            type="processing"
            isProcessing={true}
            className="delay-200"
          />
        ) : (
          <ChatBubble 
            message={aiResponse}
            type="ai"
            className="delay-200"
          />
        )}
      </div>

      {/* Bottom Input */}
      <ChatInput
        value={prompt}
        onChange={onPromptChange}
        onSubmit={onNewMessage}
      />
    </div>
  )
}

export default ChatContainer 