import Spline from '@splinetool/react-spline'
import { ShieldCheck, Lock, MousePointerClick } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="backdrop-blur-xl bg-white/60 rounded-2xl p-6 sm:p-8 shadow-lg border border-white/30">
              <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full text-xs font-medium bg-indigo-600/10 text-indigo-700">
                <ShieldCheck className="h-4 w-4" />
                Cybersecurity Analyst Trainee
              </div>
              <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                Safeguarding systems with curiosity, rigor, and code
              </h1>
              <p className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                I analyze threats, harden configurations, and turn complex security concepts into practical defenses. Focused on SOC workflows, vulnerability management, and automation.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">
                  <MousePointerClick className="h-4 w-4" />
                  View projects
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-900 border border-slate-200 hover:bg-slate-50">
                  <Lock className="h-4 w-4" />
                  Get in touch
                </a>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-600">
                <div className="rounded-lg p-3 bg-white/60 border border-white/50">SIEM Monitoring</div>
                <div className="rounded-lg p-3 bg-white/60 border border-white/50">Vuln Scanning</div>
                <div className="rounded-lg p-3 bg-white/60 border border-white/50">Incident Response</div>
                <div className="rounded-lg p-3 bg-white/60 border border-white/50">Security Automation</div>
              </div>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/90" />
    </section>
  )
}
