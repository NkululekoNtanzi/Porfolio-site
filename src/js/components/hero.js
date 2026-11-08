export function renderHero(profile) {
  const container = document.getElementById('hero-root');
  if (!container) return;

  container.innerHTML = `
    <header id="about" class="py-16 lg:py-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div class="lg:col-span-7 relative">
        <div class="text-xs font-mono uppercase tracking-widest text-gray-500 mb-3">
          Hello, I am
        </div>
        <h1 class="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-black uppercase leading-[0.9] mb-6">
          Nkululeko<br>
          Freedom<br>
          Ntanzi
        </h1>
        <div class="text-sm font-mono tracking-wider text-gray-800 uppercase mb-8 pb-4 border-b border-black/10 inline-block">
          • AI Automation &nbsp;|&nbsp; Full-Stack &nbsp;|&nbsp; Systems Architecture
        </div>
        <p class="text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl mb-8 font-sans">
          ${profile.bio}
        </p>
        <div class="flex flex-wrap gap-4 font-mono text-xs uppercase">
          <a href="#projects" class="bg-black text-white px-6 py-4 border border-black hover:bg-gray-800 transition shadow-[4px_4px_0px_0px_rgba(59,130,246,1)]">
            Start a Project
          </a>
          <a href="${profile.socials.github}" target="_blank" class="bg-white text-black px-6 py-4 border border-black hover:bg-gray-50 transition shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            View Profile
          </a>
        </div>
      </div>

      <div class="lg:col-span-5 relative flex justify-center lg:justify-end">
        <div class="absolute -top-6 left-4 lg:-left-8 z-20 w-24 h-24 bg-black text-white rounded-full flex items-center justify-center font-mono text-[10px] uppercase tracking-widest text-center p-2 shadow-xl animate-spin-slow">
          CREATIVE FULL STACK
        </div>

        <div class="relative bg-white border-2 border-black p-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-sm w-full">
          <div class="overflow-hidden bg-gray-100 border border-black/20 aspect-[4/5] relative">
            <img src="./src/assets/images/profile-photo.jpg" alt="Nkululeko S. Ntanzi" class="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition duration-500">
          </div>
          <div class="mt-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-gray-600 px-1">
            <span>[SYS_PROFILE_01]</span>
            <span class="text-black font-bold">Scroll to Explore ↓</span>
          </div>
        </div>
      </div>
    </header>
  `;
}