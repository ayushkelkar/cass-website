import { useState, useRef, useEffect } from 'react';

export default function InaugurationGate({ children, onDone }) {
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const [btnGone, setBtnGone] = useState(false);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animRef = useRef(null);
  const loopRef = useRef(null);
  const burstRef = useRef(null);

  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      if (loopRef.current) clearInterval(loopRef.current);
      if (burstRef.current) clearInterval(burstRef.current);
    };
  }, []);

  function rndColor() {
    const c = [
      '#ff4444', '#ff8800', '#ffdd00', '#ff66cc',
      '#aa44ff', '#4488ff', '#00ccff', '#00ff88',
      '#ffffff', '#ff6666', '#ffaa33', '#66ffaa',
      '#ff44aa', '#44ffee', '#ffee44', '#ff77ff',
    ];
    return c[Math.floor(Math.random() * c.length)];
  }

  function launchFirework(x, y) {
    const count = 60 + Math.floor(Math.random() * 40);
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count;
      const speed = 2 + Math.random() * 6;
      particlesRef.current.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        color: rndColor(),
        size: 1.5 + Math.random() * 2.5,
        decay: 0.010 + Math.random() * 0.013,
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
      if (p.trail.length > 6) p.trail.shift();
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
    const pos = [
      [w * 0.2, h * 0.25], [w * 0.8, h * 0.25],
      [w * 0.5, h * 0.18], [w * 0.15, h * 0.5],
      [w * 0.85, h * 0.5], [w * 0.35, h * 0.35],
      [w * 0.65, h * 0.35],
    ];
    let i = 0;
    burstRef.current = setInterval(() => {
      if (i < pos.length) { launchFirework(pos[i][0], pos[i][1]); i++; }
    }, 280);
    setTimeout(() => {
      clearInterval(burstRef.current);
      loopRef.current = setInterval(() =>
        launchFirework(w * (0.1 + Math.random() * 0.8), h * (0.1 + Math.random() * 0.5)), 750);
      setTimeout(() => {
        clearInterval(loopRef.current);
        setTimeout(() => onDone(), 1000);
      }, 6000);
    }, pos.length * 280 + 200);
  }

  function handleInaugurate() {
    setBtnGone(true);
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

  // Curtain colour: deep navy-black with a rich dark teal edge —
  // dark enough that the white logo and white text pop hard against it
  const curtainBase = '#0b1a2e';
  const curtainMid  = '#0f2a3f';
  const curtainEdge = '#1a3a50';

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: '#06111a', overflow: 'hidden' }}>

      {/* Homepage rendered underneath */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>{children}</div>

      {/* Fireworks canvas */}
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 6 }}
      />

      {/* Star background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: '#06111a' }}>
        {[...Array(30)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute', borderRadius: '50%', background: 'white',
            width: Math.random() * 2.5 + 0.8 + 'px',
            height: Math.random() * 2.5 + 0.8 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            opacity: Math.random() * 0.6 + 0.2,
          }} />
        ))}
      </div>

      {/* ── Reveal content (shown after curtains open) ── */}
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', zIndex: 5,
        opacity: showText ? 1 : 0, transition: 'opacity 1.2s ease',
        pointerEvents: 'none',
        gap: 0,
      }}>
        <img
          src="/logo.png"
          alt="IEEE CASS"
          style={{
            width: 160, height: 160, objectFit: 'contain', marginBottom: 28,
            filter: 'drop-shadow(0 0 32px rgba(255,255,255,0.5))',
          }}
        />
        <p style={{
          fontFamily: 'monospace', fontSize: 13, letterSpacing: '0.28em',
          textTransform: 'uppercase', color: '#ffffff', margin: '0 0 14px',
          fontWeight: 600,
        }}>
          Officially Inaugurated
        </p>
        <h2 style={{
          fontSize: 'clamp(2.4rem, 6vw, 4rem)', fontWeight: 800,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          textAlign: 'center', color: '#ffffff', margin: 0, lineHeight: 1.15,
          textShadow: '0 2px 24px rgba(0,200,120,0.4)',
        }}>
          IEEE CASS<br />BMSITM
        </h2>
        <div style={{ marginTop: 20, display: 'flex', gap: 12 }}>
          {['✦', '✦', '✦'].map((s, i) => (
            <span key={i} style={{ color: '#00e87a', fontSize: 18 }}>{s}</span>
          ))}
        </div>
      </div>

      {/* ── Top curtain rail ── */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 40, zIndex: 12,
        background: `linear-gradient(to bottom, #050e18, #0b1a2e)`,
        borderBottom: '2px solid #1e4d6b',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around',
      }}>
        {[...Array(28)].map((_, i) => (
          <div key={i} style={{
            width: 11, height: 24,
            background: 'linear-gradient(to bottom, #1e4d6b, #0b1a2e)',
            borderRadius: '0 0 50% 50%',
            transform: 'translateY(50%)',
          }} />
        ))}
      </div>

      {/* ── Left curtain ── */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '50%', height: '100%', zIndex: 10,
        background: `linear-gradient(to right, ${curtainBase}, ${curtainMid} 55%, ${curtainEdge})`,
        transform: curtainOpen ? 'translateX(-100%)' : 'translateX(0)',
        transition: 'transform 2.2s cubic-bezier(0.77,0,0.18,1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {/* Fabric folds */}
        <div style={{ position: 'absolute', right: 0, top: 0, width: 22, height: '100%', background: 'rgba(0,0,0,0.3)' }} />
        <div style={{ position: 'absolute', left: '18%', top: 0, width: 7, height: '100%', background: 'rgba(255,255,255,0.04)' }} />
        <div style={{ position: 'absolute', left: '40%', top: 0, width: 4, height: '100%', background: 'rgba(255,255,255,0.03)' }} />
        {/* Logo on left curtain */}
        <img
          src="/logo.png"
          alt=""
          style={{
            width: 140, height: 140, objectFit: 'contain',
            opacity: 0.22,
            filter: 'grayscale(1) brightness(2)',
            pointerEvents: 'none',
            position: 'relative', zIndex: 1,
          }}
        />
      </div>

      {/* ── Right curtain ── */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', zIndex: 10,
        background: `linear-gradient(to left, ${curtainBase}, ${curtainMid} 55%, ${curtainEdge})`,
        transform: curtainOpen ? 'translateX(100%)' : 'translateX(0)',
        transition: 'transform 2.2s cubic-bezier(0.77,0,0.18,1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {/* Fabric folds */}
        <div style={{ position: 'absolute', left: 0, top: 0, width: 22, height: '100%', background: 'rgba(0,0,0,0.3)' }} />
        <div style={{ position: 'absolute', right: '18%', top: 0, width: 7, height: '100%', background: 'rgba(255,255,255,0.04)' }} />
        <div style={{ position: 'absolute', right: '40%', top: 0, width: 4, height: '100%', background: 'rgba(255,255,255,0.03)' }} />
        {/* Logo on right curtain */}
        <img
          src="/logo.png"
          alt=""
          style={{
            width: 140, height: 140, objectFit: 'contain',
            opacity: 0.22,
            filter: 'grayscale(1) brightness(2)',
            pointerEvents: 'none',
            position: 'relative', zIndex: 1,
          }}
        />
      </div>

      {/* ── Inaugurate button screen ── */}
      {!btnGone && (
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', zIndex: 15, gap: 24,
        }}>
          <img
            src="/logo.png"
            alt="IEEE CASS"
            style={{
              width: 320, height: 320, objectFit: 'contain',
              filter: 'drop-shadow(0 0 28px rgba(255,255,255,0.35))',
            }}
          />
          <div style={{ textAlign: 'center' }}>
            <p style={{
              fontFamily: 'monospace', fontSize: 30, letterSpacing: '0.28em',
              textTransform: 'uppercase', color: '#ffffff', margin: '0 0 4px',
              fontWeight: 600,
            }}>
              IEEE CASS · BMSITM
            </p>
            <p style={{
              fontFamily: 'monospace', fontSize: 20, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', margin: 0,
            }}>
              Chapter Inauguration
            </p>
          </div>
          <button
            onClick={handleInaugurate}
            style={{
              marginTop: 8,
              padding: '16px 52px', borderRadius: 14,
              border: '1.5px solid rgba(255,255,255,0.5)',
              background: 'rgba(255,255,255,0.08)',
              color: '#ffffff', fontSize: 15, fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10,
              fontFamily: 'inherit',
              backdropFilter: 'blur(4px)',
              transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.16)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.8)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
            }}
          >
            ✦ Inaugurate
          </button>
        </div>
      )}
    </div>
  );
}