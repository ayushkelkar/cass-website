import { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Users, Image, X, ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

// ── Hardcoded Events ──────────────────────────────────────────────────────────
const EVENTS = [
  {
    id: '1',
    title: 'IEEE Open Day',
    status: 'past',
    date: 'March 2026',
    location: 'BMSITM Campus, Bengaluru',
    description:
      'A celebration of technology and innovation — opening doors for students to explore the world of IEEE CASS. Featured live project demonstrations, chapter overviews, interactive sessions with senior members, and hands-on activity stalls covering circuits, signal processing, and embedded systems.',
    image: '/events/openday/openday1.jpeg',
    images: [
      '/events//openday/openday1.jpeg',
      '/events/openday/openday2.jpeg',
    ],
  },
  {
    id: '2',
    title: 'Workshop on System Design using Verilog and FPGA',
    status: 'past',
    date: 'April 2026',
    location: 'HDL Lab, BMSITM, Bengaluru',
    description:
      'Conducted a hands-on workshop on Digital System Design, covering Verilog HDL fundamentals and FPGA implementation, basics of ASICs, guiding participants through the design, synthesis, and testing of digital circuits on real hardware.',
    image: '/events/workshop1/workshop1-1.jpeg',
    images: [
      '/events/workshop1/workshop1-2.jpeg',
      '/events/workshop1/workshop1-3.jpeg',
      '/events/workshop1/workshop1-4.jpeg',
    ],
    registrationLink: '#',
  },
  {
    id: '3',
    title: 'Workshop on Telecommunication Systems',
    status: 'past',
    date: '2025-2026',
    location: 'BMSITM, Bengaluru',
    description:
      'The workshop covered practical applications of the Smith Chart for analyzing transmission lines at microwave frequencies — specifically impedance/admittance charts, VSWR, reflection coefficient, impedance mismatch, short/open circuits, nodes, antinodes, and stub matching.',
    image: '/events/workshop2/workshop2-1.jpeg',
    images: [
      '/events/workshop2/workshop2-2.jpeg',
    ],
    registrationLink: '#',
  },
  {
    id: '4',
    title: 'Inauguration Ceremony',
    status: 'upcoming',
    date: 'June 2026',
    location: 'Seminar Hall, BMSITM, Bengaluru',
    description:
      'The official launch of the IEEE Circuits and Systems Society chapter at BMSITM. Featuring formal inauguration, felicitation of faculty advisors and founding members, keynote addresses by IEEE professionals, and a preview of all upcoming activities, workshops, and flagship events for the academic year. Followed by an 8-hour Hackathon',
    image: '',
    images: [],
    registrationLink: '#',
    isInauguration: true,
  },
  {
    id: '5',
    title: '8-hour Hackathon',
    status: 'upcoming',
    date: 'September 2026',
    location: 'BMSITM, Bengaluru',
    description:
      'Pure Hardware hackathon with different domains. Check back later for more details!',
    image: '',
    images: [''],
    registrationLink: '#',
  },
];

// ── Inauguration Curtain Modal ────────────────────────────────────────────────
function InaugurationModal({ onClose }) {
  const canvasRef = useRef(null);
  const [inaugurated, setInaugurated] = useState(false);
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const animRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  function randomColor() {
    const colors = ['#ff4444','#ff8800','#ffdd00','#ffd700','#ff66cc','#44ffaa','#66aaff','#ffffff','#ff6666'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function launchFirework(x, y) {
    const count = 60 + Math.floor(Math.random() * 40);
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count;
      const speed = 2 + Math.random() * 5;
      particlesRef.current.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        color: randomColor(),
        size: 1.5 + Math.random() * 2,
        decay: 0.012 + Math.random() * 0.012,
        gravity: 0.06,
        trail: [],
      });
    }
  }

  function tick() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesRef.current = particlesRef.current.filter(p => p.alpha > 0.02);
    for (const p of particlesRef.current) {
      p.trail.push({ x: p.x, y: p.y, alpha: p.alpha });
      if (p.trail.length > 5) p.trail.shift();
      for (let i = 0; i < p.trail.length; i++) {
        const t = p.trail[i];
        ctx.beginPath();
        ctx.arc(t.x, t.y, p.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = t.alpha * 0.3 * (i / p.trail.length);
        ctx.fill();
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.98;
      p.alpha -= p.decay;
    }
    ctx.globalAlpha = 1;
    animRef.current = requestAnimationFrame(tick);
  }

  function autoLaunch() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const w = canvas.width, h = canvas.height;
    const positions = [
      [w * 0.2, h * 0.25], [w * 0.8, h * 0.25],
      [w * 0.5, h * 0.18], [w * 0.15, h * 0.5],
      [w * 0.85, h * 0.5], [w * 0.35, h * 0.35],
      [w * 0.65, h * 0.35],
    ];
    let i = 0;
    const burst = setInterval(() => {
      if (i < positions.length) { launchFirework(positions[i][0], positions[i][1]); i++; }
    }, 300);
    setTimeout(() => {
      clearInterval(burst);
      const loop = setInterval(() => {
        launchFirework(w * (0.1 + Math.random() * 0.8), h * (0.1 + Math.random() * 0.5));
      }, 800);
      setTimeout(() => clearInterval(loop), 7000);
    }, positions.length * 300 + 200);
  }

  function handleInaugurate() {
    if (inaugurated) return;
    setInaugurated(true);
    setCurtainOpen(true);
    setTimeout(() => setShowText(true), 2000);
    setTimeout(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      tick();
      autoLaunch();
    }, 600);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl overflow-hidden"
        style={{ background: '#0a0a1a', boxShadow: '0 24px 80px rgba(0,0,0,0.8)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-50 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
          style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}
        >
          <X size={15} />
        </button>

        {/* Stage */}
        <div className="relative overflow-hidden" style={{ height: 420 }}>
          {/* Fireworks canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: 6, pointerEvents: 'none' }}
          />

          {/* Star background */}
          <div className="absolute inset-0" style={{ zIndex: 1, background: '#0a0a1a' }}>
            {[...Array(18)].map((_, i) => (
              <div key={i} className="absolute rounded-full" style={{
                width: Math.random() * 2 + 0.8 + 'px',
                height: Math.random() * 2 + 0.8 + 'px',
                background: 'white',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: Math.random() * 0.5 + 0.3,
              }} />
            ))}
          </div>

          {/* Center reveal text */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ zIndex: 5, transition: 'opacity 1s ease', opacity: showText ? 1 : 0 }}
          >
            <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'rgba(255,215,0,0.6)' }}>
              Officially Inaugurated
            </p>
            <h2
              className="font-heading font-bold uppercase text-center"
              style={{
                fontSize: 'clamp(1.4rem, 5vw, 2.2rem)',
                letterSpacing: '0.08em',
                color: '#ffd700',
                textShadow: '0 0 30px rgba(255,215,0,0.5)',
              }}
            >
              IEEE CASS<br />BMSITM
            </h2>
            <div className="mt-4 flex gap-2">
              {['✦','✦','✦'].map((s, i) => (
                <span key={i} style={{ color: '#ffd700', fontSize: 14, opacity: 0.7 }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Curtain top rail */}
          <div
            className="absolute top-0 left-0 right-0 flex items-end justify-around"
            style={{ height: 36, background: 'linear-gradient(to bottom, #6b0000, #aa0000)', zIndex: 12, borderBottom: '3px solid #ffd700' }}
          >
            {[...Array(22)].map((_, i) => (
              <div key={i} style={{
                width: 12, height: 22,
                background: 'linear-gradient(to bottom, #ffd700, #cc8800)',
                borderRadius: '0 0 50% 50%',
                transform: 'translateY(50%)',
              }} />
            ))}
          </div>

          {/* Left curtain */}
          <div
            className="absolute top-0 left-0 h-full"
            style={{
              width: '50%',
              background: 'linear-gradient(to right, #6b0000, #cc0000 60%, #990000)',
              zIndex: 10,
              transform: curtainOpen ? 'translateX(-100%)' : 'translateX(0)',
              transition: 'transform 2.2s cubic-bezier(0.77,0,0.18,1)',
            }}
          >
            <div style={{ position: 'absolute', right: 0, top: 0, width: 20, height: '100%', background: 'rgba(0,0,0,0.2)' }} />
            <div style={{ position: 'absolute', left: '15%', top: 0, width: 8, height: '100%', background: 'rgba(255,255,255,0.06)' }} />
          </div>

          {/* Right curtain */}
          <div
            className="absolute top-0 right-0 h-full"
            style={{
              width: '50%',
              background: 'linear-gradient(to left, #6b0000, #cc0000 60%, #990000)',
              zIndex: 10,
              transform: curtainOpen ? 'translateX(100%)' : 'translateX(0)',
              transition: 'transform 2.2s cubic-bezier(0.77,0,0.18,1)',
            }}
          >
            <div style={{ position: 'absolute', left: 0, top: 0, width: 20, height: '100%', background: 'rgba(0,0,0,0.2)' }} />
            <div style={{ position: 'absolute', right: '15%', top: 0, width: 8, height: '100%', background: 'rgba(255,255,255,0.06)' }} />
          </div>
        </div>

        {/* Bottom button area */}
        <div className="flex items-center justify-center gap-4 px-6 py-5" style={{ background: '#0d0d20', borderTop: '1px solid rgba(255,215,0,0.15)' }}>
          {!inaugurated ? (
            <button
              onClick={handleInaugurate}
              className="flex items-center gap-2 px-8 py-3 rounded-xl font-heading font-bold uppercase tracking-wider text-sm transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #8b0000, #cc0000)', color: '#ffd700', border: '2px solid #ffd700', boxShadow: '0 4px 20px rgba(255,215,0,0.2)' }}
            >
              <Sparkles size={15} /> Inaugurate
            </button>
          ) : (
            <p className="font-mono text-xs uppercase tracking-widest" style={{ color: 'rgba(255,215,0,0.6)' }}>
              ✦ Chapter Launched ✦
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Gallery Modal ─────────────────────────────────────────────────────────────
function GalleryModal({ images, title, onClose }) {
  const [current, setCurrent] = useState(0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6" style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }} onClick={onClose}>
      <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100" style={{ background: 'linear-gradient(135deg, #006c42, #00a863)' }}>
          <h3 className="font-heading font-bold text-white uppercase tracking-wider text-lg">{title} — Gallery</h3>
          <button onClick={onClose} className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors">
            <X size={16} />
          </button>
        </div>
        <div className="relative bg-[#f0faf5]">
          <img src={images[current]} alt={`${title} ${current + 1}`} className="w-full max-h-[55vh] object-contain"
            onError={e => { e.target.src = 'https://placehold.co/800x500/e8f7ef/006c42?text=No+Image'; }} />
          {images.length > 1 && (
            <>
              <button onClick={() => setCurrent(c => (c - 1 + images.length) % images.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-[#006c42]/30 rounded-full flex items-center justify-center text-[#006c42] hover:bg-[#006c42] hover:text-white transition-all shadow-md">
                <ChevronLeft size={18} />
              </button>
              <button onClick={() => setCurrent(c => (c + 1) % images.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-[#006c42]/30 rounded-full flex items-center justify-center text-[#006c42] hover:bg-[#006c42] hover:text-white transition-all shadow-md">
                <ChevronRight size={18} />
              </button>
            </>
          )}
        </div>
        <div className="flex gap-2 px-6 py-4 overflow-x-auto bg-[#f9fefb] border-t border-[#006c42]/10">
          {images.map((img, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${i === current ? 'border-[#006c42] shadow-md' : 'border-gray-200 hover:border-[#006c42]/50'}`}>
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
          <div className="ml-auto self-center font-mono text-[#006c42] text-xs whitespace-nowrap">{current + 1} / {images.length}</div>
        </div>
      </div>
    </div>
  );
}

// ── Event Card ────────────────────────────────────────────────────────────────
function EventCard({ event }) {
  const [showGallery, setShowGallery] = useState(false);
  const [showInauguration, setShowInauguration] = useState(false);
  const isPast = event.status === 'past';

  return (
    <>
      <div className="group relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,108,66,0.18)]"
        style={{ background: 'white', border: '1px solid #e0f0e8', boxShadow: '0 2px 16px rgba(0,108,66,0.06)' }}>

        <div className={`h-1.5 w-full ${isPast ? 'bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300' : 'bg-gradient-to-r from-[#004d2e] via-[#00a863] to-[#004d2e]'}`} />

        <div className="relative h-56 overflow-hidden" style={{ background: '#e8f7ef' }}>
          <img src={event.image} alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            onError={e => { e.target.src = 'https://placehold.co/600x400/e8f7ef/006c42?text=IEEE+CASS'; }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,40,20,0.7) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)' }} />

          <div className={`absolute top-4 left-4 font-heading font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest ${
            isPast
              ? 'bg-white/90 text-gray-600 border border-gray-200'
              : 'text-white border border-white/30'
          }`} style={isPast ? {} : { background: 'linear-gradient(135deg, #006c42, #00a863)', boxShadow: '0 2px 12px rgba(0,108,66,0.4)' }}>
            {isPast ? 'Past Event' : '● Upcoming'}
          </div>

          {isPast && event.images?.length > 0 && (
            <button onClick={() => setShowGallery(true)}
              className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/90 text-[#006c42] border border-[#006c42]/30 rounded-full px-3 py-1.5 text-xs font-heading font-semibold hover:bg-[#006c42] hover:text-white transition-all shadow-sm">
              <Image size={12} /> Gallery
            </button>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="font-heading font-bold text-white uppercase tracking-wide leading-tight group-hover:text-[#a8f0cc] transition-colors"
              style={{ fontSize: '1.4rem', letterSpacing: '0.04em', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
              {event.title}
            </h3>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1" style={{ background: 'white' }}>
          <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{event.description}</p>

          <div className="grid grid-cols-1 gap-2 mb-5 p-4 rounded-xl" style={{ background: '#f0faf5', border: '1px solid #c8ecd8' }}>
            <div className="flex items-center gap-2.5 text-sm">
              <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: '#006c42' }}>
                <Calendar size={11} className="text-white" />
              </div>
              <span className="text-gray-700 font-medium">{event.date}</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm">
              <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: '#006c42' }}>
                <MapPin size={11} className="text-white" />
              </div>
              <span className="text-gray-600">{event.location}</span>
            </div>
          </div>

          {event.topics?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {event.topics.map(t => (
                <span key={t} className="font-mono text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(0,108,66,0.08)', color: '#006c42', border: '1px solid rgba(0,108,66,0.2)' }}>{t}</span>
              ))}
            </div>
          )}

          <div className="mt-auto flex flex-col gap-2">
            {/* Inauguration special button */}
            {event.isInauguration && (
              <button
                onClick={() => setShowInauguration(true)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-heading font-bold uppercase tracking-wider text-sm transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(139,0,0,0.4)]"
                style={{ background: 'linear-gradient(135deg, #8b0000, #cc0000)', color: '#ffd700', border: '1.5px solid #ffd700' }}
              >
                <Sparkles size={14} /> Inaugurate
              </button>
            )}

            {!isPast && event.registrationLink && (
              <a href={event.registrationLink} target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-heading font-bold uppercase tracking-wider text-sm text-white transition-all hover:shadow-[0_4px_20px_rgba(0,108,66,0.4)] hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #006c42 0%, #00a863 100%)' }}>
                Register Now <ArrowRight size={15} />
              </a>
            )}
            {isPast && event.images?.length > 0 && (
              <button onClick={() => setShowGallery(true)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-heading font-bold uppercase tracking-wider text-sm transition-all hover:-translate-y-0.5"
                style={{ background: '#f0faf5', color: '#006c42', border: '1.5px solid #006c42' }}>
                <Image size={14} /> View Gallery
              </button>
            )}
            {isPast && !event.images?.length && (
              <div className="text-center font-mono text-xs text-gray-400 py-3">— Event Completed —</div>
            )}
          </div>
        </div>
      </div>

      {showGallery && event.images?.length > 0 && (
        <GalleryModal images={event.images} title={event.title} onClose={() => setShowGallery(false)} />
      )}
      {showInauguration && (
        <InaugurationModal onClose={() => setShowInauguration(false)} />
      )}
    </>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Events() {
  const [filter, setFilter] = useState('all');
  const headerRef = useReveal();
  const gridRef = useReveal();

  const upcoming = EVENTS.filter(e => e.status === 'upcoming');
  const past = EVENTS.filter(e => e.status === 'past');
  const displayed = filter === 'all' ? EVENTS : filter === 'upcoming' ? upcoming : past;

  return (
    <div className="min-h-screen" style={{ background: 'white' }}>

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, #ffffff 0%, #f0faf5 40%, #e0f5ea 100%)' }} />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,108,66,0.12) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(0,168,99,0.15) 0%, transparent 70%)' }} />
        <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: 'linear-gradient(90deg, #004d2e, #006c42, #00a863, #006c42, #004d2e)' }} />

        <div ref={headerRef} className="reveal text-center relative z-10 max-w-3xl mx-auto">
          <h1 className="font-heading font-bold uppercase leading-none mb-5"
            style={{ fontSize: 'clamp(3.5rem,10vw,7rem)', letterSpacing: '0.08em', color: '#111' }}>
            Events
          </h1>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px flex-1 max-w-16" style={{ background: 'linear-gradient(to left, #006c42, transparent)' }} />
            <div className="w-2 h-2 rounded-full bg-[#006c42]" />
            <div className="h-px flex-1 max-w-16" style={{ background: 'linear-gradient(to right, #006c42, transparent)' }} />
          </div>
          <p className="text-gray-500 text-lg leading-relaxed">
            Workshops, hackathons, seminars — every event is a step forward in the circuit revolution.
          </p>

          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="font-heading font-bold text-3xl" style={{ color: '#006c42' }}>{upcoming.length}</div>
              <div className="font-mono text-xs uppercase tracking-wider text-gray-400">Upcoming</div>
            </div>
            <div className="w-px" style={{ background: '#c8ecd8' }} />
            <div className="text-center">
              <div className="font-heading font-bold text-3xl text-gray-400">{past.length}</div>
              <div className="font-mono text-xs uppercase tracking-wider text-gray-400">Past</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <div className="sticky top-16 z-30 border-b" style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)', borderColor: '#d4edde' }}>
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-3 flex-wrap">
          <span className="font-mono text-xs uppercase tracking-widest mr-1" style={{ color: '#006c42' }}>Filter:</span>
          {[
            { key: 'all', label: `All (${EVENTS.length})` },
            { key: 'upcoming', label: `Upcoming (${upcoming.length})` },
            { key: 'past', label: `Past (${past.length})` },
          ].map(f => (
            <button key={f.key} onClick={() => setFilter(f.key)}
              className="font-heading font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-all"
              style={filter === f.key
                ? { background: 'linear-gradient(135deg, #006c42, #00a863)', color: 'white', boxShadow: '0 2px 12px rgba(0,108,66,0.3)' }
                : { background: '#f0faf5', color: '#006c42', border: '1px solid #c8ecd8' }}>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── CARDS ── */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div ref={gridRef} className="reveal">
          {displayed.length === 0 ? (
            <div className="text-center py-20 rounded-2xl" style={{ background: '#f0faf5', border: '1px solid #c8ecd8' }}>
              <div className="font-mono text-sm" style={{ color: '#006c42' }}>No events found</div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {displayed.map(event => <EventCard key={event.id} event={event} />)}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
