interface HeaderProps {
  onLogoClick: () => void
  showBorder?: boolean
}

const Header = ({ onLogoClick, showBorder = false }: HeaderProps) => {
  return (
    <div className={`p-6 ${showBorder ? 'border-b border-coral-500/20' : ''}`}>
      <h1 
        className="text-2xl font-bold text-white text-center cursor-pointer hover:scale-105 transition-transform duration-300"
        onClick={onLogoClick}
      >
        <span className="text-coral-500 text-glow">Prompt</span>Tron
      </h1>
    </div>
  )
}

export default Header 