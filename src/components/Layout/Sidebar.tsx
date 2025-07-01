import type { SidebarItem } from '../../types'

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
  onNewChat: () => void
}

const Sidebar = ({ isOpen, onToggle, onNewChat }: SidebarProps) => {
  const sidebarItems: SidebarItem[] = [
    {
      id: 'new-chat',
      label: 'New Chat',
      icon: '💬',
      onClick: onNewChat
    },
    {
      id: 'history',
      label: 'Chat History',
      icon: '📝'
    },
    {
      id: 'templates',
      label: 'Prompt Templates',
      icon: '📋'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: '⚙️'
    },
    {
      id: 'help',
      label: 'Help & Support',
      icon: '❓'
    }
  ]

  return (
    <>
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full bg-smoky-black-200/95 backdrop-blur-sm border-r border-coral-500/20 transition-all duration-300 z-40 ${
        isOpen ? 'w-64' : 'w-16'
      }`}>
        
        {/* Logo Section */}
        <div className="p-4 border-b border-coral-500/20">
          {isOpen ? (
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-white">
                <span className="text-coral-500 text-glow">Prompt</span>Tron
              </h1>
              <button
                onClick={onToggle}
                className="text-coral-400 hover:text-coral-300 transition-colors duration-200"
                aria-label="Collapse sidebar"
              >
                ←
              </button>
            </div>
          ) : (
            <button
              onClick={onToggle}
              className="w-full text-coral-400 hover:text-coral-300 transition-colors duration-200 text-center"
              aria-label="Expand sidebar"
            >
              →
            </button>
          )}
        </div>

        {/* Navigation Items */}
        <div className="p-2 space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={item.onClick}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all duration-200 hover:bg-coral-500/10 hover:border-coral-500/20 border border-transparent group ${
                isOpen ? '' : 'justify-center'
              }`}
              title={!isOpen ? item.label : undefined}
            >
              <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                {item.icon}
              </span>
              {isOpen && (
                <span className="text-brown-sugar-800 group-hover:text-coral-400 transition-colors duration-200">
                  {item.label}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Bottom Section */}
        {isOpen && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-coral-500/10 border border-coral-500/20 rounded-lg p-3">
              <p className="text-xs text-brown-sugar-700 mb-2">💡 Pro Tip</p>
              <p className="text-xs text-brown-sugar-800">
                Use specific, actionable language in your prompts for better AI responses.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={onToggle}
        />
      )}
    </>
  )
}

export default Sidebar 