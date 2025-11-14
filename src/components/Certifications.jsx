import { Award, FileBadge } from 'lucide-react'

const certs = [
  { name: 'CompTIA Security+ (Studying)', issuer: 'CompTIA', year: '2025' },
  { name: 'Google Cybersecurity Certificate', issuer: 'Google/Coursera', year: '2024' },
  { name: 'TryHackMe Jr Penetration Tester Path', issuer: 'TryHackMe', year: '2024' },
]

export default function Certifications() {
  return (
    <section id="certs" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Certifications & Learning</h2>
          <p className="mt-2 text-slate-600">Continuous learning to strengthen fundamentals and practice.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c) => (
            <div key={c.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-700">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-slate-900">{c.name}</h3>
              <p className="text-sm text-slate-600">{c.issuer}</p>
              <p className="mt-1 text-xs text-slate-500">{c.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
