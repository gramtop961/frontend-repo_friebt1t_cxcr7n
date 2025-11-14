import { UserShield } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">About</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Aspiring Cybersecurity Analyst with a solid foundation in vulnerability assessment, penetration testing,
              and SIEM monitoring. Motivated to apply technical knowledge and project experience to real-world security
              operations while continuing to learn and grow in the field.
            </p>
            <div className="mt-6">
              <h3 className="font-semibold text-slate-900 flex items-center gap-2"><UserShield className="h-5 w-5" /> Experience</h3>
              <div className="mt-3 space-y-4 text-sm text-slate-700">
                <div>
                  <p className="font-medium text-slate-900">Security Analyst Intern — TechDefence Labs Solution (TechD Cybersecurity Ltd)</p>
                  <p className="text-slate-600">Dec 2024 – May 2025</p>
                  <ul className="list-disc ml-5 mt-1 space-y-1">
                    <li>Conducted a security analysis on 10+ websites, reducing risk exposure by 35%.</li>
                    <li>Executed vulnerability scans and penetration tests, improving network resilience.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-slate-900">CyberSecurity Analyst Intern — Cyber and Forensic Security Solutions</p>
                  <p className="text-slate-600">Apr 2024 (On-site), Remote</p>
                  <ul className="list-disc ml-5 mt-1 space-y-1">
                    <li>Performed log monitoring and analysis to detect suspicious activities.</li>
                    <li>Conducted attack simulations using Metasploitable 2, DVWA, Wireshark, and Burp Suite.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-slate-900">Education</h3>
              <p className="text-sm text-slate-700 mt-1">Parul Institute of Engineering & Technology, Gujarat — B.Tech in Computer Science (Cybersecurity) (Sep 2021 – Nov 2025)</p>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-700">
              <p><span className="font-semibold text-slate-900">Phone:</span> +91 9849556730</p>
              <p className="mt-1"><span className="font-semibold text-slate-900">Email:</span> <a href="mailto:vigneshkumar3233@gmail.com" className="underline">vigneshkumar3233@gmail.com</a></p>
              <p className="mt-4 text-slate-600">Open to internships, security analyst trainee roles, and collaborative projects.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
