import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Events', path: '/events' },
  { label: 'Projects', path: '/projects' },
  { label: 'About & Team', path: '/about' },
  { label: 'Membership', path: '/membership' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* NAVBAR - Always white with black shadow */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 relative">
              <div className="absolute inset-0 bg-[#006c42]/20 rounded-full animate-ping opacity-50" />
              <img
                src="/logo.png"
                alt="CASS Logo"
                className="w-9 h-9 object-contain relative z-10"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-9 h-9 bg-[#006c42] rounded-full items-center justify-center text-white font-display text-sm hidden">
                C
              </div>
            </div>

            <div>
              <div
                className="font-heading font-bold text-black uppercase leading-none"
                style={{ fontSize: '1.05rem', letterSpacing: '0.1em' }}
              >
                IEEE <span className="text-[#006c42]">CASS</span>
              </div>
              <div className="font-mono text-[11px] text-gray-500 tracking-widest uppercase">
                BMSITM
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 font-heading font-medium text-sm tracking-wider uppercase transition-colors duration-200 group ${
                    active
                      ? 'text-[#00a863]'
                      : 'text-gray-700 hover:text-black'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-[#006c42] transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}

          
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-black p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center gap-6 transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 circuit-bg opacity-30 pointer-events-none" />

        {navLinks.map((link, i) => {
          const active = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              style={{ animationDelay: `${i * 0.07}s` }}
              className={`font-heading font-bold text-3xl tracking-widest uppercase transition-colors duration-200 ${
                active
                  ? 'text-[#00a863] text-glow'
                  : 'text-white hover:text-[#00a863]'
              }`}
            >
              {link.label}
            </Link>
          );
        })}

        <Link to="/membership" className="mt-4 btn-primary text-base">
          Join CASS
        </Link>
      </div>
    </>
  );
}