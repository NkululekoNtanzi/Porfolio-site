export function renderSkills(skillCategories, socials) {
  const container = document.getElementById('skills-root');
  if (!container) return;

  container.innerHTML = `
    <div class="mb-8">
      <span class="text-blue-600 font-mono text-sm tracking-wider uppercase font-bold">Technical Expertise</span>
      <h2 class="text-3xl font-black text-black mt-1 uppercase tracking-tight">Core Stack & Tooling Matrix</h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      ${skillCategories.map(cat => `
        <div class="bg-white border-2 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 class="text-sm font-mono font-black text-black uppercase tracking-wider mb-4 border-b border-black pb-2">${cat.category}</h3>
          <ul class="space-y-2">
            ${cat.skills.map(skill => `
              <li class="text-gray-800 text-sm font-sans flex items-center gap-2 font-medium">
                <span class="text-blue-600 text-xs">◆</span> ${skill}
              </li>
            `).join('')}
          </ul>
        </div>
      `).join('')}
    </div>

    <!-- Contact & Location Matrix -->
    <div id="contact" class="bg-white border-2 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mt-12">
      <div class="mb-6 pb-4 border-b border-black">
        <span class="text-blue-600 font-mono text-xs tracking-widest uppercase font-bold">Direct Inquiries</span>
        <h3 class="text-2xl font-black text-black uppercase tracking-tight mt-1">Get in Touch</h3>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-sm">
        <div class="border border-black/20 p-4 bg-gray-50">
          <span class="text-gray-500 block text-xs uppercase mb-1">Email Address</span>
          <a href="mailto:nkuleko.ntanzi@gmail.com" class="text-black font-bold hover:underline">nkuleko.ntanzi@gmail.com</a>
        </div>
        <div class="border border-black/20 p-4 bg-gray-50">
          <span class="text-gray-500 block text-xs uppercase mb-1">Contact Number</span>
          <a href="tel:0678833868" class="text-black font-bold hover:underline">067 88 33 868</a>
        </div>
        <div class="border border-black/20 p-4 bg-gray-50">
          <span class="text-gray-500 block text-xs uppercase mb-1">Base Location</span>
          <span class="text-black font-bold">Rosebank, Johannesburg 2092</span>
        </div>
      </div>
    </div>
  `;
}