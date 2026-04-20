const links = [
  { label: '💕 Home', to: '#hero' },
  { label: '✨ Moments', to: '#memories' },
  { label: '💭 Dreams', to: '#dreams' },
];

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-love-200/50 bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-love-500 to-rose-500 bg-clip-text text-transparent">
          <span>💖</span>
          Sam & Carla
        </a>

        <nav className="hidden items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-love-600 md:flex">
          {links.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className="rounded-full border-2 border-transparent px-6 py-3 transition-all duration-300 hover:border-love-300 hover:bg-love-50 hover:text-love-700 hover:shadow-lg"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
