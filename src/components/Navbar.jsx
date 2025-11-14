import { useState } from 'react'
import { Menu, Shield, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#certs', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm">
              <Shield className="h-5 w-5" />
            </span>
            <span>Cyber Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-700 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-100">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-100">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800">
              <Mail className="h-4 w-4" />
              <span>Get in touch</span>
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-slate-100">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="px-3 py-2 rounded-md hover:bg-slate-100" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-3 px-1 pt-2">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-100">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-100">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
