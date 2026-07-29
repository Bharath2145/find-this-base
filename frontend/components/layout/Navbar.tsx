export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl">
            🏰
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              Find This Base
            </h1>

            <p className="text-xs text-slate-400">
              AI Clash of Clans Search
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
          <a href="#" className="hover:text-white">
            Search
          </a>

          <a href="#" className="hover:text-white">
            Contribute
          </a>

          <a href="#" className="hover:text-white">
            Latest Bases
          </a>

          <a href="#" className="hover:text-white">
            About
          </a>
        </nav>

        {/* Login Button */}
        <button className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
          Login
        </button>

      </div>
    </header>
  );
}