import { Shield, Bug, Radar, Terminal, Server, KeyRound, Network, Database } from 'lucide-react'

const skills = [
  { icon: Shield, title: 'Offensive Security & VAPT', items: ['Nmap', 'Nessus', 'Shodan', 'Burp Suite', 'Metasploit', 'Gobuster', 'SQLMap'] },
  { icon: Radar, title: 'Threat Detection & Response', items: ['SIEM (Splunk, Seceon, Microsoft Sentinel)', 'IDS/IPS', 'Log monitoring'] },
  { icon: Bug, title: 'Threat Intelligence & IR', items: ['VirusTotal', 'AbuseIPDB', 'IR & Forensics (Basics)'] },
  { icon: Terminal, title: 'Pentesting Methodologies', items: ['OWASP Top 10', 'Kill chain', 'Reporting'] },
  { icon: Network, title: 'Networking & Protocols', items: ['TCP/IP', 'DNS/HTTPs', 'VPN', 'Wireless Security', 'Firewalls'] },
  { icon: Server, title: 'Operating Systems', items: ['Kali Linux', 'Ubuntu', 'Windows'] },
  { icon: KeyRound, title: 'Identity & Access', items: ['IAM', 'MFA/SSO', 'Least privilege'] },
  { icon: Database, title: 'Cloud Security', items: ['AWS (S3 Security)', 'Azure'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Technical Skills</h2>
          <p className="mt-2 text-slate-600">Tools and domains I work with across blue and red team fundamentals.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ icon: Icon, title, items }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-all">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                {items.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
