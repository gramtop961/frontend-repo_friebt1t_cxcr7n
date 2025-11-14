import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Network Sniffer (Python)',
    description: 'Real-time packet capture and analysis for 100K+ packets with custom filtering and alerting to detect suspicious activity. Improved monitoring efficiency by 35%.',
    tags: ['Python', 'Scapy', 'PCAP', 'Detection'],
    link: '#',
  },
  {
    title: 'Web Crawler (Python)',
    description: 'Multithreaded crawler that scraped and indexed 50K+ pages, improving crawl performance by 40% and structuring data for research/analysis.',
    tags: ['Python', 'Threads', 'Requests/BS4'],
    link: '#',
  },
  {
    title: 'Vulnerability Scan & Remediation',
    description: 'Assessed a lab network with Nessus, prioritized CVEs by CVSS, and documented remediation with before/after validation.',
    tags: ['Nessus', 'CVSS', 'Windows/Linux'],
    link: '#',
  },
  {
    title: 'SOC Log Monitoring & Detections',
    description: 'Structured log monitoring workflows and basic detections for brute-force and suspicious process creation.',
    tags: ['SIEM', 'Windows', 'Linux'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Projects</h2>
          <p className="mt-2 text-slate-600">Hands-on work that demonstrates practical security skills.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{p.description}</p>
                </div>
                <a href={p.link} className="p-2 rounded-md hover:bg-slate-100" aria-label="Open project">
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs rounded-full bg-slate-100 text-slate-700">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
