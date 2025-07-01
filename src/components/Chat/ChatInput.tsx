interface ChatInputProps {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  placeholder?: string
  disabled?: boolean
}

const ChatInput = ({ 
  value, 
  onChange, 
  onSubmit, 
  placeholder = "Enter your next prompt...",
  disabled = false 
}: ChatInputProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onSubmit()
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)
  }

  return (
    <div className="px-8 py-4 border-t border-coral-500/20">
      <div className="max-w-4xl mx-auto">
        <div className="gradient-border animate-pulse-glow">
          <div className="gradient-border-inner rounded-full relative">
            <textarea
              value={value}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              disabled={disabled}
              className="w-full h-12 bg-transparent text-white border-none rounded-full py-3 px-4 pr-16 resize-none focus:outline-none custom-placeholder transition-all duration-300"
              aria-label="Enter your prompt"
            />
            
            {/* Send Button */}
            <button
              onClick={onSubmit}
              disabled={!value.trim() || disabled}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-coral-400 hover:bg-coral-600 disabled:bg-coral-200 disabled:cursor-not-allowed text-white p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-coral-400 shadow-lg shadow-coral-500/25 button-hover-glow"
              aria-label="Send message"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatInput 