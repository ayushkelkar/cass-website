import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Linkedin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-[#006c42]/20 relative overflow-hidden">
      {/* circuit bg */}
      <div className="absolute inset-0 circuit-bg opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#006c42] rounded-full flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="CASS"
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div>
                <div className="font-display text-xl text-white tracking-wider">
                  IEEE <span className="text-[#006c42]">CASS</span>
                </div>
                <div className="font-mono text-[9px] text-gray-500 tracking-widest">BMSIT&M</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-body">
              IEEE Circuits and Systems Society — BMS Institute of Technology & Management, Bengaluru.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/cass_bmsit?igsh=Nm91Z3YxYnAxdGdh"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-gray-700 rounded flex items-center justify-center text-gray-400 hover:border-[#006c42] hover:text-[#00a863] transition-all duration-200"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://www.linkedin.com/company/ieee-circuits-and-systems-society-bmsit-m/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-gray-700 rounded flex items-center justify-center text-gray-400 hover:border-[#006c42] hover:text-[#00a863] transition-all duration-200"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white uppercase tracking-widest text-sm mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Events', path: '/events' },
                { label: 'Projects', path: '/projects' },
                { label: 'About Us', path: '/about' },
                { label: 'Membership', path: '/membership' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#00a863] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#006c42] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IEEE Links */}
          <div>
            <h4 className="font-heading font-semibold text-white uppercase tracking-widest text-sm mb-5">
              IEEE Resources
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'IEEE CASS', url: 'https://ieee-cas.org' },
                { label: 'IEEE Membership', url: 'https://ieee.org/membership' },
                { label: 'IEEE Xplore', url: 'https://ieeexplore.ieee.org' },
                { label: 'BMSIT&M', url: 'https://bmsit.ac.in' },
              ].map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-[#00a863] text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <ExternalLink size={12} className="shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white uppercase tracking-widest text-sm mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={14} className="text-[#006c42] mt-0.5 shrink-0" />
                <span>BMS Institute of Technology & Management, Bengaluru — 560064</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={14} className="text-[#006c42] shrink-0" />
                <a href="mailto:cass@bmsit.in" className="hover:text-[#00a863] transition-colors">
                  cassbmsit@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-xs font-mono">
            © {new Date().getFullYear()} IEEE Circuits and Systems Society — BMSIT&M. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs font-mono">
            IEEE is the world's largest technical professional organization.
          </p>
        </div>
      </div>
    </footer>
  );
}
