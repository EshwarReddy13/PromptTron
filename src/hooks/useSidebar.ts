import { useState } from 'react'

export const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const openSidebar = () => {
    setIsOpen(true)
  }

  const closeSidebar = () => {
    setIsOpen(false)
  }

  return {
    isOpen,
    toggleSidebar,
    openSidebar,
    closeSidebar
  }
} 