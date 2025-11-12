import React from 'react'
import Spline from '@splinetool/react-spline'
import { ShieldCheck, Gauge, Zap, LineChart } from 'lucide-react'

function App() {
  const accent = '#2596be'

  const features = [
    {
      icon: ShieldCheck,
      title: 'Enterprise-grade security',
      desc: 'Data encryption in transit and at rest, SSO, and role-based access by default.'
    },
    {
      icon: Gauge,
      title: 'Performance at scale',
      desc: 'Built for modern workloads with millisecond response times and high availability.'
    },
    {
      icon: Zap,
      title: 'Automated workflows',
      desc: 'Connect your tools and remove manual steps with event-driven automation.'
    },
    {
      icon: LineChart,
      title: 'Precise analytics',
      desc: 'Real-time dashboards with drill-downs for clean, decision-ready insights.'
    }
  ]

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Top navigation (simple) */}
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full" style={{ backgroundColor: accent }} />
            <span className="font-semibold tracking-tight">FintechOS</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a className="hover:text-gray-900 text-gray-600" href="#features">Features</a>
            <a className="hover:text-gray-900 text-gray-600" href="#pricing">Pricing</a>
            <a className="hover:text-gray-900 text-gray-600" href="#about">About</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-full border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Log in
            </button>
            <button
              className="rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm"
              style={{ backgroundColor: accent }}
            >
              Get started
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
            {/* Copy */}
            <div>
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                style={{ backgroundColor: '#eef7fb', color: accent }}
              >
                Modern B2B SaaS for Finance Teams
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Built for trust, efficiency, and precision.
              </h1>
              <p className="mt-4 text-gray-600 text-base md:text-lg max-w-xl">
                Streamline approvals, automate reconciliations, and stay audit-ready with a platform
                that looks clean, feels fast, and scales with your business.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  className="rounded-full px-6 py-3 text-base font-semibold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{ backgroundColor: accent }}
                >
                  Start free trial
                </button>
                <button
                  className="rounded-full px-6 py-3 text-base font-semibold border text-gray-800 hover:bg-gray-50"
                >
                  Book a demo
                </button>
              </div>

              <div className="mt-6 text-xs text-gray-500">
                No credit card required • SOC 2 Type II • EU data residency
              </div>
            </div>

            {/* 3D Spline mockup */}
            <div className="relative">
              <div className="relative h-[420px] md:h-[480px] lg:h-[560px] rounded-2xl border border-gray-100 shadow-[0_10px_40px_rgba(2,6,23,0.08)] overflow-hidden bg-white/60 backdrop-blur">
                {/* Subtle gradient glow */}
                <div className="pointer-events-none absolute inset-0" aria-hidden>
                  <div
                    className="absolute -top-20 -right-20 h-72 w-72 rounded-full blur-3xl opacity-40"
                    style={{ background: accent }}
                  />
                </div>
                {/* Spline canvas */}
                <Spline
                  scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section id="features" className="py-12 md:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
              Everything you need to run finance with confidence
            </h2>
            <p className="mt-3 text-gray-600">
              Minimalist by design. Powerful under the hood.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, desc }, idx) => (
              <div key={idx} className="group rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl mb-4" style={{ backgroundColor: '#eef7fb' }}>
                  <Icon size={22} style={{ color: accent }} />
                </div>
                <h3 className="text-base font-semibold text-gray-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-gray-100 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-white">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Experience a faster, cleaner back-office.</h3>
              <p className="text-gray-600 mt-1">Try it free for 14 days. Cancel anytime.</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                className="rounded-full px-6 py-3 text-base font-semibold text-white shadow-sm"
                style={{ backgroundColor: accent }}
              >
                Start now
              </button>
              <button className="rounded-full px-6 py-3 text-base font-semibold border text-gray-800 hover:bg-gray-50">
                Talk to sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 text-sm text-gray-500">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full" style={{ backgroundColor: accent }} />
            <span>© {new Date().getFullYear()} FintechOS</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Security</a>
            <a href="#" className="hover:text-gray-700">Imprint</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
