import React from 'react'

const HomePage = () => {
  return (
    <div>
      <div className="relative min-h-screen overflow-hidden bg-[#0a0e27]">
        <div className="fixed top-0 left-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-500/20 opacity-20 blur-3xl" />
        <div className="anim-delay-1s fixed right-1/4 bottom-0 h-96 w-96 animate-pulse rounded-full bg-blue-500/20 opacity-20 blur-3xl" />
        <div className="anim-delay-2s fixed top-1/2 left-1/2 h-96 w-96 animate-pulse rounded-full bg-violet-500/10 opacity-20 blur-3xl" />
        <div className="relative z-10">
          <nav className="glass-strong fixed top-0 right-0 left-0 z-50 shadow-lg shadow-purple-500/10">
            <div className="mx-auto max-w-7xl px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <a href="/" className="flex items-center">
                      <img
                        src="https://spyderbot.net/build/assets/logo-text-GE4uLQKL.png"
                        alt="SpyderBot"
                        className="h-5"
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </a>
                  </div>
                </div>
                <div className="hidden items-center gap-8 md:flex">
                  <a href="/features" className="text-gray-300 transition-colors hover:text-purple-400">
                    Features
                  </a>
                  <a href="/pricing" className="text-gray-300 transition-colors hover:text-purple-400">
                    Pricing
                  </a>
                  <a href="/documentation" className="text-gray-300 transition-colors hover:text-purple-400">
                    Documentation
                  </a>
                  <a href="/public-reports" className="text-gray-300 transition-colors hover:text-purple-400">
                    Public reports
                  </a>
                  <a href="/press" className="text-gray-300 transition-colors hover:text-purple-400">
                    Press
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <a href="/login">
                    <button
                      data-slot="button"
                      className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap text-gray-300 transition-all outline-none hover:bg-purple-500/10 hover:text-purple-400 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                    >
                      Sign In
                    </button>
                  </a>
                  <a href="/register">
                    <button
                      data-slot="button"
                      className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-sm font-medium whitespace-nowrap text-white transition-all outline-none hover:from-purple-700 hover:to-blue-700 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                    >
                      Start Free
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <section className="px-6 pt-32 pb-20">
            <div className="mx-auto max-w-6xl text-center">
              <h1 className="mb-6 translate-y-0 text-5xl leading-tight opacity-100 transition-all duration-1000 md:text-6xl">
                <span className="text-glass-reflection inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  <div>GEO Analytics</div>
                  <div>Driving Brand Mastery</div>
                </span>
              </h1>
              <div className="mb-12 flex translate-y-0 flex-wrap justify-center gap-8 opacity-100 transition-all delay-200 duration-1000">
                <div className="group flex cursor-pointer flex-col items-center">
                  <div className="relative">
                    <img
                      src="https://spyderbot.net/build/assets/openai-BATt8aU5.svg"
                      alt="OpenAI"
                      className="mb-1 h-10 w-10 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.6)]"
                      style={{ filter: 'invert(1) brightness(100)' }}
                    />
                    <div className="absolute inset-0 -z-10 rounded-full bg-purple-500/0 blur-xl transition-all duration-300 group-hover:bg-purple-500/20" />
                  </div>
                  <span className="text-sm text-gray-300 transition-colors duration-300 group-hover:text-purple-400">
                    OpenAI
                  </span>
                </div>
                <div className="group flex cursor-pointer flex-col items-center">
                  <div className="relative">
                    <img
                      src="https://spyderbot.net/build/assets/grok-CmsYpdpO.svg"
                      alt="Grok"
                      className="mb-1 h-10 w-10 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.6)]"
                      style={{ filter: 'invert(1) brightness(100)' }}
                    />
                    <div className="absolute inset-0 -z-10 rounded-full bg-purple-500/0 blur-xl transition-all duration-300 group-hover:bg-purple-500/20" />
                  </div>
                  <span className="text-sm text-gray-300 transition-colors duration-300 group-hover:text-purple-400">
                    Grok
                  </span>
                </div>
                <div className="group flex cursor-pointer flex-col items-center">
                  <div className="relative">
                    <img
                      src="https://spyderbot.net/build/assets/gemini-Bclm3yrv.svg"
                      alt="Gemini"
                      className="mb-1 h-10 w-10 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                    />
                    <div className="absolute inset-0 -z-10 rounded-full bg-blue-500/0 blur-xl transition-all duration-300 group-hover:bg-blue-500/20" />
                  </div>
                  <span className="text-sm text-gray-300 transition-colors duration-300 group-hover:text-blue-400">
                    Gemini
                  </span>
                </div>
                <div className="group flex cursor-pointer flex-col items-center">
                  <div className="relative">
                    <img
                      src="https://spyderbot.net/build/assets/copilot-CMCQCbOH.svg"
                      alt="Copilot"
                      className="mb-1 h-10 w-10 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]"
                    />
                    <div className="absolute inset-0 -z-10 rounded-full bg-cyan-500/0 blur-xl transition-all duration-300 group-hover:bg-cyan-500/20" />
                  </div>
                  <span className="text-sm text-gray-300 transition-colors duration-300 group-hover:text-cyan-400">
                    Copilot
                  </span>
                </div>
                <div className="group flex cursor-pointer flex-col items-center">
                  <div className="relative">
                    <img
                      src="https://spyderbot.net/build/assets/perplexity-DHV5tWQK.svg"
                      alt="Perplexity"
                      className="mb-1 h-10 w-10 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:drop-shadow-[0_0_15px_rgba(16,185,129,0.6)]"
                    />
                    <div className="absolute inset-0 -z-10 rounded-full bg-green-500/0 blur-xl transition-all duration-300 group-hover:bg-green-500/20" />
                  </div>
                  <span className="text-sm text-gray-300 transition-colors duration-300 group-hover:text-green-400">
                    Perplexity
                  </span>
                </div>
                <div className="group flex cursor-pointer flex-col items-center">
                  <div className="relative">
                    <img
                      src="https://spyderbot.net/build/assets/meta-BbZH1I25.svg"
                      alt="Llama"
                      className="mb-1 h-10 w-10 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                      style={{
                        filter:
                          'invert(47%) sepia(96%) saturate(2777%) hue-rotate(183deg) brightness(92%) contrast(99%)',
                      }}
                    />
                    <div className="absolute inset-0 -z-10 rounded-full bg-blue-500/0 blur-xl transition-all duration-300 group-hover:bg-blue-500/20" />
                  </div>
                  <span className="text-sm text-gray-300 transition-colors duration-300 group-hover:text-blue-400">
                    Llama
                  </span>
                </div>
                <div className="group flex cursor-pointer flex-col items-center">
                  <div className="relative">
                    <img
                      src="https://spyderbot.net/build/assets/claude-CSugY8Hj.svg"
                      alt="Claude"
                      className="mb-1 h-10 w-10 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]"
                    />
                    <div className="absolute inset-0 -z-10 rounded-full bg-pink-500/0 blur-xl transition-all duration-300 group-hover:bg-pink-500/20" />
                  </div>
                  <span className="text-sm text-gray-300 transition-colors duration-300 group-hover:text-pink-400">
                    Claude
                  </span>
                </div>
              </div>
              <p className="mx-auto mb-12 max-w-3xl translate-y-0 text-xl text-gray-400 opacity-100 transition-all delay-300 duration-1000">
                What do LLMs mention about your brand/competitors?
              </p>
              <div className="mx-auto mb-16 max-w-2xl">
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      data-slot="input"
                      className="file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input bg-input-background focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive glass flex h-14 w-full min-w-0 rounded-xl border px-6 py-1 text-base text-white shadow-lg shadow-purple-500/10 transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      placeholder="Enter your website URL (e.g., example.com)"
                    />
                  </div>
                  <button
                    data-slot="button"
                    className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 glass-reflection relative inline-flex h-14 shrink-0 items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-2 text-sm font-medium whitespace-nowrap text-white shadow-xl shadow-purple-500/30 transition-shadow outline-none hover:from-purple-700 hover:to-blue-700 hover:shadow-purple-500/50 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 has-[>svg]:px-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                    disabled
                  >
                    Get Overview
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-sparkles h-4 w-4 text-purple-400"
                    >
                      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                      <path d="M20 3v4" />
                      <path d="M22 5h-4" />
                      <path d="M4 17v2" />
                      <path d="M5 18H3" />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                className="glass relative w-full overflow-hidden rounded-xl shadow-2xl shadow-purple-500/20"
                style={{ minHeight: 300 }}
              >
                <div className="glass-reflection flex h-full flex-col items-center justify-center py-16 text-gray-400">
                  <div className="glass-light group mb-4 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full shadow-lg shadow-purple-500/20 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/40">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chart-column h-8 w-8 text-purple-400 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:text-purple-300 group-hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.6)]"
                    >
                      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                      <path d="M18 17V9" />
                      <path d="M13 17V5" />
                      <path d="M8 17v-3" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl text-gray-300">Revolutionize Your AI Visibility Today</h3>
                  <p className="max-w-md text-sm text-gray-500">
                    SpyderBot with over 20,000 distributed LLM-bots will collect and analyze data in real-time, scaling
                    to handle thousands of queries per second without rate limits.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="px-6 py-16">
            <div className="mx-auto max-w-6xl">
              <p className="mb-8 translate-y-0 text-center text-white opacity-100 transition-all duration-700">
                Trusted by 1,000+ Brands Worldwide:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8">
                <div
                  className="flex h-16 translate-y-0 items-center rounded-lg border border-white/10 px-6 opacity-100 shadow-lg shadow-purple-500/10 transition-all duration-300 hover:scale-110 hover:border-purple-500/40 hover:shadow-purple-500/20"
                  style={{ backgroundColor: 'rgb(255, 255, 255)', width: 170, transitionDelay: '0ms' }}
                >
                  <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://spyderbot.net/build/assets/mongodb-DlgkxVGV.svg"
                      alt="MongoDB"
                      className="h-auto w-full brightness-200 contrast-125 filter"
                      style={{ width: 170 }}
                    />
                  </a>
                </div>
                <div
                  className="flex h-16 translate-y-0 items-center rounded-lg border border-white/10 px-6 opacity-100 shadow-lg shadow-purple-500/10 transition-all duration-300 hover:scale-110 hover:border-purple-500/40 hover:shadow-purple-500/20"
                  style={{ backgroundColor: 'rgb(255, 255, 255)', width: 170, transitionDelay: '100ms' }}
                >
                  <a href="https://www.docusign.com/" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://spyderbot.net/build/assets/docusign-B26QobHe.svg"
                      alt="Docusign"
                      className="h-auto w-full brightness-200 contrast-125 filter"
                      style={{ width: 170 }}
                    />
                  </a>
                </div>
                <div
                  className="flex h-16 translate-y-0 items-center rounded-lg border border-white/10 px-6 opacity-100 shadow-lg shadow-purple-500/10 transition-all duration-300 hover:scale-110 hover:border-purple-500/40 hover:shadow-purple-500/20"
                  style={{ backgroundColor: 'rgb(255, 255, 255)', width: 170, transitionDelay: '200ms' }}
                >
                  <a href="https://www.opera.com/" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://spyderbot.net/build/assets/opera-54CDNIB8.svg"
                      alt="Opera"
                      className="h-auto w-full brightness-200 contrast-125 filter"
                      style={{ width: 170 }}
                    />
                  </a>
                </div>
                <div
                  className="flex h-16 translate-y-0 items-center rounded-lg border border-white/10 px-6 opacity-100 shadow-lg shadow-purple-500/10 transition-all duration-300 hover:scale-110 hover:border-purple-500/40 hover:shadow-purple-500/20"
                  style={{ backgroundColor: 'rgb(255, 255, 255)', width: 170, transitionDelay: '300ms' }}
                >
                  <a href="https://www.auto1.com/" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://spyderbot.net/build/assets/auto1-Ca3_MFxp.svg"
                      alt="Auto1"
                      className="h-auto w-full brightness-200 contrast-125 filter"
                      style={{ width: 170 }}
                    />
                  </a>
                </div>
                <div
                  className="flex h-16 translate-y-0 items-center rounded-lg border border-white/10 px-6 opacity-100 shadow-lg shadow-purple-500/10 transition-all duration-300 hover:scale-110 hover:border-purple-500/40 hover:shadow-purple-500/20"
                  style={{ backgroundColor: 'rgb(255, 255, 255)', width: 170, transitionDelay: '400ms' }}
                >
                  <a href="https://www.workable.com/" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://spyderbot.net/build/assets/workable-GCaB0P10.png"
                      alt="Workable"
                      className="h-auto w-full brightness-200 contrast-125 filter"
                      style={{ width: 170 }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="px-6 py-20">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 text-center">
                <h2 className="mx-auto mb-4 max-w-3xl translate-y-8 text-4xl opacity-100 transition-all duration-1000">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    We have no idea how visible our brand and website mention on Grok or ChatGPT, let alone how to even
                    optimize it
                  </span>
                </h2>
                <p className="translate-y-8 text-xl text-gray-400 opacity-100 transition-all delay-300 duration-1000">
                  <strong>Your Marketing Manager</strong>
                  <br />
                  in your business. Right now.
                </p>
              </div>
            </div>
          </section>
          <section className="relative overflow-hidden px-6 py-20">
            <div className="relative z-10 mx-auto max-w-7xl">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div className="-translate-x-8 space-y-6 opacity-100 transition-all duration-1000">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-sparkles h-4 w-4 text-purple-400"
                    >
                      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                      <path d="M20 3v4" />
                      <path d="M22 5h-4" />
                      <path d="M4 17v2" />
                      <path d="M5 18H3" />
                    </svg>
                    <span className="text-sm font-medium text-purple-400">AI-Powered Insights</span>
                  </div>
                  <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Elevate Your Brand
                      <br />
                      in the AI Era
                    </span>
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-400">
                    Imagine dominating AI searches where LLMs like ChatGPT and Gemini drive 70% of queries, unlocking
                    billions in untapped opportunities. SpyderBot delivers real-time insights to reveal:{' '}
                    <span className="font-semibold text-white">
                      "What do LLMs mention about your brand or competitors?"
                    </span>{' '}
                    with precise sentiment and ranking analysis, and{' '}
                    <span className="font-semibold text-white">
                      "How are the LLMs analyzing and tracking your website?"
                    </span>{' '}
                    through advanced crawler monitoring. Boost your generative engine optimization (GEO) for 20-30% more
                    traffic and smarter decisions.
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="glass group glass-reflection flex items-start gap-3 rounded-lg border border-purple-500/20 p-4 transition-all hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-trending-up h-5 w-5 text-white"
                        >
                          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                          <polyline points="16 7 22 7 22 13" />
                        </svg>
                      </div>
                      <div>
                        <div className="mb-1 font-semibold text-white">20-30% Traffic Boost</div>
                        <div className="text-sm text-gray-400">GEO optimization results</div>
                      </div>
                    </div>
                    <div className="glass group glass-reflection flex items-start gap-3 rounded-lg border border-purple-500/20 p-4 transition-all hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-target h-5 w-5 text-white"
                        >
                          <circle cx={12} cy={12} r={10} />
                          <circle cx={12} cy={12} r={6} />
                          <circle cx={12} cy={12} r={2} />
                        </svg>
                      </div>
                      <div>
                        <div className="mb-1 font-semibold text-white">Real-time Insights</div>
                        <div className="text-sm text-gray-400">Sentiment &amp; ranking analysis</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative translate-x-8 opacity-100 transition-all delay-300 duration-1000">
                  <div className="glass-strong ios-card-elevated relative overflow-hidden rounded-2xl border border-purple-500/20">
                    <div className="relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-600/20">
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-purple-500/30 blur-3xl" />
                        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
                      </div>
                      <div className="relative z-10 flex h-full w-full items-center justify-center p-8">
                        <div className="grid w-full max-w-md grid-cols-3 gap-4">
                          <div className="glass group glass-reflection flex flex-col items-center gap-2 rounded-xl border border-purple-500/20 p-4 transition-all hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-zap h-6 w-6 text-white"
                              >
                                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                              </svg>
                            </div>
                            <div className="text-center text-xs text-gray-300">ChatGPT</div>
                          </div>
                          <div className="glass group glass-reflection flex flex-col items-center gap-2 rounded-xl border border-purple-500/20 p-4 transition-all hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-sparkles h-6 w-6 text-white"
                              >
                                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                                <path d="M20 3v4" />
                                <path d="M22 5h-4" />
                                <path d="M4 17v2" />
                                <path d="M5 18H3" />
                              </svg>
                            </div>
                            <div className="text-center text-xs text-gray-300">Gemini</div>
                          </div>
                          <div className="glass group glass-reflection flex flex-col items-center gap-2 rounded-xl border border-purple-500/20 p-4 transition-all hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-purple-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-target h-6 w-6 text-white"
                              >
                                <circle cx={12} cy={12} r={10} />
                                <circle cx={12} cy={12} r={6} />
                                <circle cx={12} cy={12} r={2} />
                              </svg>
                            </div>
                            <div className="text-center text-xs text-gray-300">Grok</div>
                          </div>
                          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                            <div className="flex h-32 w-32 items-center justify-center rounded-full border-2 border-purple-500/30">
                              <div className="h-16 w-16 rounded-full border-2 border-blue-500/30" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pointer-events-none absolute inset-0">
                        <div className="absolute top-1/4 left-1/4 h-2 w-2 animate-pulse rounded-full bg-purple-400" />
                        <div
                          className="absolute top-1/3 right-1/3 h-2 w-2 animate-pulse rounded-full bg-blue-400"
                          style={{ animationDelay: '0.5s' }}
                        />
                        <div
                          className="absolute bottom-1/4 left-1/3 h-2 w-2 animate-pulse rounded-full bg-cyan-400"
                          style={{ animationDelay: '1s' }}
                        />
                        <div
                          className="absolute right-1/4 bottom-1/3 h-2 w-2 animate-pulse rounded-full bg-purple-400"
                          style={{ animationDelay: '1.5s' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl" />
                  <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" />
                </div>
              </div>
            </div>
          </section>
          <section id="solutions" className="px-6 py-20">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 translate-y-8 text-center opacity-100 transition-all duration-700">
                <h2 className="mb-4 text-4xl">
                  Discover{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Game-Changing
                  </span>{' '}
                  Features
                </h2>
                <p className="text-lg text-gray-400">
                  SpyderBot combines intuitive dashboards with seamless integrations, turning AI data into actionable.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div
                  data-slot="card"
                  className="text-card-foreground glass group glass-reflection relative flex translate-y-8 flex-col gap-6 overflow-hidden rounded-xl border bg-[#1a1f3a] text-center opacity-100 transition-all hover:border-purple-500/40 hover:bg-[#1a1f3a80] hover:shadow-2xl hover:shadow-purple-500/20"
                  style={{ transitionDelay: '0ms' }}
                >
                  <div data-slot="card-content" className="relative z-10 p-6 [&:last-child]:pb-6">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center transition-transform group-hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-megaphone mx-auto h-6 w-6 text-purple-400"
                      >
                        <path d="m3 11 18-5v12L3 14v-3z" />
                        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-200">Brand Insights</h3>
                    <h4 className="mb-3 text-lg font-bold text-gray-400">Outsmart Rivals Instantly</h4>
                    <p className="text-sm text-gray-400">
                      Uncover mentions, sentiment scores (e.g., 65% positive benchmarks), share of voice (45% average),
                      and real-time alerts for surges. Spot gaps in rankings and trends to craft strategies that capture
                      25% more market share—effortlessly refine your edge with data-driven precision.
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-100 transition-opacity group-hover:opacity-100" />
                </div>
                <div
                  data-slot="card"
                  className="text-card-foreground glass group glass-reflection relative flex translate-y-8 flex-col gap-6 overflow-hidden rounded-xl border bg-[#1a1f3a] text-center opacity-100 transition-all hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20"
                  style={{ transitionDelay: '150ms' }}
                >
                  <div data-slot="card-content" className="relative z-10 p-6 [&:last-child]:pb-6">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center transition-transform group-hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-trending-up mx-auto h-6 w-6 text-purple-400"
                      >
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                        <polyline points="16 7 22 7 22 13" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-200">LLM Tracking</h3>
                    <h4 className="mb-3 text-lg font-bold text-gray-400">Monitor AI Interactions Live</h4>
                    <p className="text-sm text-gray-400">
                      Track crawler frequency (e.g., 5 visits/week from bots like GPTBot), indexed pages (89 on
                      average), and referrals (276 from AI sources, up 45%). Get spike alerts and robots.txt
                      recommendations to prevent overloads and secure your site, ensuring optimal performance with 99%
                      uptime.
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-100 transition-opacity group-hover:opacity-100" />
                </div>
                <div
                  data-slot="card"
                  className="text-card-foreground glass group glass-reflection relative flex translate-y-8 flex-col gap-6 overflow-hidden rounded-xl border bg-[#1a1f3a] text-center opacity-100 transition-all hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20"
                  style={{ transitionDelay: '300ms' }}
                >
                  <div data-slot="card-content" className="relative z-10 p-6 [&:last-child]:pb-6">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center transition-transform group-hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-dollar-sign mx-auto h-6 w-6 text-purple-400"
                      >
                        <line x1={12} x2={12} y1={2} y2={22} />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-200">Conversion Behavior</h3>
                    <h4 className="mb-3 text-lg font-bold text-gray-400">Dive Deep into User Actions</h4>
                    <p className="text-sm text-gray-400">
                      Integrate with leading analytics tools for engagement metrics (e.g., 40% bounce from AI traffic),
                      conversion rates (5% uplift potential), and lifetime value ($500 per user cohort). Analyze flows
                      from AI referrals to boost retention by 15-20%—transform insights into revenue growth.
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-100 transition-opacity group-hover:opacity-100" />
                </div>
              </div>
            </div>
          </section>
          <section className="px-6 py-20">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 translate-y-8 text-center opacity-100 transition-all duration-700">
                <h2 className="mb-4 text-4xl">
                  Discover Public{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    GEO Reports
                  </span>
                  <br />
                  for AI-Driven Growth
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div
                  data-slot="card"
                  className="text-card-foreground glass group glass-reflection flex translate-y-8 cursor-pointer flex-col gap-6 overflow-hidden rounded-xl border bg-[#1a1f3a] opacity-100 transition-all hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20"
                  style={{ transitionDelay: '0ms' }}
                >
                  <div className="glass-light relative h-48 overflow-hidden border-b border-purple-500/20">
                    <img
                      src="https://spyderbot.net/storage/report_thumbs/99.png"
                      alt="hoaphat.com.vn"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 hidden bg-gradient-to-br from-purple-500/10 to-blue-500/10 transition-all group-hover:from-purple-500/20 group-hover:to-blue-500/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="glass-light absolute right-4 bottom-4 flex h-16 w-16 items-center justify-center rounded-full bg-black/30 shadow-lg backdrop-blur-sm transition-transform group-hover:scale-110">
                      <span className="text-2xl font-bold text-white">1</span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-external-link h-5 w-5 text-purple-400 opacity-100 drop-shadow-lg transition-opacity group-hover:opacity-100"
                      >
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                    </div>
                  </div>
                  <div data-slot="card-content" className="relative z-10 px-6 [&:last-child]:pb-6">
                    <h3 className="mb-2 font-semibold text-gray-200">hoaphat.com.vn</h3>
                    <div className="mb-3 space-y-1 text-sm text-gray-300">
                      <p>
                        <span className="text-purple-400">LLM-Bots:</span> 46
                      </p>
                      <p>
                        <span className="text-purple-400">Prompts/LLM:</span> 46
                      </p>
                      <p className="text-xs break-words text-gray-500">
                        <span className="text-purple-400">LLMs:</span> ChatGPT, Gemini, Copilot
                      </p>
                    </div>
                    <p className="mb-2 text-xs text-gray-500">Created: Feb 1, 2026</p>
                    <p className="text-xs text-gray-500">By: Minh Long Tran</p>
                  </div>
                </div>
                <div
                  data-slot="card"
                  className="text-card-foreground glass group glass-reflection flex translate-y-8 cursor-pointer flex-col gap-6 overflow-hidden rounded-xl border bg-[#1a1f3a] opacity-100 transition-all hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20"
                  style={{ transitionDelay: '100ms' }}
                >
                  <div className="glass-light relative h-48 overflow-hidden border-b border-purple-500/20">
                    <img
                      src="https://spyderbot.net/storage/report_thumbs/98.png"
                      alt="microsoft.com"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 hidden bg-gradient-to-br from-purple-500/10 to-blue-500/10 transition-all group-hover:from-purple-500/20 group-hover:to-blue-500/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="glass-light absolute right-4 bottom-4 flex h-16 w-16 items-center justify-center rounded-full bg-black/30 shadow-lg backdrop-blur-sm transition-transform group-hover:scale-110">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-external-link h-5 w-5 text-purple-400 opacity-100 drop-shadow-lg transition-opacity group-hover:opacity-100"
                      >
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                    </div>
                  </div>
                  <div data-slot="card-content" className="relative z-10 px-6 [&:last-child]:pb-6">
                    <h3 className="mb-2 font-semibold text-gray-200">microsoft.com</h3>
                    <div className="mb-3 space-y-1 text-sm text-gray-300">
                      <p>
                        <span className="text-purple-400">LLM-Bots:</span> 48
                      </p>
                      <p>
                        <span className="text-purple-400">Prompts/LLM:</span> 48
                      </p>
                      <p className="text-xs break-words text-gray-500">
                        <span className="text-purple-400">LLMs:</span> ChatGPT, Gemini, Copilot
                      </p>
                    </div>
                    <p className="mb-2 text-xs text-gray-500">Created: Feb 1, 2026</p>
                    <p className="text-xs text-gray-500">By: Long Minh Tran</p>
                  </div>
                </div>
                <div
                  data-slot="card"
                  className="text-card-foreground glass group glass-reflection flex translate-y-8 cursor-pointer flex-col gap-6 overflow-hidden rounded-xl border bg-[#1a1f3a] opacity-100 transition-all hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20"
                  style={{ transitionDelay: '200ms' }}
                >
                  <div className="glass-light relative h-48 overflow-hidden border-b border-purple-500/20">
                    <img
                      src="https://spyderbot.net/storage/report_thumbs/97.png"
                      alt="citigroup.com"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 hidden bg-gradient-to-br from-purple-500/10 to-blue-500/10 transition-all group-hover:from-purple-500/20 group-hover:to-blue-500/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="glass-light absolute right-4 bottom-4 flex h-16 w-16 items-center justify-center rounded-full bg-black/30 shadow-lg backdrop-blur-sm transition-transform group-hover:scale-110">
                      <span className="text-2xl font-bold text-white">3</span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-external-link h-5 w-5 text-purple-400 opacity-100 drop-shadow-lg transition-opacity group-hover:opacity-100"
                      >
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                    </div>
                  </div>
                  <div data-slot="card-content" className="relative z-10 px-6 [&:last-child]:pb-6">
                    <h3 className="mb-2 font-semibold text-gray-200">citigroup.com</h3>
                    <div className="mb-3 space-y-1 text-sm text-gray-300">
                      <p>
                        <span className="text-purple-400">LLM-Bots:</span> 50
                      </p>
                      <p>
                        <span className="text-purple-400">Prompts/LLM:</span> 50
                      </p>
                      <p className="text-xs break-words text-gray-500">
                        <span className="text-purple-400">LLMs:</span> ChatGPT, Gemini, Copilot
                      </p>
                    </div>
                    <p className="mb-2 text-xs text-gray-500">Created: Feb 1, 2026</p>
                    <p className="text-xs text-gray-500">By: Minh Long Tran</p>
                  </div>
                </div>
                <div
                  data-slot="card"
                  className="text-card-foreground glass group glass-reflection flex translate-y-8 cursor-pointer flex-col gap-6 overflow-hidden rounded-xl border bg-[#1a1f3a] opacity-100 transition-all hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20"
                  style={{ transitionDelay: '300ms' }}
                >
                  <div className="glass-light relative h-48 overflow-hidden border-b border-purple-500/20">
                    <img
                      src="https://spyderbot.net/storage/report_thumbs/96.png"
                      alt="udemy.com"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 hidden bg-gradient-to-br from-purple-500/10 to-blue-500/10 transition-all group-hover:from-purple-500/20 group-hover:to-blue-500/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="glass-light absolute right-4 bottom-4 flex h-16 w-16 items-center justify-center rounded-full bg-black/30 shadow-lg backdrop-blur-sm transition-transform group-hover:scale-110">
                      <span className="text-2xl font-bold text-white">4</span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-external-link h-5 w-5 text-purple-400 opacity-100 drop-shadow-lg transition-opacity group-hover:opacity-100"
                      >
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                    </div>
                  </div>
                  <div data-slot="card-content" className="relative z-10 px-6 [&:last-child]:pb-6">
                    <h3 className="mb-2 font-semibold text-gray-200">udemy.com</h3>
                    <div className="mb-3 space-y-1 text-sm text-gray-300">
                      <p>
                        <span className="text-purple-400">LLM-Bots:</span> 46
                      </p>
                      <p>
                        <span className="text-purple-400">Prompts/LLM:</span> 46
                      </p>
                      <p className="text-xs break-words text-gray-500">
                        <span className="text-purple-400">LLMs:</span> ChatGPT, Gemini, Copilot
                      </p>
                    </div>
                    <p className="mb-2 text-xs text-gray-500">Created: Feb 1, 2026</p>
                    <p className="text-xs text-gray-500">By: Nhân Trần Thanh</p>
                  </div>
                </div>
                <div
                  data-slot="card"
                  className="text-card-foreground glass group glass-reflection flex translate-y-8 cursor-pointer flex-col gap-6 overflow-hidden rounded-xl border bg-[#1a1f3a] opacity-100 transition-all hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20"
                  style={{ transitionDelay: '400ms' }}
                >
                  <div className="glass-light relative h-48 overflow-hidden border-b border-purple-500/20">
                    <img
                      src="https://spyderbot.net/storage/report_thumbs/95.png"
                      alt="hcahealthcare.com"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 hidden bg-gradient-to-br from-purple-500/10 to-blue-500/10 transition-all group-hover:from-purple-500/20 group-hover:to-blue-500/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="glass-light absolute right-4 bottom-4 flex h-16 w-16 items-center justify-center rounded-full bg-black/30 shadow-lg backdrop-blur-sm transition-transform group-hover:scale-110">
                      <span className="text-2xl font-bold text-white">5</span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-external-link h-5 w-5 text-purple-400 opacity-100 drop-shadow-lg transition-opacity group-hover:opacity-100"
                      >
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                    </div>
                  </div>
                  <div data-slot="card-content" className="relative z-10 px-6 [&:last-child]:pb-6">
                    <h3 className="mb-2 font-semibold text-gray-200">hcahealthcare.com</h3>
                    <div className="mb-3 space-y-1 text-sm text-gray-300">
                      <p>
                        <span className="text-purple-400">LLM-Bots:</span> 45
                      </p>
                      <p>
                        <span className="text-purple-400">Prompts/LLM:</span> 45
                      </p>
                      <p className="text-xs break-words text-gray-500">
                        <span className="text-purple-400">LLMs:</span> ChatGPT, Gemini, Copilot
                      </p>
                    </div>
                    <p className="mb-2 text-xs text-gray-500">Created: Jan 31, 2026</p>
                    <p className="text-xs text-gray-500">By: Nhân Trần Thanh</p>
                  </div>
                </div>
                <div
                  data-slot="card"
                  className="text-card-foreground glass group glass-reflection flex translate-y-8 cursor-pointer flex-col gap-6 overflow-hidden rounded-xl border bg-[#1a1f3a] opacity-100 transition-all hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20"
                  style={{ transitionDelay: '500ms' }}
                >
                  <div className="glass-light relative h-48 overflow-hidden border-b border-purple-500/20">
                    <img
                      src="https://spyderbot.net/storage/report_thumbs/94.png"
                      alt="macys.com"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 hidden bg-gradient-to-br from-purple-500/10 to-blue-500/10 transition-all group-hover:from-purple-500/20 group-hover:to-blue-500/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="glass-light absolute right-4 bottom-4 flex h-16 w-16 items-center justify-center rounded-full bg-black/30 shadow-lg backdrop-blur-sm transition-transform group-hover:scale-110">
                      <span className="text-2xl font-bold text-white">6</span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-external-link h-5 w-5 text-purple-400 opacity-100 drop-shadow-lg transition-opacity group-hover:opacity-100"
                      >
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                    </div>
                  </div>
                  <div data-slot="card-content" className="relative z-10 px-6 [&:last-child]:pb-6">
                    <h3 className="mb-2 font-semibold text-gray-200">macys.com</h3>
                    <div className="mb-3 space-y-1 text-sm text-gray-300">
                      <p>
                        <span className="text-purple-400">LLM-Bots:</span> 50
                      </p>
                      <p>
                        <span className="text-purple-400">Prompts/LLM:</span> 50
                      </p>
                      <p className="text-xs break-words text-gray-500">
                        <span className="text-purple-400">LLMs:</span> ChatGPT, Gemini, Copilot
                      </p>
                    </div>
                    <p className="mb-2 text-xs text-gray-500">Created: Jan 31, 2026</p>
                    <p className="text-xs text-gray-500">By: Minh Long Tran</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="px-6 py-20">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 translate-y-8 text-center opacity-100 transition-all duration-700">
                <h2 className="mb-4 text-4xl">
                  Powering businesses{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    around the globe
                  </span>
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div
                  className="translate-y-8 text-center opacity-100 transition-all duration-700"
                  style={{ transitionDelay: '0ms' }}
                >
                  <div className="mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                    20000+
                  </div>
                  <div className="text-gray-400">Distributed LLM-bots</div>
                </div>
                <div
                  className="translate-y-8 text-center opacity-100 transition-all duration-700"
                  style={{ transitionDelay: '150ms' }}
                >
                  <div className="mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                    50+
                  </div>
                  <div className="text-gray-400">Countries</div>
                </div>
                <div
                  className="translate-y-8 text-center opacity-100 transition-all duration-700"
                  style={{ transitionDelay: '300ms' }}
                >
                  <div className="mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                    100k+
                  </div>
                  <div className="text-gray-400">Prompts</div>
                </div>
                <div
                  className="translate-y-8 text-center opacity-100 transition-all duration-700"
                  style={{ transitionDelay: '450ms' }}
                >
                  <div className="mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                    99.99%
                  </div>
                  <div className="text-gray-400">Uptime</div>
                </div>
              </div>
            </div>
          </section>
          <footer className="border-t border-purple-500/20 bg-[#0a0e27] px-6 py-16 text-gray-300">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 grid gap-12 md:grid-cols-4">
                <div className="md:col-span-1">
                  <img
                    src="https://spyderbot.net/build/assets/spiderbot-i2zJVPML.png"
                    alt="SpyderBot"
                    className="mb-4 h-10"
                    style={{ filter: 'invert(1) brightness(100)' }}
                  />
                  <p className="mb-4 text-sm text-gray-400">
                    SpyderBot aims to become the global leader in GEO analytics, empowering brands to dominate AI trends
                    through transparent data mastery, fostering a fair ecosystem where every business gains a
                    competitive edge in AI-driven worlds.
                  </p>
                  <p className="text-sm text-gray-400">
                    Contact:{' '}
                    <a href="mailto:contact@spyderbot.net" className="underline hover:text-purple-400">
                      contact@spyderbot.net
                    </a>
                  </p>
                </div>
                <div>
                  <h4 className="mb-4 text-white">Product</h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="/features" className="transition-colors hover:text-purple-400">
                        Features
                      </a>
                    </li>
                    <li>
                      <a href="#integrations" className="transition-colors hover:text-purple-400">
                        Integrations
                      </a>
                    </li>
                    <li>
                      <a href="/pricing" className="transition-colors hover:text-purple-400">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a href="/documentation" className="transition-colors hover:text-purple-400">
                        Documentation
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-4 text-white">Company</h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="#about" className="transition-colors hover:text-purple-400">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="/public-reports" className="transition-colors hover:text-purple-400">
                        GEO Reports
                      </a>
                    </li>
                    <li>
                      <a href="/press" className="transition-colors hover:text-purple-400">
                        Press
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-4 text-white">Resources</h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="#community" className="transition-colors hover:text-purple-400">
                        Community
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="transition-colors hover:text-purple-400">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="#support" className="transition-colors hover:text-purple-400">
                        Support
                      </a>
                    </li>
                    <li>
                      <a href="#status" className="transition-colors hover:text-purple-400">
                        Status
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-purple-500/10 pt-8">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                  <p className="text-sm text-gray-400">© 2025 SpyderBot. All rights reserved.</p>
                  <div className="flex gap-6">
                    <a href="/privacy-policy" className="text-sm transition-colors hover:text-purple-400">
                      Privacy Policy
                    </a>
                    <span className="text-gray-600">|</span>
                    <a href="/terms-and-conditions" className="text-sm transition-colors hover:text-purple-400">
                      Terms of Use
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default HomePage
