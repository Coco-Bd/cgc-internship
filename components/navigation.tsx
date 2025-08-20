"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, FileText, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "company", label: "Company" },
  { id: "missions", label: "Missions & Role" },
  { id: "tools", label: "Tools & Methods" },
  { id: "responsibilities", label: "Responsibilities" },
  { id: "team", label: "Team & Communication" },
  { id: "autonomy", label: "Autonomy" },
  { id: "assessment", label: "Assessment" },
  { id: "conclusion", label: "Conclusion" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handlePrint = () => {
    window.print()
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()

    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setMobileMenuOpen(false)
  }

  const handleThemeToggle = () => {
    console.log("[v0] Current theme:", theme)
    const newTheme = theme === "dark" ? "light" : "dark"
    console.log("[v0] Setting theme to:", newTheme)
    setTheme(newTheme)
  }

  if (!mounted) {
    return null
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">C</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <h2 className="font-bold text-sm sm:text-base text-foreground font-space-grotesk truncate">
                    CGC Internship
                  </h2>
                  <p className="text-xs text-muted-foreground truncate">Bachelor 2 Report</p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {sections.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-muted/50"
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" onClick={handlePrint} className="no-print hidden sm:flex">
                <FileText className="h-4 w-4 mr-2" />
                Export PDF
              </Button>
              <Button variant="ghost" size="sm" onClick={handleThemeToggle} className="no-print relative">
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-200 dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-200 dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden"
              >
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="grid grid-cols-2 gap-2">
                {sections.map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => handleNavClick(e, id)}
                    className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  >
                    {label}
                  </a>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border/50">
                <Button variant="outline" size="sm" onClick={handlePrint} className="w-full no-print bg-transparent">
                  <FileText className="h-4 w-4 mr-2" />
                  Export PDF
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className="h-16"></div>
    </>
  )
}
