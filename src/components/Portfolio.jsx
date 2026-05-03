import { useState, useEffect, useRef } from 'react';

const Icons = {
  Instagram: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  ),
  Linkedin: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  ),
  Github: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  ),
  Terminal: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  ),
  Smartphone: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
      <line x1="12" y1="18" x2="12.01" y2="18"></line>
    </svg>
  ),
  Brain: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9.5 2A5 5 0 0 1 12 11.5M14.5 2A5 5 0 0 0 12 11.5"></path>
      <path d="M12 11.5a4.5 4.5 0 1 1 0 9"></path>
      <path d="M7 15a4.5 4.5 0 0 0 0-9"></path>
      <path d="M17 15a4.5 4.5 0 0 1 0-9"></path>
    </svg>
  ),
  Database: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
  ),
  Cloud: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17.5 19c2.5 0 4.5-2 4.5-4.5 0-2.3-1.7-4.2-3.9-4.5C17.5 6.4 14.2 3.5 10 3.5c-3.7 0-6.8 2.2-8.1 5.4C.8 10 0 11.5 0 13c0 3.3 2.7 6 6 6h11.5z"></path>
    </svg>
  ),
  Binary: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="14" y="14" width="4" height="6" rx="2"></rect>
      <rect x="6" y="4" width="4" height="6" rx="2"></rect>
      <path d="M6 20h4"></path>
      <path d="M14 10h4"></path>
      <path d="M6 14h2v6"></path>
      <path d="M14 4h2v6"></path>
    </svg>
  ),
  Zap: ({ size = 24, className = "", fill = "none" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  ),
  ArrowUpRight: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  )
};

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const cloudParticles = [];
    for (let i = 0; i < 25; i++) {
      cloudParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 250 + 100,
        speedX: Math.random() * 0.4 - 0.2,
        speedY: Math.random() * 0.15 - 0.05,
        opacity: Math.random() * 0.15 + 0.05
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const skyGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      skyGrad.addColorStop(0, '#020617');
      skyGrad.addColorStop(1, '#1e3a8a');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      cloudParticles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x > canvas.width + p.radius) p.x = -p.radius;
        if (p.x < -p.radius) p.x = canvas.width + p.radius;
        if (p.y > canvas.height + p.radius) p.y = -p.radius;
        if (p.y < -p.radius) p.y = canvas.height + p.radius;

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        grad.addColorStop(0, `rgba(59, 130, 246, ${p.opacity})`);
        grad.addColorStop(0.6, `rgba(250, 204, 21, ${p.opacity * 0.2})`);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const techArsenal = [
    { name: "Python / Django", icon: <Icons.Terminal size={32}/>, color: "text-blue-400" },
    { name: "Flutter / Android", icon: <Icons.Smartphone size={32}/>, color: "text-yellow-400" },
    { name: "AI / ML", icon: <Icons.Brain size={32}/>, color: "text-blue-400" },
    { name: "Java / Systems", icon: <Icons.Binary size={32}/>, color: "text-yellow-400" },
    { name: "Data Science", icon: <Icons.Database size={32}/>, color: "text-blue-400" },
    { name: "Cloud Tech", icon: <Icons.Cloud size={32}/>, color: "text-yellow-400" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-yellow-400 selection:text-blue-900 overflow-x-hidden">
      <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />

      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'py-4 bg-slate-950/40 backdrop-blur-2xl border-b border-white/5' : 'py-10 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 blur-lg opacity-0 group-hover:opacity-40 transition-opacity" />
              <div className="relative w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-black text-yellow-400 border-2 border-yellow-400/20 group-hover:rotate-[360deg] transition-all duration-1000 shadow-xl shadow-blue-500/20">
                JS
              </div>
            </div>
            <span className="text-xl font-black tracking-[0.2em] text-white hidden sm:block uppercase">Jerome</span>
          </div>

          <div className="hidden md:flex gap-12 text-[10px] font-black tracking-[0.3em] text-slate-400">
            {['LOGIC', 'ARSENAL', 'SOURCE'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-yellow-400 transition-all relative group">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-yellow-400 transition-all group-hover:w-full shadow-[0_0_8px_#fbbf24]" />
              </a>
            ))}
          </div>

          <a href="https://github.com/jeromeshaiju" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-slate-950 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-yellow-400/10">
            Deploy()
          </a>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center pt-20 px-8 z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="relative">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-blue-400/20 bg-blue-400/5 text-[10px] font-black uppercase tracking-widest text-blue-400 mb-10 animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <Icons.Zap size={14} fill="currentColor" />
              <span>Core Systems Intelligence v2.5</span>
            </div>

            <h1 className="text-8xl md:text-[14rem] font-black leading-[0.8] tracking-tighter mb-16 select-none uppercase">
              <div className="overflow-hidden">
                <span className="block animate-reveal text-white">Building</span>
              </div>
              <div className="overflow-hidden flex items-baseline gap-4">
                <span className="block animate-reveal stroke-text" style={{ animationDelay: '0.2s' }}>Systems</span>
              </div>
            </h1>

            <div className="flex flex-col md:flex-row gap-16 items-start">
              <p className="text-xl md:text-3xl text-slate-400 leading-tight font-medium max-w-2xl">
                I am <span className="text-yellow-400 font-black">Jerome Shaiju</span>.
                Engineering software solutions across <span className="text-blue-400">AI</span>,
                <span className="text-blue-400"> Mobile</span>, and <span className="text-blue-400">Distributed Systems</span>.
              </p>

              <div className="flex gap-4">
                <a href="https://github.com/jeromeshaiju" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all duration-500 shadow-lg">
                  <Icons.Github />
                </a>
                <a href="https://www.linkedin.com/in/jerome-shaiju-k-c-6b18922a5/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-500 shadow-lg">
                  <Icons.Linkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="arsenal" className="py-32 px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-20">
            <h2 className="text-sm font-black tracking-[0.5em] text-yellow-400 uppercase">Tech Capabilities</h2>
            <div className="h-[1px] flex-grow bg-white/10 shadow-[0_0_2px_rgba(255,255,255,0.1)]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {techArsenal.map((tech, i) => (
              <div key={i} className="group relative p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-blue-400/30 transition-all duration-700 overflow-hidden backdrop-blur-sm">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 blur-[60px] group-hover:bg-yellow-400/10 transition-all" />
                <div className={`mb-10 ${tech.color} group-hover:scale-125 transition-transform duration-700 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]`}>
                  {tech.icon}
                </div>
                <h3 className="text-3xl font-black text-white mb-4 tracking-tight uppercase">{tech.name}</h3>
                <div className="w-12 h-1 bg-blue-500 group-hover:w-full transition-all duration-700 shadow-[0_0_8px_#3b82f6]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="source" className="py-32 px-8 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="text-7xl md:text-9xl font-black tracking-tighter text-white uppercase">The Repos</h2>
            <a href="https://github.com/jeromeshaiju?tab=repositories" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-yellow-400 font-black tracking-widest text-xs hover:gap-6 transition-all">
              EXPLORE_FULL_GITHUB <Icons.ArrowUpRight size={24} />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <a href="https://github.com/jeromeshaiju" target="_blank" rel="noopener noreferrer" className="group relative p-12 bg-white/5 border border-white/10 rounded-[4rem] flex flex-col md:flex-row justify-between items-center hover:bg-blue-600 transition-all duration-700 shadow-2xl">
              <div className="flex items-center gap-8 mb-8 md:mb-0">
                <div className="w-20 h-20 bg-slate-950 rounded-full flex items-center justify-center border-2 border-yellow-400 shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                  <Icons.Github size={40} className="text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-4xl font-black text-white group-hover:text-white uppercase tracking-tighter">jeromeshaiju / Source</h3>
                  <p className="text-slate-400 group-hover:text-blue-100 font-medium">Click to view all production and experimental code repositories.</p>
                </div>
              </div>
              <div className="px-10 py-5 bg-yellow-400 text-slate-950 rounded-full font-black text-sm uppercase tracking-widest group-hover:bg-white group-hover:scale-110 transition-all shadow-xl">
                Access Source
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-40 px-8 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-blue-400 font-black tracking-[0.5em] uppercase text-xs mb-10">Project Initiation</p>
          <h2 className="text-6xl md:text-[10rem] font-black text-white tracking-tighter mb-20 leading-none uppercase">
            Sync <span className="stroke-text">Up</span>
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-8 mb-32">
            <a href="https://www.linkedin.com/in/jerome-shaiju-k-c-6b18922a5/" target="_blank" rel="noopener noreferrer" className="px-16 py-8 bg-blue-600 rounded-full text-white font-black uppercase tracking-[0.2em] text-sm hover:bg-yellow-400 hover:text-slate-950 transition-all hover:scale-105 shadow-[0_10px_40px_rgba(37,99,235,0.2)]">
              LinkedIn Profile
            </a>
            <a href="https://www.instagram.com/jerome.shaiju/" target="_blank" rel="noopener noreferrer" className="px-16 py-8 border-2 border-white/10 rounded-full text-white font-black uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-slate-950 transition-all hover:scale-105 shadow-xl">
              Instagram Direct
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase">
            <span>© 2025 // Jerome Shaiju</span>
            <div className="flex gap-12 my-10 md:my-0">
              <a href="https://github.com/jeromeshaiju" className="hover:text-yellow-400 transition-colors">GITHUB</a>
              <a href="#" className="hover:text-yellow-400 transition-colors tracking-tighter opacity-40">SYSTEM_LOGS</a>
              <a href="#" className="hover:text-yellow-400 transition-colors tracking-tighter opacity-40">ENCRYPTION</a>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
              <span className="text-[#fbbf24]">Live_On_Network</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;