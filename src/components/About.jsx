import { UserShield, Cpu, Sparkles } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">About me</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              I’m a cybersecurity analyst trainee focused on defense. I enjoy threat hunting, building detection logic, and making systems harder to break.
              My approach is practical and methodical: lab first, document second, improve third.
            </p>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Currently exploring Blue Team tools, writing Python to automate repetitive tasks, and strengthening foundations across networking and operating systems.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-700">
                <UserShield className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-slate-900">Focus areas</p>
                <p className="text-sm text-slate-600">Blue team, detection, automation</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>• Build clear, actionable documentation</li>
              <li>• Communicate findings simply</li>
              <li>• Keep learning daily</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
