interface ChatBubbleProps {
  message: string
  type: 'user' | 'ai' | 'processing'
  isProcessing?: boolean
  className?: string
}

const ChatBubble = ({ message, type, isProcessing = false, className = '' }: ChatBubbleProps) => {
  const getAlignment = () => {
    return type === 'user' ? 'justify-end' : 'justify-start'
  }

  const getBubbleStyles = () => {
    if (type === 'user') {
      return 'bg-coral-500/20 border-coral-500/30 rounded-2xl rounded-br-md mr-4'
    }
    return 'bg-brown-sugar-500/20 border-brown-sugar-500/30 rounded-2xl rounded-bl-md ml-4'
  }

  const renderContent = () => {
    if (isProcessing) {
      return (
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-coral-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-coral-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-coral-400 rounded-full animate-bounce delay-200"></div>
          </div>
          <p className="text-brown-sugar-800 text-lg">{message}</p>
        </div>
      )
    }

    return (
      <p className="text-white text-lg whitespace-pre-line">{message}</p>
    )
  }

  return (
    <div className={`flex ${getAlignment()} animate-fade-in-up ${className}`}>
      <div className={`border p-4 max-w-2xl ${getBubbleStyles()}`}>
        {renderContent()}
      </div>
    </div>
  )
}

export default ChatBubble 