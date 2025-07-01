import type { UIState } from '../../types'

interface LandingPageProps {
  prompt: string
  uiState: UIState
  animatingText: string
  onPromptChange: (value: string) => void
  onSubmit: () => void
  onLogoClick: () => void
}

const LandingPage = ({ 
  prompt, 
  uiState, 
  animatingText, 
  onPromptChange, 
  onSubmit, 
  onLogoClick 
}: LandingPageProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onSubmit()
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onPromptChange(e.target.value)
  }

  return (
    <div className="min-h-screen animate-bg-gradient font-poppins relative overflow-hidden">
      {/* Logo in top left */}
      <div className={`absolute top-6 left-6 z-10 transition-all duration-800 ${uiState !== 'initial' ? 'opacity-0 -translate-x-10' : 'initial-hidden animate-fade-in-left delay-100'}`}>
        <h1 
          className="text-3xl font-bold text-white animate-float cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={onLogoClick}
        >
          <span className="text-coral-500 text-glow">Prompt</span>Tron
        </h1>
      </div>

      {/* Animating Text Element - positioned absolutely to move from input to chat position */}
      {(uiState === 'text-moving') && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <div className="animate-text-to-chat absolute">
            <div className="bg-coral-500/20 border border-coral-500/30 rounded-2xl rounded-br-md p-4 max-w-2xl">
              <p className="text-white text-lg">{animatingText}</p>
            </div>
          </div>
        </div>
      )}

      {/* Main content centered */}
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-2xl text-center">
          
          {/* Header Section */}
          <div className={`mb-8 transition-all duration-800 ${uiState !== 'initial' ? 'opacity-0 -translate-y-10' : 'initial-hidden animate-fade-in-up delay-200'}`}>
            <h2 className="text-4xl font-bold text-white mb-4 text-glow">
              Supercharge Your Prompts
            </h2>
            <p className="text-brown-sugar-800 text-lg opacity-90 max-w mx-auto initial-hidden animate-fade-in-up delay-300">
              Transform ordinary prompts into powerful AI commands that deliver exceptional results
            </p>
            <div className="w-40 h-1 bg-coral-500 mt-6 mb-6 mx-auto rounded-full opacity-60 animate-pulse"></div>
          </div>
          
          {/* Input Section - Main Focus */}
          <div className={`relative transition-all duration-1000 ease-out ${
            uiState === 'initial' ? 'initial-hidden animate-fade-in-scale delay-400' : ''
          }`}>
            {/* Animated Gradient Border Container */}
            <div className={`gradient-border animate-pulse-glow ${
              uiState === 'expanding' || uiState === 'text-moving'
                ? 'animate-expand-to-fullscreen' 
                : ''
            }`}>
              <div className="gradient-border-inner rounded-xl relative">
                <textarea
                  value={prompt}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Describe what you want to accomplish with your prompt..."
                  className={`w-full h-40 bg-transparent text-white border-none rounded-xl p-4 pr-20 resize-none focus:outline-none custom-placeholder transition-all duration-300 focus:scale-[1.02] ${
                    uiState === 'text-moving' ? 'text-transparent' : ''
                  }`}
                  aria-label="Enter your prompt"
                  disabled={uiState !== 'initial'}
                />
                
                {/* Enter Button */}
                {uiState === 'initial' && (
                  <button
                    onClick={onSubmit}
                    disabled={!prompt.trim()}
                    className="absolute bottom-4 right-4 bg-coral-400 hover:bg-coral-600 disabled:bg-coral-200 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-coral-400 shadow-lg shadow-coral-500/25 button-hover-glow"
                    aria-label="Submit prompt"
                  >
                    Enter
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Hint Text */}
          {uiState === 'initial' && (
            <p className="text-bistre-700 text-sm mt-4 flex items-center justify-center gap-2 initial-hidden animate-fade-in-up delay-500 transition-opacity duration-300 hover:opacity-100">
              <span className="text-coral-400 animate-float">💡</span>
              Press Enter to submit or Shift + Enter for new line
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default LandingPage 