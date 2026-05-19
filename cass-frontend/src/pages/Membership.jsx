import { ArrowRight, Check, ExternalLink, Star, Zap, BookOpen, Globe, Award, Users, Target } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const IEEE_MEMBERSHIP_URL = 'https://www.ieee.org/membership';
const IEEE_CASS_URL = 'https://ieee-cas.org/membership';

export default function Membership() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal(), r5 = useReveal(), r6 = useReveal();

  return (
    <div style={{ background:'#fff' }}>

      {/* ══════════════════ HERO ══════════════════ */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0" style={{ background:'linear-gradient(160deg,#ffffff 0%,#f0faf5 40%,#e0f5ea 100%)' }}/>
        <div className="absolute inset-0" style={{ backgroundImage:'radial-gradient(circle,rgba(0,108,66,0.10) 1px,transparent 1px)', backgroundSize:'36px 36px' }}/>
        <div className="absolute inset-0" style={{ background:'radial-gradient(ellipse 70% 60% at 50% -5%,rgba(0,168,99,0.18) 0%,transparent 65%)' }}/>
        <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background:'linear-gradient(90deg,#004d2e,#006c42,#00a863,#006c42,#004d2e)' }}/>

        <div ref={r1} className="reveal text-center relative z-10 max-w-3xl mx-auto">
        

          <h1 className="font-heading font-bold text-gray-900 uppercase leading-none mb-4"
            style={{ fontSize:'clamp(3rem,10vw,7rem)', letterSpacing:'0.08em' }}>
            Join <span style={{ color:'#006c42' }}>CASS</span>
          </h1>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20" style={{ background:'linear-gradient(to right,transparent,#006c42)' }}/>
            <div className="w-2 h-2 rounded-full bg-[#006c42]"/>
            <div className="h-px w-20" style={{ background:'linear-gradient(to left,transparent,#006c42)' }}/>
          </div>

          <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Gain access to IEEE's global network, world-class research, and a vibrant student community at BMSITM. Be part of the circuit revolution.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href={IEEE_MEMBERSHIP_URL} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-heading font-bold uppercase tracking-wider text-sm text-white transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,108,66,0.4)]"
              style={{ background:'linear-gradient(135deg,#004d2e,#006c42,#00a863)', boxShadow:'0 4px 20px rgba(0,108,66,0.25)' }}>
              Join IEEE Now <ExternalLink size={16}/>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════ VISION / MISSION ══════════════════ */}
      <section className="py-20 px-6" style={{ background:'linear-gradient(180deg,#f0faf5,#e8f7ef)', borderTop:'1px solid #d4edde', borderBottom:'1px solid #d4edde' }}>
        <div className="max-w-7xl mx-auto">
          <div ref={r2} className="reveal grid md:grid-cols-2 gap-8">

            {/* Vision */}
            <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow:'0 8px 40px rgba(0,108,66,0.15)' }}>
              <div className="px-8 py-5" style={{ background:'linear-gradient(135deg,#004d2e,#006c42)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
                    <Star size={18} className="text-white"/>
                  </div>
                  <h2 className="font-heading font-bold text-white uppercase tracking-wider" style={{ fontSize:'1.3rem' }}>Our Vision</h2>
                </div>
              </div>
              <div className="p-8" style={{ background:'#fff' }}>
                <p className="text-gray-500 leading-relaxed">
                  To be the leading student chapter of IEEE CASS in South India — fostering a culture of innovation, research, and leadership that empowers students to solve real-world problems through circuits and systems engineering.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {['Innovation','Research','Leadership','Excellence'].map(v => (
                    <div key={v} className="flex items-center gap-2 text-sm font-heading font-semibold uppercase tracking-wider" style={{ color:'#006c42' }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#006c42]"/> {v}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow:'0 8px 40px rgba(0,108,66,0.15)' }}>
              <div className="px-8 py-5" style={{ background:'linear-gradient(135deg,#006c42,#00a863)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
                    <Zap size={18} className="text-white"/>
                  </div>
                  <h2 className="font-heading font-bold text-white uppercase tracking-wider" style={{ fontSize:'1.3rem' }}>Our Mission</h2>
                </div>
              </div>
              <div className="p-8" style={{ background:'#fff' }}>
                <p className="text-gray-500 leading-relaxed">
                  To cultivate technical excellence and professional growth by organizing events, workshops, and collaborative projects that connect students with the global IEEE community and industry opportunities.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {['Workshops','Collaboration','Growth','Community'].map(v => (
                    <div key={v} className="flex items-center gap-2 text-sm font-heading font-semibold uppercase tracking-wider" style={{ color:'#006c42' }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00a863]"/> {v}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ STRATEGIC GOALS ══════════════════ */}
      <section className="py-20 px-6" style={{ background:'#fff' }}>
        <div className="max-w-5xl mx-auto">
          <div ref={r3} className="reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#006c42]"/>
              <span className="font-mono text-xs uppercase tracking-widest" style={{ color:'#006c42' }}>Strategic Goals</span>
            </div>
            <h2 className="font-heading font-bold text-gray-900 uppercase mb-10" style={{ fontSize:'clamp(1.8rem,4vw,2.8rem)', letterSpacing:'0.06em' }}>
              Where We're Headed
            </h2>
            <div className="space-y-4">
              {[
                { num:'01', title:'Lead Technological Innovation', desc:'Drive forward innovation in circuits, embedded systems, signal processing, and AI hardware applications.' },
                { num:'02', title:'Build a Research Culture',      desc:'Encourage student-led research, paper publications, and participation in international IEEE conferences.' },
                { num:'03', title:'Enhance Industry Connect',      desc:'Bridge the gap between academia and industry through guest talks, internships, and live project collaborations.' },
                { num:'04', title:'Promote Diversity & Inclusion', desc:'Create an inclusive environment where every engineer — regardless of background — can thrive and lead.' },
                { num:'05', title:'Professional Development',      desc:'Equip members with IEEE certifications, soft skills, and global networking opportunities.' },
              ].map(goal => (
                <div key={goal.num}
                  className="group flex gap-5 items-start rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,108,66,0.12)]"
                  style={{ border:'1px solid #d4edde', background:'#fff' }}>
                  <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-mono font-bold text-sm transition-all group-hover:scale-110"
                    style={{ background:'linear-gradient(135deg,#006c42,#00a863)', color:'#fff' }}>
                    {goal.num}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-gray-900 uppercase tracking-wider mb-1 group-hover:text-[#006c42] transition-colors text-sm">{goal.title}</div>
                    <p className="text-gray-500 text-sm leading-relaxed">{goal.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ BENEFITS ══════════════════ */}
      <section className="py-20 px-6" style={{ background:'linear-gradient(180deg,#f0faf5,#e8f7ef)', borderTop:'1px solid #d4edde' }}>
        <div className="max-w-7xl mx-auto">
          <div ref={r4} className="reveal">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#006c42]"/>
                <span className="font-mono text-xs uppercase tracking-widest" style={{ color:'#006c42' }}>Why Join</span>
                <div className="h-px w-8 bg-[#006c42]"/>
              </div>
              <h2 className="font-heading font-bold text-gray-900 uppercase" style={{ fontSize:'clamp(1.8rem,5vw,3.2rem)', letterSpacing:'0.08em' }}>
                Benefits of CASS Membership
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon:BookOpen, title:'IEEE Xplore Access',          desc:'Full digital access to millions of IEEE technical papers, journals, and conference proceedings.' },
                { icon:Globe,    title:'Global Network',               desc:'Connect with over 400,000 IEEE members and 300+ student branches across 160+ countries.' },
                { icon:Award,    title:'Certifications & Recognition', desc:'Earn IEEE certifications and get recognized at local, regional, and global levels.' },
                { icon:Users,    title:'Exclusive Events',             desc:'Priority access to CASS workshops, hackathons, seminars, and flagship events.' },
                { icon:Zap,      title:'Project Mentorship',           desc:'Work on real projects under the guidance of faculty advisors and industry mentors.' },
                { icon:Star,     title:'Career Opportunities',         desc:'Internships, industry referrals, and placement support through the IEEE alumni network.' },
              ].map(({ icon:Icon, title, desc }) => (
                <div key={title}
                  className="group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,108,66,0.16)]"
                  style={{ background:'#fff', border:'1px solid #c8ecd8', boxShadow:'0 2px 12px rgba(0,108,66,0.06)' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                    style={{ background:'linear-gradient(135deg,#006c42,#00a863)' }}>
                    <Icon size={22} className="text-white"/>
                  </div>
                  <h3 className="font-heading font-bold text-gray-900 uppercase tracking-wider text-sm mb-2 group-hover:text-[#006c42] transition-colors">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ MEMBERSHIP TIERS ══════════════════ */}
      <section className="py-20 px-6" style={{ background:'#fff' }}>
        <div className="max-w-4xl mx-auto">
          <div ref={r5} className="reveal text-center mb-12">
            <h2 className="font-heading font-bold text-gray-900 uppercase mb-2" style={{ fontSize:'clamp(1.8rem,4vw,2.8rem)', letterSpacing:'0.07em' }}>Membership Options</h2>
            <p className="text-gray-500">Choose the membership that fits your goals.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">

            {/* IEEE Student */}
            <div className="rounded-2xl overflow-hidden" style={{ border:'1px solid #d4edde', boxShadow:'0 4px 24px rgba(0,108,66,0.08)' }}>
              <div className="px-8 py-5" style={{ background:'#f0faf5', borderBottom:'1px solid #d4edde' }}>
                <div className="font-mono text-xs uppercase tracking-widest mb-1" style={{ color:'#006c42' }}>Student Tier</div>
                <h3 className="font-heading font-bold text-gray-900 uppercase" style={{ fontSize:'1.4rem', letterSpacing:'0.04em' }}>IEEE Student Membership</h3>
              </div>
              <div className="p-8" style={{ background:'#fff' }}>
                <p className="text-gray-500 text-sm mb-6">Access to the world's largest technical professional organization.</p>
                <ul className="space-y-3 mb-8">
                  {['IEEE Xplore access','IEEE Spectrum magazine','Global networking','Discounted event fees','IEEE student benefits portal'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background:'rgba(0,108,66,0.10)' }}>
                        <Check size={12} className="text-[#006c42]"/>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={IEEE_MEMBERSHIP_URL} target="_blank" rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-heading font-bold uppercase tracking-wider text-sm transition-all hover:-translate-y-0.5"
                  style={{ border:'2px solid #006c42', color:'#006c42', background:'#f0faf5' }}>
                  Join IEEE <ExternalLink size={14}/>
                </a>
              </div>
            </div>

            {/* CASS Chapter — featured */}
            <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow:'0 12px 48px rgba(0,108,66,0.25)' }}>
              {/* Recommended badge */}
              <div className="absolute top-4 right-4 z-10 font-mono text-xs px-3 py-1 rounded-full uppercase tracking-wider"
                style={{ background:'rgba(255,255,255,0.25)', color:'#fff', border:'1px solid rgba(255,255,255,0.3)', backdropFilter:'blur(4px)' }}>
                ★ Recommended
              </div>
              <div className="px-8 py-5" style={{ background:'linear-gradient(135deg,#004d2e,#006c42,#00a863)' }}>
                <div className="font-mono text-xs uppercase tracking-widest mb-1" style={{ color:'rgba(255,255,255,0.7)' }}>Chapter Tier</div>
                <h3 className="font-heading font-bold text-white uppercase" style={{ fontSize:'1.4rem', letterSpacing:'0.04em' }}>CASS BMSITM Chapter</h3>
              </div>
              <div className="p-8" style={{ background:'#fff' }}>
                <p className="text-gray-500 text-sm mb-6">Full IEEE membership + active participation in our campus chapter.</p>
                <ul className="space-y-3 mb-8">
                  {['All IEEE Student benefits','Access to all CASS events','Project mentorship','Technical workshops','IEEE CASS society access','Chapter leadership opportunities'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background:'linear-gradient(135deg,#006c42,#00a863)' }}>
                        <Check size={12} className="text-white"/>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={IEEE_CASS_URL} target="_blank" rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-heading font-bold uppercase tracking-wider text-sm text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,108,66,0.4)]"
                  style={{ background:'linear-gradient(135deg,#004d2e,#006c42,#00a863)' }}>
                  Join CASS <ArrowRight size={14}/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ FINAL CTA BANNER ══════════════════ */}
      <section className="py-20 px-6 relative overflow-hidden" style={{ background:'linear-gradient(135deg,#004d2e 0%,#006c42 50%,#00a863 100%)' }}>
        <div className="absolute inset-0" style={{ backgroundImage:'radial-gradient(circle,rgba(255,255,255,0.06) 1px,transparent 1px)', backgroundSize:'28px 28px' }}/>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 -translate-y-20 translate-x-20" style={{ background:'radial-gradient(circle,#fff,transparent)' }}/>
        <div ref={r6} className="reveal text-center relative z-10 max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-white uppercase leading-tight mb-4" style={{ fontSize:'clamp(1.8rem,5vw,3.5rem)', letterSpacing:'0.07em' }}>
            Join the Circuit Revolution
          </h2>
          <p className="text-white/70 mb-10 leading-relaxed">
            Innovate. Lead. Inspire. — The future is built by those who show up.
          </p>
          <a href={IEEE_MEMBERSHIP_URL} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-heading font-bold uppercase tracking-wider text-base transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
            style={{ background:'#fff', color:'#006c42' }}>
            Become a Member Today <ArrowRight size={18}/>
          </a>
        </div>
      </section>
    </div>
  );
}
