import { Mail, Send, Github, Linkedin, Phone } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const formData = Object.fromEntries(new FormData(e.currentTarget))
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        setStatus('Thanks! I will get back to you shortly.')
        e.currentTarget.reset()
      } else {
        setStatus('Something went wrong. Please try again later.')
      }
    } catch (err) {
      setStatus('Unable to reach server right now.')
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Contact</h2>
          <p className="mt-2 text-slate-600">Let’s connect — open to internships, projects, and mentorship.</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-600">Name</label>
              <input name="name" defaultValue="Kasani Vignesh Kumar" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="text-sm text-slate-600">Email</label>
              <input name="email" type="email" defaultValue="vigneshkumar3233@gmail.com" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm text-slate-600">Message</label>
            <textarea name="message" rows="5" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="mt-6 flex items-center gap-3">
            <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">
              <Send className="h-4 w-4" /> Send
            </button>
            <span className="text-sm text-slate-600">{status}</span>
          </div>
        </form>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
          <a href="#" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"><Github className="h-4 w-4" /> GitHub</a>
          <a href="#" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"><Linkedin className="h-4 w-4" /> LinkedIn</a>
          <a href="mailto:vigneshkumar3233@gmail.com" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"><Mail className="h-4 w-4" /> Email</a>
          <a href="tel:+919849556730" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"><Phone className="h-4 w-4" /> +91 9849556730</a>
        </div>
      </div>
    </section>
  )
}
