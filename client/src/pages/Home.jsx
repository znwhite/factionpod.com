function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black">
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16 gap-8">
          <div className="lg:flex-1">
            <h1 className="text-5xl uppercase font-bold text-[#6d0000] mb-4 tracking-tight">
              Faction podcast
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Small groups. Big consequences. Faction is a podcast exploring the
              rebels, schemers, and risk-takers who came together to shape
              history - for better or worse.
            </p>
            <p className="text-lg text-[#6d0000] font-medium">
              Season 1 is currently in production - stay tuned!
            </p>
          </div>
          <div className="lg:flex-1 flex justify-center lg:justify-end">
            <img
              src="/images/faction.png"
              alt="Faction"
              className="max-w-md h-auto"
            />
          </div>
        </header>
        <main>
          <section className="text-center">
            <div className="bg-black/50 backdrop-blur rounded-lg p-8 border border-slate-800">
              <div className="flex justify-center space-x-4 flex-wrap gap-y-4">
                <a
                  href="https://open.spotify.com/show/72qiPaoDRf8HkGKEChvG5q?si=8e4f2078fcbe4512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Listen on Spotify
                </a>
                <a
                  href="https://patreon.com/factionpod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Support on Patreon
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Home;
