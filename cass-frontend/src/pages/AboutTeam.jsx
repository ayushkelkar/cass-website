import { Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const EXECOM = [
  {
    name: 'Dr. Bhanuprakash R',
    role: 'Faculty Advisor',
    image: 'banuprakash.jpeg',
    links: { instagram: '', linkedin: '', phone: '', email: 'r.bhanuprakash@bmsit.in' },
  },
  {
    name: 'Aditya S',
    role: 'Chair',
    image: 'aditya_s.jpg',
    links: { instagram: 'https://instagram.com/aditya_428', linkedin: 'https://www.linkedin.com/in/aditya-saravana-6149b4355', phone: '', email: 'aditya19@gmail.com' },
  },
  {
    name: 'P Achyuth',
    role: 'Vice Chair',
    image: '/achyuth_panatula.jpg',
    links: { instagram: '', linkedin: 'https://www.linkedin.com/in/achyuth-panatula?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', phone: '', email: 'achyuth0306@gmail.com' },
  },
  {
    name: 'Kulajeet Barman',
    role: 'Secretary',
    image: '/kulajeet_barman.jpg',
    links: { instagram: 'https://www.instagram.com/stevensonro4?igsh=MXZvdTBudW1qMzU4cg==', linkedin: 'https://www.linkedin.com/in/kulajeet-barman?utm_source=share_via&utm_content=profile&utm_medium=member_android', phone: '', email: 'Kulajeetofficial@gmail.com' },
  },
  {
    name: 'Sahana G',
    role: 'Treasurer',
    image: 'sahana.jpg',
    links: { instagram: 'https://www.linkedin.com/in/sahana-g1', linkedin: 'https://www.instagram.com/sahaaanaaaaaa?igsh=aGJkMDM4ZjE2Y2xk', phone: '', email: 'sahanag0205@gmail.com' },
  },
  {
    name: 'Apoorva N H',
    role: 'Web Master',
    image: '/apoorva_nh.jpg',
    links: { instagram: 'https://www.instagram.com/apoorvahanamaratti?igsh=MTVhampobmw0bXQ1bQ==', linkedin: 'https://www.linkedin.com/in/apoorva-hanamaratti-3b674731a?utm_source=share_via&utm_content=profile&utm_medium=member_android', phone: '', email: 'apoorvahanamaratti@gmail.com' },
  },
  {
    name: 'Samruddh B Patil',
    role: 'Volcom Lead',
    image: 'samruddh_patil.jpg',
    links: { instagram: 'https://instagram.com/samruddh601', linkedin: 'https://www.linkedin.com/in/samruddh-b-patil-003909337?utm_source=share_via&utm_content=profile&utm_medium=member_android', phone: '', email: '' },
  },
  {
    name: 'Jiya Kulkarni',
    role: 'R & D Lead',
    image: '/jiya_kulkarni.jpg',
    links: { instagram: 'https://www.instagram.com/jiya_kulkarni.11', linkedin: 'https://www.linkedin.com/in/jiya-kulkarni-a249202a3/', phone: '', email: 'jiya11kulkarni@gmail.com' },
  },
  {
    name: 'Gururaj Reddy P',
    role: 'PR Lead',
    image: '/gururaj_reddy.jpeg',
    links: { instagram: 'https://www.instagram.com/gjr.19?igsh=ZTZxeXBieDNyNjBi&utm_source=qr', linkedin: 'https://www.linkedin.com/in/gururaj-reddy-37352629b?utm_source=share_via&utm_content=profile&utm_medium=member_ios', phone: '', email: 'gjr19atwork@gmail.com' },
  },
];

const VOLCOM = [
  {
    name: 'Aditya BS',
    role: 'Volcom',
    image: 'aditya_bs.png',
    links: { instagram: 'https://www.instagram.com/dyati.bhat04?igsh=dG9raWNwN3M0dnd5', linkedin: 'https://www.linkedin.com/in/aditya-bhat-s-593426384?utm_source=share_via&utm_content=profile&utm_medium=member_android', phone: '', email: '25ug1byec083@bmsit.in' },
  },
  {
    name: 'Satish Malladad',
    role: 'Design Team',
    image: 'satish_malladad.jpg',
    links: { instagram: 'https://www.instagram.com/satish_1_4_2?igsh=MXE4MzhuaHpqYzNubw==', linkedin: 'https://www.linkedin.com/in/satish-malladad-852b86333?utm_source=share_via&utm_content=profile&utm_medium=member_android', phone: '', email: 'satishmalladad65@gmail.com' },
  },
  {
    name: 'Avanya KV',
    role: 'Events and Marketing',
    image: 'avanya_kv.jpg',
    links: { instagram: 'https://www.instagram.com/avanya982', linkedin: 'https://www.linkedin.com/in/avanya-kv-746728374?utm_source=share_via&utm_content=profile&utm_medium=member_android', phone: '', email: 'avanyakv@gmail.com' },
  },
  {
    name: 'Sumana S',
    role: 'Volcom',
    image: 'sumana_s.jpg',
    links: { instagram: '', linkedin: 'https://www.linkedin.com/in/sumana-s-b43265390', phone: '', email: 'sumanas0507@gmail.com ' },
  },
  {
    name: 'Nikhil K',
    role: 'Events and Marketing',
    image: 'nikhil_k.jpg',
    links: { instagram: 'https://www.instagram.com/nikhil_kayy?igsh=MTBsOHQwbjc5YzR4MQ==', linkedin: 'https://www.linkedin.com/in/nikhil-k-504156333?utm_source=share_via&utm_content=profile&utm_medium=member_android', phone: '', email: 'nikhilkarthik107@gmail.com' },
  },
  {
    name: 'Vanama Sai Hiranmayi',
    role: 'Design Team',
    image: 'vanama_sai_hiranmayi.jpg',
    links: { instagram: '', linkedin: 'https://www.linkedin.com/in/vanama-sai-hiranmayi-934b00316?utm_source=share_via&utm_content=profile&utm_medium=member_android', phone: '', email: '24ug1byec043@bmsit.in' },
  },
  {
    name: 'Kedar Patil',
    role: 'Tech Operations',
    image: 'kedar_patil.jpg',
    links: { instagram: 'https://www.instagram.com/capkedar25', linkedin: '', phone: '', email: 'kedarpatil2507@gmail.com' },
  },
  {
    name: 'Ayush Kelkar',
    role: 'Tech Operations',
    image: 'ayush_kelkar.jpg',
    links: { instagram: 'https://www.instagram.com/heisenberg_010?igsh=MTVpNXJ3NnB2Nmkyeg==', linkedin: 'https://www.linkedin.com/in/ayush-kelkar-19289531b?utm_source=share_via&utm_content=profile&utm_medium=member_android', phone: '', email: 'ayush94klkr@gmail.com' },
  },
];

const InstaIcon = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

function TeamCard({ member }) {
  const initials = member.name.split(' ').map(w => w[0]).slice(0, 2).join('');
  const hasAnyLink = member.links?.instagram || member.links?.linkedin || member.links?.phone || member.links?.email;

  return (
    <div className="group relative rounded-2xl overflow-hidden text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,108,66,0.18)]"
      style={{ background: 'white', border: '1px solid #d4edde', boxShadow: '0 2px 12px rgba(0,108,66,0.06)' }}>

      <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #004d2e, #00a863, #004d2e)' }} />

      <div className="relative overflow-hidden" style={{ height: '220px', background: 'linear-gradient(160deg,#e8f7ef,#c8ecd8)' }}>
        {member.image ? (
          <img src={member.image} alt={member.name}
            className="w-full h-full transition-transform duration-700 group-hover:scale-105"
            style={{ objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
        ) : null}

        <div className="w-full h-full items-center justify-center flex-col gap-1 absolute inset-0"
          style={{ display: member.image ? 'none' : 'flex', background: 'linear-gradient(135deg,#006c42,#004d2e)' }}>
          <span className="font-heading font-bold text-white" style={{ fontSize: '2.8rem', letterSpacing: '0.04em' }}>{initials}</span>
          <span className="font-mono text-white/40 text-xs uppercase tracking-widest">CASS</span>
        </div>

        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,40,20,0.5) 0%, transparent 50%)' }} />
      </div>

      <div className="px-4 pt-4 pb-5" style={{ background: 'white' }}>
        <h3 className="font-heading font-bold text-gray-900 uppercase tracking-wide"
          style={{ fontSize: '0.95rem', letterSpacing: '0.06em' }}>
          {member.name}
        </h3>
        <div className="inline-block mt-2 px-3 py-1 rounded-full" style={{ background: 'linear-gradient(135deg, #006c42, #00a863)' }}>
          <span className="font-mono text-white text-[10px] uppercase tracking-widest">{member.role}</span>
        </div>

        <div className="flex justify-center gap-2 mt-3">
          {member.links?.instagram && (
            <a href={member.links.instagram} target="_blank" rel="noreferrer"
              className="w-7 h-7 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: '#f0faf5', color: '#006c42', border: '1px solid #c8ecd8' }}>
              <InstaIcon size={13} />
            </a>
          )}
          {member.links?.linkedin && (
            <a href={member.links.linkedin} target="_blank" rel="noreferrer"
              className="w-7 h-7 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: '#f0faf5', color: '#006c42', border: '1px solid #c8ecd8' }}>
              <Linkedin size={13} />
            </a>
          )}
          {member.links?.phone && (
            <a href={`tel:${member.links.phone}`}
              className="w-7 h-7 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: '#f0faf5', color: '#006c42', border: '1px solid #c8ecd8' }}>
              <Phone size={13} />
            </a>
          )}
          {member.links?.email && (
            <a href={`mailto:${member.links.email}`}
              className="w-7 h-7 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: '#f0faf5', color: '#006c42', border: '1px solid #c8ecd8' }}>
              <Mail size={13} />
            </a>
          )}
          {!hasAnyLink && (
            <span className="font-mono text-xs" style={{ color: '#ccc' }}>—</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AboutTeam() {
  const heroRef = useReveal();
  const overviewRef = useReveal();
  const valuesRef = useReveal();
  const teamRef = useReveal();

  return (
    <div className="min-h-screen" style={{ background: 'white' }}>

      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, #ffffff 0%, #f0faf5 50%, #e0f5ea 100%)' }} />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,108,66,0.10) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 55% at 65% 0%, rgba(0,168,99,0.14) 0%, transparent 65%)' }} />
        <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: 'linear-gradient(90deg, #004d2e, #006c42, #00a863, #006c42, #004d2e)' }} />

        <div ref={heroRef} className="reveal relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center min-h-[36vh]">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#006c42]" />
              <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#006c42' }}>Our Story</span>
            </div>
            <h1 className="font-heading font-bold text-gray-900 uppercase leading-none mb-5"
              style={{ fontSize: 'clamp(2.8rem,7vw,5rem)', letterSpacing: '0.08em' }}>
              About <span style={{ color: '#006c42' }}>CASS</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-3 font-medium">
              We're not just building circuits — we're designing the future.
            </p>
            <p className="text-gray-500 leading-relaxed">
              From micro-level innovations to macro-scale impact, IEEE CASS BMSIT&amp;M unites visionary students and passionate engineers to reshape systems, solve real-world problems, and ignite technological breakthroughs.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,108,66,0.2)]"
            style={{ background: 'linear-gradient(135deg, #004d2e 0%, #006c42 60%, #00a863 100%)' }}>
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 -translate-y-12 translate-x-12"
              style={{ background: 'radial-gradient(circle, #00ff88, transparent)' }} />
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-10 translate-y-10 -translate-x-10"
              style={{ background: 'radial-gradient(circle, #ffffff, transparent)' }} />
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

            <div className="relative p-8">
              <div className="text-white/40 font-heading text-7xl leading-none mb-2 select-none">"</div>
              <blockquote className="font-heading font-bold text-white leading-snug mb-4"
                style={{ fontSize: 'clamp(1.4rem,2.5vw,1.9rem)', letterSpacing: '0.04em' }}>
                Innovate. Lead. Inspire.
              </blockquote>
              <p className="text-white/70 text-sm leading-relaxed">
                As the official student chapter of the IEEE Circuits and Systems Society at BMS Institute of Technology &amp; Management, Bengaluru — this community thrives on innovation in electronics, circuits, and system design.
              </p>
              <div className="mt-6 pt-5 border-t border-white/20 flex items-center gap-3">
                <div className="w-8 h-px bg-white/50" />
                <span className="font-mono text-white/60 text-xs uppercase tracking-widest">IEEE CASS BMSIT&M</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-y" style={{ background: 'linear-gradient(180deg, #f0faf5, #e8f7ef)', borderColor: '#c8ecd8' }}>
        <div className="max-w-4xl mx-auto">
          <div ref={overviewRef} className="reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#006c42]" />
              <span className="font-mono text-xs uppercase tracking-widest" style={{ color: '#006c42' }}>Who We Are</span>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              Through <span className="font-semibold text-gray-900">technical workshops</span>, cutting-edge research, and industry collaborations, we empower future engineers to explore emerging technologies, drive meaningful change, and lead with purpose.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              The IEEE Circuits and Systems Society (CASS) is a global technical organization dedicated to advancing the theory, practice, and applications of circuits and systems. Our BMSIT&amp;M chapter brings this mission to life — connecting students with world-class research, resources, and a vibrant community. Join the circuit revolution.
            </p>

            <div ref={valuesRef} className="reveal grid md:grid-cols-3 gap-5">
              {[
                { title: 'Innovation', desc: 'Access cutting-edge research in circuits, embedded systems, and emerging technology.', num: '01' },
                { title: 'Community', desc: 'Build lasting connections with engineers, researchers, and industry leaders worldwide.', num: '02' },
                { title: 'Leadership', desc: 'Develop skills to lead, present, and publish your own groundbreaking work.', num: '03' },
              ].map(({ title, desc, num }) => (
                <div key={title} className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,108,66,0.15)]"
                  style={{ background: 'white', border: '1px solid #c8ecd8', boxShadow: '0 2px 10px rgba(0,108,66,0.06)' }}>
                  <div className="font-mono text-xs mb-3" style={{ color: '#00a863' }}>{num}</div>
                  <div className="w-8 h-1 rounded-full mb-3" style={{ background: 'linear-gradient(to right, #006c42, #00a863)' }} />
                  <div className="font-heading font-bold text-gray-900 uppercase tracking-wider text-sm mb-2">{title}</div>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div ref={teamRef} className="reveal text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#006c42]" />
              <span className="font-mono text-xs uppercase tracking-widest" style={{ color: '#006c42' }}>The People Behind CASS</span>
              <div className="h-px w-8 bg-[#006c42]" />
            </div>
            <h2 className="font-heading font-bold text-gray-900 uppercase mb-3"
              style={{ fontSize: 'clamp(2.2rem,6vw,4rem)', letterSpacing: '0.08em' }}>
              Our Team
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Meet the dedicated students and faculty leading IEEE CASS at BMSIT&amp;M.
            </p>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#006c42]" />
              <span className="font-mono text-xs uppercase tracking-widest" style={{ color: '#006c42' }}>Execom: Executive Committee</span>
              <div className="h-px flex-1 bg-[#c8ecd8]" />
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {EXECOM.map((member, i) => <TeamCard key={i} member={member} />)}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#006c42]" />
              <span className="font-mono text-xs uppercase tracking-widest" style={{ color: '#006c42' }}>Volcom: Volunteer Committee</span>
              <div className="h-px flex-1 bg-[#c8ecd8]" />
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {VOLCOM.map((member, i) => <TeamCard key={i} member={member} />)}
            </div>
          </div>

        </div>
      </section>

      <section className="py-16 px-6" style={{ background: 'linear-gradient(135deg, #004d2e 0%, #006c42 50%, #00a863 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-white uppercase mb-4" style={{ fontSize: 'clamp(1.5rem,4vw,2.4rem)', letterSpacing: '0.06em' }}>
            About IEEE CASS Globally
          </h2>
          <p className="text-white/70 leading-relaxed mb-8 max-w-2xl mx-auto">
            The IEEE Circuits and Systems Society is a global organization with over 12,000 members worldwide. It publishes leading journals, organizes flagship conferences like ISCAS, and connects engineers across every domain of circuits and systems.
          </p>
          <a href="https://ieee-cas.org" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-heading font-bold text-sm uppercase tracking-wider transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
            style={{ background: 'white', color: '#006c42' }}>
            Visit IEEE CASS <ExternalLink size={15} />
          </a>
        </div>
      </section>
    </div>
  );
}