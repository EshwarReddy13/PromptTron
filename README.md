# 🚀 PromptTron

**Transform ordinary prompts into powerful AI commands that deliver exceptional results**
**Made this app because I was jobless and bored**

PromptTron is a sophisticated cross-platform AI prompt enhancement tool that takes your basic prompts and transforms them into detailed, actionable AI commands using specialized prompt agents. Choose from predefined agents like Software Developer, Manager, or Designer, or create your own custom agents. Available on web and desktop, built with React, TypeScript, and TailwindCSS, it features a beautiful dark theme with smooth animations and a professional chat interface.

![PromptTron Demo](https://img.shields.io/badge/Status-Live%20Demo-blue?style=for-the-badge)
![Cross Platform](https://img.shields.io/badge/Platform-Web%20%7C%20Desktop-green?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.0.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.11-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎯 **Smart Prompt Enhancement**
- Transforms basic prompts into comprehensive AI commands
- Adds context, specificity, and actionable instructions
- Optimizes prompts for better AI responses
- **Prompt Agents**: Select from predefined agents (Software Developer, Manager, Designer, etc.)
- **Custom Agents**: Create and save your own specialized prompt agents

### 🎨 **Beautiful User Experience**
- **Dark Theme**: Warm color palette with coral and brown accents
- **Smooth Animations**: Input magnification and text movement effects
- **Responsive Design**: Works perfectly on all screen sizes
- **Professional UI**: Modern chat interface with gradient borders

### 🔄 **Interactive Animation Sequence**
1. **Input Magnification**: Your prompt input dramatically scales to fill the screen
2. **Text Animation**: Your text smoothly moves from input to chat position
3. **Processing State**: Shows "Processing prompt..." with bouncing dots
4. **Enhanced Response**: Delivers a comprehensive, actionable AI command

### 🧭 **Navigation & Organization**
- **Collapsible Sidebar**: Left navigation with smooth toggle animation
- **Quick Actions**: New Chat, History, Templates, Settings, Help
- **Prompt Agents**: Access and manage your prompt agents
- **Cross-Platform Sync**: Seamless experience across web and desktop
- **Logo Reset**: Click logo to return to initial state
- **Keyboard Support**: Enter to submit, Shift+Enter for new lines

## 🌐 Access PromptTron

### **Web Application**
- **🌍 Live Website**: [prompttron.com](https://prompttron.com) *(Coming Soon)*
- **📱 Progressive Web App**: Install directly to your device for app-like experience
- **🔄 Real-time Sync**: Your data syncs across all devices

### **Desktop Application**
- **🖥️ Windows**: [Download for Windows](https://prompttron.com/download/windows) *(Coming Soon)*
- **🍎 macOS**: [Download for macOS](https://prompttron.com/download/macos) *(Coming Soon)*
- **🐧 Linux**: [Download for Linux](https://prompttron.com/download/linux) *(Coming Soon)*

*All downloads will be available soon! Sign up for early access notifications.*

## 🚀 Development Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/prompttron.git
cd prompttron

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Build the app
npm run build

# Preview production build
npm run preview
```

## 🎮 How to Use

### 1. **Select Your Agent & Enter Prompt**
- Choose from predefined agents (Software Developer, Manager, Designer, etc.)
- Or create custom agents tailored to your specific needs
- Type your basic prompt in the centered input box
- Use natural language to describe what you want to accomplish
- Press **Enter** to submit or **Shift+Enter** for new lines

### 2. **Watch the Magic**
- Your input will dramatically magnify and fill the screen
- Your text will smoothly animate to the chat position
- The system will process your prompt for 5 seconds

### 3. **Get Enhanced Results**
- Receive a comprehensive, actionable AI command tailored to your selected agent
- The enhanced prompt includes specific tactics, KPIs, and timelines
- Agent-specific context and expertise enhance the quality of your prompts
- Continue the conversation or start a new chat

### 4. **Navigate with Ease**
- Use the sidebar for quick access to features and prompt agents
- Manage your custom agents and templates
- Click the logo to reset and start over
- Toggle sidebar with arrow buttons

## 🏗️ Architecture

```
src/
├── components/           # Reusable UI components
│   ├── Layout/          # Sidebar, Header
│   ├── Landing/         # Main prompt input
│   └── Chat/           # Chat interface
├── hooks/              # Custom React hooks
├── types/              # TypeScript definitions
└── App.tsx            # Main orchestrator
```

### **Key Components**
- **`LandingPage`**: Centered prompt input with animations
- **`ChatContainer`**: Full chat interface with messages
- **`Sidebar`**: Collapsible navigation panel
- **`ChatBubble`**: Reusable message components

### **State Management**
- **`useAppState`**: Manages UI states and animations
- **`useSidebar`**: Handles sidebar visibility
- **TypeScript**: Full type safety throughout

## 🎨 Design System

### **Color Palette**
- **Smoky Black**: Deep, rich backgrounds
- **Coral**: Primary accent color for highlights
- **Brown Sugar**: Warm secondary accents
- **Bistre**: Subtle text and borders

### **Animations**
- **Entrance Effects**: Fade-in, scale, and slide animations
- **Input Transformation**: 8x scale with rotation
- **Text Movement**: Smooth path animation to chat position
- **Loading States**: Bouncing dots and pulse effects

## 🔧 Customization

### **Adding New Features**
1. Create components in appropriate folders
2. Add TypeScript interfaces in `types/`
3. Export from index files for clean imports
4. Follow existing naming conventions

### **Styling Guidelines**
- Use TailwindCSS classes exclusively
- Follow the warm color palette
- Add hover effects and transitions
- Maintain consistent spacing

## 🚀 Future Roadmap

### **Core Features**
- [ ] **Prompt Agents**: Predefined agents (Software Developer, Manager, Designer, etc.)
- [ ] **Custom Agent Builder**: Create and save your own specialized agents
- [ ] **Agent Marketplace**: Share and discover community-created agents
- [ ] **Chat History**: Persistent conversation storage
- [ ] **Prompt Templates**: Pre-built prompt library

### **Platform Features**
- [ ] **Desktop App**: Native desktop applications for Windows, macOS, and Linux
- [ ] **Progressive Web App**: Installable web app with offline capabilities
- [ ] **Cross-Platform Sync**: Seamless data synchronization across devices
- [ ] **Offline Mode**: Work without internet connection

### **Advanced Features**
- [ ] **Settings Panel**: User customization options
- [ ] **Export Features**: Save enhanced prompts
- [ ] **API Integration**: Connect to real AI services
- [ ] **Keyboard Shortcuts**: Power user features
- [ ] **Team Collaboration**: Share agents and templates with your team

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Bundled with [Vite](https://vitejs.dev/)
- Cross-platform support with [Electron](https://www.electronjs.org/) *(Coming Soon)*
- Icons from [Heroicons](https://heroicons.com/)

---

*Transform your prompts, unleash your creativity!*
