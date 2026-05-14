import React from 'react'

function page() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 px-6 py-24 sm:py-32 lg:px-8">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.900),theme(colors.slate.950))]" />
      
      <div className="text-center">
        <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
          Project: Examiner
        </span>
        
        <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-6xl bg-gradient-to-r from-white via-slate-400 to-slate-500 bg-clip-text text-transparent">
          Website has started development
        </h1>
        
        <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
          We're currently architecting the core systems. 
          <span className="block font-medium text-indigo-400 mt-2">Please come back to check in.</span>
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
            System Status: Active
          </span>
          <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
        </div>
      </div>
    </div>
  )
}

export default page