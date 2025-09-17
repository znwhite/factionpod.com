function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6 py-16">
        <header className="flex items-center justify-between mb-16">
          <div className="flex-1">
            <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
              FACTION
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Small groups. Big consequences.
            </p>
            <div className="w-24 h-1 bg-red-600 mb-8"></div>
          </div>
          <div className="flex-1 flex justify-end">
            <img
              src="/images/faction.png"
              alt="Faction"
              className="max-w-md h-auto"
            />
          </div>
        </header>

        <main className="max-w-4xl mx-auto">
          <section className="text-center mb-16">
            <div className="max-w-3xl mx-auto mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                The Groups That Shaped History
              </h2>
              <p className="text-lg text-slate-200 mb-6 leading-relaxed">
                Faction tells the stories of small groups that made big impacts.
              </p>
              <a
                href="https://open.spotify.com/show/72qiPaoDRf8HkGKEChvG5q?si=8e4f2078fcbe4512"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.959-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.361 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.48.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                Listen on Spotify
              </a>
            </div>
          </section>

          <section className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-3">Rebels</h3>
              <p className="text-slate-300">
                Stories of those who challenged the status quo and fought
                against overwhelming odds.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-3">
                Schemers
              </h3>
              <p className="text-slate-300">
                The masterminds behind history's most audacious plots and
                political machinations.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-3">
                Risk-Takers
              </h3>
              <p className="text-slate-300">
                Bold individuals who bet everything on their vision of the
                future.
              </p>
            </div>
          </section>

          <section className="text-center">
            <div className="bg-slate-800/30 backdrop-blur rounded-lg p-8 border border-slate-700">
              <h2 className="text-2xl font-semibold text-white mb-4">
                New Episodes Monthly
              </h2>
              <p className="text-slate-300 mb-6">
                Subscribe to never miss an episode as we uncover the untold
                stories of history's most influential factions.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://open.spotify.com/show/72qiPaoDRf8HkGKEChvG5q?si=8e4f2078fcbe4512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Subscribe on Spotify
                </a>
                <button className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  More Platforms
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Home;
