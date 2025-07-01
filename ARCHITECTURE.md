# PromptTron Architecture

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Layout/          # Layout-related components
│   │   ├── Sidebar.tsx  # Left navigation sidebar
│   │   └── Header.tsx   # App header with logo
│   ├── Landing/         # Landing page components
│   │   └── LandingPage.tsx  # Main prompt input interface
│   ├── Chat/           # Chat interface components
│   │   ├── ChatBubble.tsx   # Individual message bubbles
│   │   ├── ChatInput.tsx    # Bottom input component
│   │   └── ChatContainer.tsx # Complete chat interface
│   └── index.ts        # Component exports
├── hooks/              # Custom React hooks
│   ├── useAppState.ts  # Main app state management
│   ├── useSidebar.ts   # Sidebar state management
│   └── index.ts        # Hook exports
├── types/              # TypeScript type definitions
│   └── index.ts        # All app types
├── App.tsx            # Main app orchestrator
├── index.css          # Global styles and animations
└── main.tsx           # App entry point
```

## 🎯 Key Features

### Modular Architecture
- **Separation of Concerns**: Each component has a single responsibility
- **Reusable Components**: Chat bubbles, inputs, and layout components can be reused
- **Custom Hooks**: Business logic separated from UI components
- **Type Safety**: Full TypeScript support with defined interfaces

### Sidebar Navigation
- **Collapsible Design**: Toggles between 64px (collapsed) and 256px (expanded)
- **Navigation Items**: New Chat, History, Templates, Settings, Help
- **Responsive Layout**: Auto-adjusts main content based on sidebar state
- **Professional UI**: Matches app's warm color palette

### State Management
- **useAppState**: Manages all app state and animations
- **useSidebar**: Handles sidebar visibility and interactions
- **Clean API**: Simple prop passing with clear interfaces

## 🎨 Component Breakdown

### Layout Components
- **Sidebar**: Left navigation with toggle functionality
- **Header**: Centered logo with click-to-reset functionality

### Landing Components
- **LandingPage**: Complete landing interface with animations and input

### Chat Components
- **ChatBubble**: Reusable message bubbles (user/AI/processing)
- **ChatInput**: Bottom input with send button
- **ChatContainer**: Complete chat interface layout

## 🔄 Animation Flow

1. **Initial State**: Landing page with centered input
2. **Expanding State**: Input scales to 8x size
3. **Text Moving State**: User text animates from center to top-right
4. **Processing State**: Shows "Processing prompt..." with loading animation
5. **Chat State**: Final chat interface with AI response

## 🎭 UI States

```typescript
type UIState = 'initial' | 'expanding' | 'text-moving' | 'processing' | 'chat'
```

- **initial**: Landing page
- **expanding**: Input box scaling animation
- **text-moving**: Text animating to chat position
- **processing**: Loading state with bouncing dots
- **chat**: Final chat interface

## 🎨 Styling

- **TailwindCSS v4**: Utility-first styling
- **Custom Color Palette**: Warm smoky/coral theme
- **CSS Animations**: Smooth transitions and effects
- **Responsive Design**: Works on all screen sizes

## 🚀 Development Guidelines

### Adding New Components
1. Create component in appropriate folder
2. Add TypeScript interface for props
3. Export from `components/index.ts`
4. Follow existing naming conventions

### Adding New Hooks
1. Create hook in `hooks/` folder
2. Add return type interface in `types/`
3. Export from `hooks/index.ts`
4. Follow `use` prefix convention

### Styling Guidelines
- Use TailwindCSS classes exclusively
- Follow warm color palette (coral/brown-sugar/smoky-black)
- Add hover effects and transitions
- Maintain consistent spacing (px-8, py-6, etc.)

## 🔧 Future Enhancements

- **Chat History**: Implement persistent chat storage
- **Prompt Templates**: Pre-built prompt library
- **Settings Panel**: User customization options
- **Dark/Light Themes**: Additional color schemes
- **Keyboard Shortcuts**: Power user features 