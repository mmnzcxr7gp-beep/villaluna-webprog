import { Outlet } from 'react-router-dom';
import NavBar from './Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-love-50 text-love-900">
      <NavBar />
      <main className="pb-20 pt-28">
        <Outlet />
      </main>
      <footer className="border-t border-love-200/50 bg-white/90 py-8 text-love-700 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-2xl font-bold bg-gradient-to-r from-love-500 to-rose-500 bg-clip-text text-transparent">Sam & Carla Forever 💕</p>
            <p className="text-sm text-love-600">Our cute love story together</p>
          </div>
          <div className="grid gap-2 text-sm text-love-600 sm:grid-cols-3">
            <span>Always cuddling 🤗</span>
            <span>Worldwide adventures 🌍</span>
            <span>Email: love@samandcarla.com 💌</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
