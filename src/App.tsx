import { Sidebar, LandingPage, ChatContainer } from './components'
import { useAppState, useSidebar } from './hooks'

const App = () => {
  const {
    prompt,
    uiState,
    userMessage,
    isGenerating,
    aiResponse,
    animatingText,
    handleSubmit,
    handleReset,
    handleNewMessage,
    handlePromptChange
  } = useAppState()

  const {
    isOpen: sidebarOpen,
    toggleSidebar,
  } = useSidebar()

  const handleNewChat = () => {
    handleReset()
  }

  // Render landing page for initial and animation states
  if (uiState === 'initial' || uiState === 'expanding' || uiState === 'text-moving') {
    return (
      <div className="relative">
        <Sidebar 
          isOpen={sidebarOpen}
          onToggle={toggleSidebar}
          onNewChat={handleNewChat}
        />
        
        <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
          <LandingPage
            prompt={prompt}
            uiState={uiState}
            animatingText={animatingText}
            onPromptChange={handlePromptChange}
            onSubmit={handleSubmit}
            onLogoClick={handleReset}
          />
        </div>
      </div>
    )
  }

  // Render chat interface for processing and chat states
  return (
    <div className="relative">
      <Sidebar 
        isOpen={sidebarOpen}
        onToggle={toggleSidebar}
        onNewChat={handleNewChat}
      />
      
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
        <ChatContainer
          userMessage={userMessage}
          aiResponse={aiResponse}
          isProcessing={isGenerating}
          prompt={prompt}
          onPromptChange={handlePromptChange}
          onLogoClick={handleReset}
          onNewMessage={handleNewMessage}
        />
      </div>
    </div>
  )
}

export default App
