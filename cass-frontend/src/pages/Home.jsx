import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, Target, ChevronDown, ExternalLink, Cpu, Radio, BookOpen } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

// ── Animated counter ──────────────────────────────────────────────────────────
function Counter({ end, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let s = 0;
        const step = Math.ceil(end / 60);
        const t = setInterval(() => {
          s += step;
          if (s >= end) { setCount(end); clearInterval(t); } else setCount(s);
        }, 20);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);
  return <span ref={ref}>{count}{suffix}</span>;
}

// ── Circuit SVG Animation ─────────────────────────────────────────────────────
function CircuitBG() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: 0.22 }}>
      <svg className="w-full h-full" viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>{`
            .tr{stroke:#006c42;stroke-width:1.5;fill:none;stroke-dasharray:10 220;animation:tr 5s linear infinite}
            .tr2{stroke:#00a863;stroke-width:1;fill:none;stroke-dasharray:6 300;animation:tr 7s linear infinite}
            .tr3{stroke:#004d2e;stroke-width:2;fill:none;stroke-dasharray:14 420;animation:tr 9s linear infinite}
            .np{animation:np 2.2s ease-in-out infinite}
            .np2{animation:np 3.1s ease-in-out infinite 0.9s}
            .np3{animation:np 2.6s ease-in-out infinite 0.4s}
            @keyframes tr{to{stroke-dashoffset:-700}}
            @keyframes np{0%,100%{opacity:.3;r:4}50%{opacity:1;r:7}}
          `}</style>
        </defs>
        <path className="tr" d="M0,180 H220 V130 H560 V180 H860 V160 H1400"/>
        <path className="tr" style={{animationDelay:'-2.5s'}} d="M0,420 H170 V370 H430 V420 H740 V440 H1060 V420 H1400"/>
        <path className="tr" style={{animationDelay:'-1.2s'}} d="M0,650 H320 V600 H660 V650 H960 V630 H1400"/>
        <path className="tr2" d="M220,0 V180 M220,420 V650"/>
        <path className="tr2" style={{animationDelay:'-3.5s'}} d="M560,130 V0 M560,420 V650"/>
        <path className="tr2" style={{animationDelay:'-1.8s'}} d="M860,0 V160 M860,420 V900"/>
        <path className="tr3" d="M80,0 L300,220 L300,440 L530,660"/>
        <path className="tr3" style={{animationDelay:'-3s'}} d="M750,0 L980,220 L980,650 L1190,860"/>
        <rect x="178" y="140" width="84" height="84" rx="4" fill="none" stroke="#006c42" strokeWidth="1.5" opacity="0.7"/>
        <rect x="188" y="150" width="64" height="64" rx="2" fill="rgba(0,108,66,0.06)" stroke="#006c42" strokeWidth="0.5" opacity="0.4"/>
        <line x1="178" y1="165" x2="158" y2="165" stroke="#006c42" strokeWidth="1.5" opacity="0.6"/>
        <line x1="178" y1="182" x2="158" y2="182" stroke="#006c42" strokeWidth="1.5" opacity="0.6"/>
        <line x1="178" y1="199" x2="158" y2="199" stroke="#006c42" strokeWidth="1.5" opacity="0.6"/>
        <line x1="262" y1="165" x2="282" y2="165" stroke="#006c42" strokeWidth="1.5" opacity="0.6"/>
        <line x1="262" y1="182" x2="282" y2="182" stroke="#006c42" strokeWidth="1.5" opacity="0.6"/>
        <line x1="262" y1="199" x2="282" y2="199" stroke="#006c42" strokeWidth="1.5" opacity="0.6"/>
        <rect x="490" y="370" width="100" height="60" rx="4" fill="none" stroke="#00a863" strokeWidth="1.5" opacity="0.55"/>
        <rect x="810" y="128" width="84" height="84" rx="4" fill="none" stroke="#006c42" strokeWidth="1.5" opacity="0.55"/>
        <circle className="np" cx="220" cy="180" r="4" fill="#006c42"/>
        <circle className="np2" cx="560" cy="180" r="4" fill="#00a863" style={{animationDelay:'0.4s'}}/>
        <circle className="np3" cx="860" cy="180" r="4" fill="#006c42" style={{animationDelay:'0.8s'}}/>
        <circle className="np" cx="220" cy="420" r="4" fill="#006c42" style={{animationDelay:'1.2s'}}/>
        <circle className="np2" cx="560" cy="420" r="4" fill="#006c42" style={{animationDelay:'1.6s'}}/>
        <circle className="np3" cx="860" cy="420" r="4" fill="#00a863" style={{animationDelay:'0.2s'}}/>
        <circle className="np" cx="320" cy="650" r="4" fill="#006c42" style={{animationDelay:'2s'}}/>
        <circle className="np2" cx="660" cy="650" r="4" fill="#00a863" style={{animationDelay:'0.7s'}}/>
        <path className="tr" style={{animationDelay:'-0.8s',strokeDasharray:'220 900',animationDuration:'3.5s'}}
          d="M0,800 C60,800 60,755 120,755 S180,800 240,800 S300,845 360,845 S420,800 480,800 S540,755 600,755 S660,800 720,800 S780,845 840,845 S900,800 960,800 S1020,755 1080,755 S1140,800 1200,800"/>
        <rect x="60" y="60" width="420" height="320" rx="8" fill="none" stroke="#006c42" strokeWidth="0.5" opacity="0.12"/>
        <rect x="700" y="480" width="540" height="340" rx="8" fill="none" stroke="#006c42" strokeWidth="0.5" opacity="0.10"/>
      </svg>
    </div>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const s1 = useReveal(); const s2 = useReveal(); const s3 = useReveal();
  const s4 = useReveal(); const s5 = useReveal();

  useEffect(() => {
    const h = heroRef.current;
    if (!h) return;
    const fn = (e) => {
      h.style.transform = `translate(${(e.clientX/window.innerWidth-.5)*10}px,${(e.clientY/window.innerHeight-.5)*7}px)`;
    };
    window.addEventListener('mousemove', fn);
    return () => window.removeEventListener('mousemove', fn);
  }, []);

  return (
    <div style={{ background: '#fff' }}>

      {/* ══════════════════ HERO ══════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Rich layered background */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, #f0faf5 0%, #e0f5ea 25%, #f8fffc 60%, #fff 100%)' }}/>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,108,66,0.10) 1px, transparent 1px)', backgroundSize: '40px 40px' }}/>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 65% 55% at 50% 40%, rgba(0,168,99,0.14) 0%, transparent 65%)' }}/>

        {/* Top green bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: 'linear-gradient(90deg,#004d2e,#006c42,#00a863,#006c42,#004d2e)' }}/>

        {/* Circuit animation */}
        <CircuitBG />

        {/* Scan line */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
          <div className="absolute left-0 right-0 h-px animate-scan" style={{ background: 'linear-gradient(90deg,transparent,#006c42,transparent)' }}/>
        </div>

        {/* Corner brackets */}
        <div className="absolute top-20 left-8 w-14 h-14 border-l-2 border-t-2" style={{ borderColor: 'rgba(0,108,66,0.25)' }}/>
        <div className="absolute top-20 right-8 w-14 h-14 border-r-2 border-t-2" style={{ borderColor: 'rgba(0,108,66,0.25)' }}/>
        <div className="absolute bottom-10 left-8 w-14 h-14 border-l-2 border-b-2" style={{ borderColor: 'rgba(0,108,66,0.25)' }}/>
        <div className="absolute bottom-10 right-8 w-14 h-14 border-r-2 border-b-2" style={{ borderColor: 'rgba(0,108,66,0.25)' }}/>

        {/* Content */}
        <div ref={heroRef} className="text-center relative z-10 px-6 max-w-5xl mx-auto transition-transform duration-75 ease-out">

          {/* Logo */}
          <div className="flex justify-center mb-7 animate-fade-in" style={{ animationDelay:'0.1s', opacity:0 }}>
            <div className="relative">
              <div className="absolute -inset-6 rounded-full blur-3xl" style={{ background: 'radial-gradient(ellipse, rgba(0,108,66,0.20) 0%, transparent 70%)' }}/>
              <img src="/logo.png" alt="IEEE CASS" className="relative z-10 w-32 h-32 md:w-40 md:h-40 object-contain animate-float"
                style={{ filter: 'drop-shadow(0 4px 20px rgba(0,108,66,0.40))' }}
                onError={e => { e.target.style.display='none'; }}/>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-heading font-bold text-gray-900 uppercase leading-none mb-2 animate-fade-up"
            style={{ fontSize:'clamp(1.7rem,4.8vw,3.8rem)', letterSpacing:'0.12em', animationDelay:'0.25s', opacity:0 }}>
            IEEE Circuits and Systems Society
          </h1>

          {/* Chapter */}
          <p className="font-heading font-semibold uppercase animate-fade-up"
            style={{ fontSize:'clamp(0.85rem,2.3vw,1.25rem)', letterSpacing:'0.3em', color:'#006c42', marginBottom:'1.6rem', animationDelay:'0.38s', opacity:0 }}>
            BMSIT &amp; M 
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-7 animate-fade-up" style={{ animationDelay:'0.46s', opacity:0 }}>
            <div className="h-px w-20" style={{ background:'linear-gradient(to right,transparent,#006c42)' }}/>
            <div className="w-2 h-2 rounded-full bg-[#006c42] animate-pulse"/>
            <div className="h-px w-20" style={{ background:'linear-gradient(to left,transparent,#006c42)' }}/>
          </div>

          {/* Tagline */}
          <p className="font-body text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up"
            style={{ fontSize:'1.05rem', animationDelay:'0.54s', opacity:0 }}>
            We're not just building circuits — we're designing the future.<br/>
            <span className="font-semibold text-gray-700">Innovate. Lead. Inspire.</span>
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 justify-center animate-fade-up" style={{ animationDelay:'0.64s', opacity:0 }}>
            <Link to="/membership"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-heading font-bold uppercase tracking-wider text-sm text-white transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,108,66,0.4)]"
              style={{ background:'linear-gradient(135deg,#004d2e,#006c42,#00a863)', boxShadow:'0 4px 20px rgba(0,108,66,0.25)' }}>
              Join Us <ArrowRight size={16}/>
            </Link>
        
          </div>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce" style={{ color:'#006c42' }}>
          <span className="font-mono text-xs tracking-widest opacity-60">SCROLL</span>
          <ChevronDown size={16}/>
        </div>
      </section>



      {/* ══════════════════ OVERVIEW ══════════════════ */}
      <section className="py-24 px-6" style={{ background:'#fff' }}>
        <div className="max-w-7xl mx-auto">
          <div ref={s2} className="reveal grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#006c42]"/>
                <span className="font-mono text-xs tracking-widest uppercase" style={{ color:'#006c42' }}>About the Chapter</span>
              </div>
              <h2 className="font-heading font-bold text-gray-900 uppercase leading-snug mb-6" style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)', letterSpacing:'0.05em' }}>
                Shaping the <span style={{ color:'#006c42' }}>Circuit</span> Revolution
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                As the official student chapter of the IEEE Circuits and Systems Society at BMS Institute of Technology &amp; Management, this community thrives on innovation in electronics, circuits, and system design.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                From micro-level innovations to macro-scale impact, we unite visionary students and passionate engineers to reshape systems, solve real-world problems, and ignite technological breakthroughs.
              </p>
              <Link to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold uppercase tracking-wider text-sm transition-all hover:-translate-y-0.5"
                style={{ border:'2px solid #006c42', color:'#006c42', background:'#f0faf5' }}>
                Our Story <ArrowRight size={16}/>
              </Link>
            </div>

            {/* Feature box */}
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl blur-xl" style={{ background:'rgba(0,108,66,0.08)' }}/>
              <div className="relative rounded-2xl overflow-hidden" style={{ border:'1px solid #c8ecd8', boxShadow:'0 8px 40px rgba(0,108,66,0.10)' }}>
                {/* Green header */}
                <div className="px-8 py-5" style={{ background:'linear-gradient(135deg,#004d2e,#006c42)' }}>
                  <div className="font-heading font-bold text-white uppercase tracking-wider text-sm">What We Offer</div>
                </div>
                <div className="p-8 space-y-5" style={{ background:'#fff' }}>
                  {[
                    { icon:Zap,    title:'Technical Workshops',     desc:'Hands-on sessions on cutting-edge electronics & systems' },
                    { icon:Users,  title:'Industry Collaborations', desc:'Connect with professionals and researchers worldwide' },
                    { icon:Target, title:'Research Projects',       desc:'Explore emerging tech and publish innovative work' },
                  ].map(({ icon:Icon, title, desc }) => (
                    <div key={title} className="flex items-start gap-4 p-4 rounded-xl transition-all hover:shadow-sm" style={{ background:'#f0faf5', border:'1px solid #d4edde' }}>
                      <div className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center" style={{ background:'linear-gradient(135deg,#006c42,#00a863)' }}>
                        <Icon size={18} className="text-white"/>
                      </div>
                      <div>
                        <div className="font-heading font-bold text-gray-900 text-sm uppercase tracking-wider">{title}</div>
                        <div className="text-gray-500 text-sm mt-0.5">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ EXPLORE CARDS ══════════════════ */}
      <section className="py-20 px-6" style={{ background:'linear-gradient(180deg,#f0faf5,#e8f7ef)' }}>
        <div className="max-w-7xl mx-auto">
          <div ref={s3} className="reveal text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8 bg-[#006c42]"/>
              <span className="font-mono text-xs tracking-widest uppercase" style={{ color:'#006c42' }}>What We Do</span>
              <div className="h-px w-8 bg-[#006c42]"/>
            </div>
            <h2 className="font-heading font-bold text-gray-900 uppercase" style={{ fontSize:'clamp(1.8rem,4.5vw,3rem)', letterSpacing:'0.09em' }}>
              Explore CASS
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { path:'/events',     label:'Events',     num:'01', icon:BookOpen, desc:'From flagship hackathons to focused workshops — every event is a chance to build, compete, and connect.', cta:'View Events' },
              { path:'/projects',   label:'Projects',   num:'02', icon:Cpu,      desc:'Real-world problem solving through circuits, embedded systems, AI hardware, and more.', cta:'View Projects' },
              { path:'/membership', label:'Membership', num:'03', icon:Radio,    desc:'Gain access to IEEE resources, mentorship, events, and a global network of engineers.', cta:'Join Now' },
            ].map((item, i) => (
              <Link key={item.path} to={item.path}
                className="group relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,108,66,0.20)]"
                style={{ background:'#fff', border:'1px solid #c8ecd8', boxShadow:'0 2px 16px rgba(0,108,66,0.06)' }}>
                {/* Green top bar */}
                <div className="h-1.5 w-full" style={{ background:'linear-gradient(90deg,#004d2e,#00a863,#004d2e)' }}/>
                <div className="p-8 flex flex-col flex-1">
                  {/* Number + icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background:'linear-gradient(135deg,#006c42,#00a863)' }}>
                      <item.icon size={22} className="text-white"/>
                    </div>
                    <span className="font-mono text-5xl font-bold" style={{ color:'#e0f5ea', letterSpacing:'-0.02em' }}>{item.num}</span>
                  </div>
                  <div className="font-heading font-bold text-gray-900 uppercase mb-3 group-hover:text-[#006c42] transition-colors" style={{ fontSize:'1.5rem', letterSpacing:'0.06em' }}>
                    {item.label}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{item.desc}</p>
                  <div className="flex items-center gap-2 font-heading font-bold text-sm uppercase tracking-wider transition-all group-hover:gap-4" style={{ color:'#006c42' }}>
                    {item.cta} <ArrowRight size={14}/>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background:'linear-gradient(90deg,transparent,#006c42,transparent)' }}/>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ MARQUEE TICKER ══════════════════ */}
      <div className="overflow-hidden py-4" style={{ background:'linear-gradient(135deg,#004d2e,#006c42)', borderTop:'1px solid rgba(255,255,255,0.1)' }}>
        <div className="flex gap-12 animate-[marquee_20s_linear_infinite] whitespace-nowrap" style={{ width:'max-content' }}>
          {['IEEE CASS BMSIT&M','Circuits & Systems','Innovate','Lead','Inspire','Embedded Systems','IoT','Robotics','Signal Processing','IEEE CASS BMSIT&M','Circuits & Systems','Innovate','Lead','Inspire','Embedded Systems'].map((t, i) => (
            <span key={i} className="font-heading font-bold uppercase tracking-widest text-sm flex items-center gap-4" style={{ color:'rgba(255,255,255,0.85)' }}>
              {t} <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background:'rgba(255,255,255,0.4)' }}/>
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════ OVERVIEW QUOTE ══════════════════ */}
      <section className="py-24 px-6" style={{ background:'#fff' }}>
        <div className="max-w-5xl mx-auto">
          <div ref={s4} className="reveal relative rounded-2xl overflow-hidden" style={{ background:'linear-gradient(135deg,#004d2e 0%,#006c42 50%,#00a863 100%)', boxShadow:'0 16px 60px rgba(0,108,66,0.30)' }}>
            {/* dot grid */}
            <div className="absolute inset-0" style={{ backgroundImage:'radial-gradient(circle,rgba(255,255,255,0.07) 1px,transparent 1px)', backgroundSize:'24px 24px' }}/>
            {/* glow circles */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 -translate-y-16 translate-x-16" style={{ background:'radial-gradient(circle,#fff,transparent)' }}/>
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 translate-y-10 -translate-x-10" style={{ background:'radial-gradient(circle,#a8f0cc,transparent)' }}/>
            <div className="relative p-12 md:p-16 text-center">
              <div className="font-heading text-white/30 leading-none select-none mb-2" style={{ fontSize:'6rem' }}>"</div>
              <blockquote className="font-heading font-bold text-white leading-tight mb-6" style={{ fontSize:'clamp(1.8rem,4vw,2.8rem)', letterSpacing:'0.06em' }}>
                Join the Circuit Revolution.<br/>Innovate. Lead. Inspire.
              </blockquote>
              <p className="text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
                Be part of a community that builds the future — one circuit at a time. IEEE CASS BMSIT&amp;M is where passionate engineers come together to learn, create, and lead.
              </p>
              <Link to="/membership"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-heading font-bold uppercase tracking-wider text-sm transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
                style={{ background:'#fff', color:'#006c42' }}>
                Become a Member <ArrowRight size={16}/>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ CTA FOOTER BAND ══════════════════ */}
      <section className="py-16 px-6" style={{ background:'linear-gradient(180deg,#f0faf5,#e0f5ea)' }}>
        <div ref={s5} className="reveal max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-gray-900 uppercase mb-3" style={{ fontSize:'clamp(1.5rem,4vw,2.5rem)', letterSpacing:'0.06em' }}>
            Ready to explore more?
          </h2>
          <p className="text-gray-500 mb-8">Dive into our events, projects, and team.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/events"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-heading font-bold uppercase tracking-wider text-sm text-white transition-all hover:-translate-y-0.5"
              style={{ background:'linear-gradient(135deg,#006c42,#00a863)' }}>
              Events <ArrowRight size={15}/>
            </Link>
            <Link to="/projects"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-heading font-bold uppercase tracking-wider text-sm transition-all hover:-translate-y-0.5"
              style={{ background:'#fff', color:'#006c42', border:'2px solid #006c42' }}>
              Projects <ArrowRight size={15}/>
            </Link>
            <a href="https://ieee-cas.org" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-heading font-bold uppercase tracking-wider text-sm transition-all hover:-translate-y-0.5"
              style={{ background:'#fff', color:'#555', border:'2px solid #ddd' }}>
              IEEE CASS <ExternalLink size={15}/>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
