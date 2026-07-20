import Navbar from "@/components/layout/Navbar";
import HeroCard from "@/components/home/HeroCard";
import Features from "@/components/home/Features";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-slate-50">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl"></div>
        <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl"></div>
        <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
            AI-Powered Volunteering Ecosystem
          </span>

          <h1 className="mt-8 max-w-5xl text-6xl font-black leading-tight tracking-tight text-slate-900 md:text-7xl">
            The Future of
            <span className="block bg-gradient-to-r from-emerald-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              AI Volunteering
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            Discover verified volunteering opportunities, receive AI-powered
            recommendations, collect certificates, track your impact and build your
            digital Volunteer Passport.
          </p>

          <div className="mt-12 flex flex-col gap-5 sm:flex-row">
            <button className="rounded-2xl bg-gradient-to-r from-emerald-600 to-cyan-500 px-10 py-4 text-lg font-semibold text-white shadow-xl transition duration-300 hover:-translate-y-1">
              Start Volunteering
            </button>
            
            <button className="rounded-2xl border border-slate-300 bg-white px-10 py-4 text-lg font-semibold shadow-md transition hover:bg-slate-100">
              For Organizations
            </button>
          </div>

          <HeroCard />
          <Features />

          <section className="mx-auto mt-24 grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
           <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="text-4xl font-black text-emerald-600">15K+</h2>
            <p className="mt-2 text-slate-600">Volunteers</p>
          </div>
          
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="text-4xl font-black text-blue-600">420+</h2>
            <p className="mt-2 text-slate-600">Organizations</p>
          </div>
          
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="text-4xl font-black text-cyan-600">31K</h2>
            <p className="mt-2 text-slate-600">Volunteer Hours</p>
          </div>
          
        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="text-4xl font-black text-emerald-600">98%</h2>
          <p className="mt-2 text-slate-600">AI Match Accuracy</p>
        </div>
        
        </section>
        </section>
      </main>
    </>
  );
}