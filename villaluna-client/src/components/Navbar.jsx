import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/styles/OOPSIEDAISY LOGO.jpg";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Articles", to: "/articles" },
];

const navLinkClassName = ({ isActive }) =>
  [
    "rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition duration-200",
    isActive
      ? "border-amber-900 bg-amber-900 text-white shadow-sm shadow-amber-900/20"
      : "border-transparent text-zinc-600 hover:border-amber-900 hover:bg-amber-100 hover:text-zinc-950",
  ].join(" ");

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-zinc-900 bg-amber-50/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-amber-100 ring-2 ring-amber-900/15">
            <img src={logo} alt="oopsiedaisy.mnl Logo" className="h-full w-full object-cover" />
          </div>

          <div className="space-y-0.5">
            <p className="text-lg font-semibold uppercase tracking-[0.22em] text-zinc-950">
              oopsiedaisy.mnl
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Blooms + Joy
            </p>
          </div>
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden items-center gap-4 md:flex">
          <nav className="flex items-center gap-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={navLinkClassName}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/auth/signin"
              className="rounded-full border-2 border-transparent px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-600 transition duration-200 hover:border-amber-900 hover:bg-amber-100 hover:text-zinc-950"
            >
              Sign In
            </Link>
            <Link
              to="/auth/signup"
              className="rounded-full border-2 border-amber-900 bg-amber-900 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white shadow-sm shadow-amber-900/20 transition duration-200 hover:bg-amber-800"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="flex items-center justify-center rounded-lg border-2 border-zinc-900 p-2 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="border-t-2 border-zinc-900 bg-amber-50 px-4 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={navLinkClassName}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <Link
              to="/auth/signin"
              className="rounded-full border-2 border-transparent px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-600 transition duration-200 hover:border-amber-900 hover:bg-amber-100 hover:text-zinc-950"
              onClick={() => setMobileOpen(false)}
            >
              Sign In
            </Link>
            <Link
              to="/auth/signup"
              className="rounded-full border-2 border-amber-900 bg-amber-900 px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-white shadow-sm shadow-amber-900/20 transition duration-200 hover:bg-amber-800"
              onClick={() => setMobileOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
