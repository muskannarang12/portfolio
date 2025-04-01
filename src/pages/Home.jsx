export default function Home() {
    return (
      <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm <span className="text-blue-400">[Your Name]</span></h1>
          <p className="text-xl mb-8">I build amazing web experiences</p>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg">
            View My Work
          </button>
        </div>
      </section>
    )
  }