export function renderNavbar(profile) {
  const container = document.getElementById('navbar-root');
  if (!container) return;

  container.innerHTML = `
    <nav class="sticky top-0 z-50 bg-[#fcfcfc]/90 backdrop-blur border-b border-gray-300 px-6 lg:px-12">
      <div class="max-w-7xl mx-auto flex items-center justify-between h-20">
        <a href="#" class="font-mono text-xl font-black tracking-tighter text-black uppercase">
          NKULULEKO.N
        </a>
        <div class="hidden md:flex items-center space-x-8 text-xs font-mono uppercase tracking-widest text-gray-800 font-semibold">
          <a href="#about" class="hover:text-black transition">About</a>
          <a href="#projects" class="hover:text-black transition">Works</a>
          <a href="#skills" class="hover:text-black transition">Contact</a>
        </div>
        <div>
          <span class="inline-flex items-center gap-2 px-3 py-1.5 border border-black text-[11px] font-mono uppercase tracking-wider bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Available for Work
          </span>
        </div>
      </div>
    </nav>
  `;
}