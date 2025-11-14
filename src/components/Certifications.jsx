import { Award } from 'lucide-react'

const certs = [
  { name: 'eJPT – INE', issuer: 'Practical Penetration Testing', year: '' },
  { name: 'Certified Network Security Practitioner (CNSP)', issuer: 'TheSecOpsGroup', year: '' },
  { name: 'Geo-data Sharing and CyberSecurity', issuer: 'IIRS (ISRO)', year: '' },
  { name: 'Ethical Hacking Essentials', issuer: 'EC-Council', year: '' },
  { name: 'Network Defense & Cyber Threat Management', issuer: 'Cisco', year: '' },
  { name: 'Web Application Penetration Testing – AimNxt', issuer: 'Certification Course (Jul 2025 – Oct 2025)', year: '' },
]

export default function Certifications() {
  return (
    <section id="certs" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Certifications</h2>
          <p className="mt-2 text-slate-600">Credentials and coursework aligned to my hands-on learning.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c) => (
            <div key={c.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-700">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-slate-900">{c.name}</h3>
              <p className="text-sm text-slate-600">{c.issuer}</p>
              {c.year && <p className="mt-1 text-xs text-slate-500">{c.year}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
