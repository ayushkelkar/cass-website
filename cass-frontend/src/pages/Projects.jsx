import { Github, ExternalLink } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const PROJECTS = [
  {
    // This is p1
    id: '1',
    title: 'Real-Time IoT Monitoring System using ESP32 & FreeRTOS',
    status: 'finished',
    tags: ['ESP32', 'FreeRTOS', 'MQTT', 'IoT', 'WiFi', 'Embedded Systems'],
    image: '/projects/p1/1.jpeg',
    shortDesc: 'Multitasking IoT node that streams real-time environmental telemetry to the cloud over MQTT with watchdog reliability.',
    description: `Designed and developed a real-time IoT monitoring system using the ESP32 microcontroller with FreeRTOS-based multitasking architecture. The system continuously collects environmental data such as temperature and humidity through sensors and transmits the telemetry data to a remote cloud server using MQTT over WiFi.

A watchdog monitoring mechanism was implemented to detect task failures and improve embedded system reliability. The project included multiple concurrent RTOS tasks — sensor acquisition, MQTT communication, watchdog supervision, and LED status indication.

The system demonstrated stable task scheduling, reliable wireless communication, and consistent real-time monitoring, making it suitable for smart environmental monitoring, industrial IoT nodes, and smart building automation.`,
    github: '',
    demo: '',
  },
];

function ProjectCard({ project, index }) {
  const ref = useReveal();
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="reveal">
      <div className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,108,66,0.16)]"
        style={{ background: 'white', border: '1px solid #d4edde', boxShadow: '0 2px 16px rgba(0,108,66,0.06)' }}>
        <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #004d2e, #006c42, #00a863, #006c42, #004d2e)' }} />
        <div className={`grid md:grid-cols-2 ${!isEven ? 'md:[direction:rtl]' : ''}`}>
          <div className="relative h-64 md:h-auto overflow-hidden md:[direction:ltr]" style={{ background: '#e0f5ea' }}>
            <img src={project.image} alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              onError={e => { e.target.style.display = 'none'; }} />
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,108,66,0.1) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            <div className={`absolute inset-0`} style={{ background: isEven ? 'linear-gradient(to right, transparent 60%, rgba(255,255,255,0.15))' : 'linear-gradient(to left, transparent 60%, rgba(255,255,255,0.15))' }} />
            <div className="absolute top-4 left-4 md:[direction:ltr]">
              <div className="font-heading font-bold text-white text-xs uppercase tracking-widest px-3 py-1.5 rounded-full"
                style={{ background: 'linear-gradient(135deg, #006c42, #00a863)', boxShadow: '0 2px 12px rgba(0,108,66,0.4)' }}>
                Project {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          </div>
          <div className="p-7 flex flex-col md:[direction:ltr]">
            <p className="font-heading font-semibold text-sm mb-3 px-3 py-2 rounded-lg" style={{ color: '#006c42', background: 'rgba(0,108,66,0.08)', border: '1px solid rgba(0,108,66,0.15)' }}>
              {project.shortDesc}
            </p>
            <h3 className="font-heading font-bold text-gray-900 uppercase leading-tight mb-4 group-hover:text-[#006c42] transition-colors"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', letterSpacing: '0.03em' }}>
              {project.title}
            </h3>
            <div className="space-y-3 mb-5 flex-1">
              {project.description.trim().split('\n\n').map((para, i) => (
                <p key={i} className="text-gray-500 text-sm leading-relaxed">{para}</p>
              ))}
            </div>
            <div className="flex gap-3">
              {project.github ? (
                <a href={project.github} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition-all hover:-translate-y-0.5"
                  style={{ border: '1.5px solid #006c42', color: '#006c42', background: '#f0faf5' }}>
                  <Github size={13} /> GitHub
                </a>
              ) : (
                <span className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider opacity-30 cursor-not-allowed"
                  style={{ border: '1.5px solid #ccc', color: '#999', background: '#fafafa' }}>
                  <Github size={13} /> GitHub
                </span>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,108,66,0.4)]"
                  style={{ background: 'linear-gradient(135deg, #006c42, #00a863)' }}>
                  <ExternalLink size={13} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const headerRef = useReveal();

  return (
    <div className="min-h-screen" style={{ background: 'white' }}>

      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, #ffffff 0%, #f0faf5 40%, #e0f5ea 100%)' }} />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,108,66,0.10) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 20% 0%, rgba(0,168,99,0.15) 0%, transparent 70%)' }} />
        <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: 'linear-gradient(90deg, #004d2e, #006c42, #00a863, #006c42, #004d2e)' }} />

        <div ref={headerRef} className="reveal relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#006c42]" />
            <span className="font-mono text-xs uppercase tracking-widest" style={{ color: '#006c42' }}>Research & Development</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-heading font-bold text-gray-900 uppercase leading-none"
                style={{ fontSize: 'clamp(3.5rem,10vw,7rem)', letterSpacing: '0.08em' }}>
                Projects
              </h1>
              <p className="text-gray-500 text-lg mt-3 max-w-lg leading-relaxed">
                Real-world innovations built by IEEE CASS members — from embedded systems to intelligent robotics.
              </p>
            </div>
            <div className="flex gap-6">
              <div className="text-center px-6 py-4 rounded-2xl" style={{ background: 'rgba(0,108,66,0.08)', border: '1px solid rgba(0,108,66,0.2)' }}>
                <div className="font-heading font-bold text-4xl" style={{ color: '#006c42' }}>{PROJECTS.length}</div>
                <div className="font-mono text-xs uppercase tracking-wider text-gray-500">Projects Built</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 max-w-6xl mx-auto space-y-10 pb-24">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </section>

      <div className="text-center py-20">
        <p className="font-heading font-bold text-2xl uppercase tracking-wider" style={{ color: '#006c42' }}>3 Project Proposals In Review</p>
        <p className="text-gray-400 mt-2 text-sm font-mono">Pending approval — check back soon.</p>
      </div>

      <section className="py-16 px-6" style={{ background: 'linear-gradient(135deg, #004d2e 0%, #006c42 50%, #00a863 100%)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-bold text-white uppercase mb-3" style={{ fontSize: 'clamp(1.5rem,4vw,2.5rem)', letterSpacing: '0.06em' }}>
            Have a Project Idea?
          </h2>
          <p className="text-white/70 mb-7 leading-relaxed">Join IEEE CASS and turn your idea into a real-world innovation with mentorship and resources.</p>
          <a href="/membership" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-heading font-bold text-sm uppercase tracking-wider transition-all hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:-translate-y-0.5"
            style={{ background: 'white', color: '#006c42' }}>
            Join CASS <ExternalLink size={15} />
          </a>
        </div>
      </section>
    </div>
  );
}