export function renderProjectsGrid(projects) {
  const container = document.getElementById('projects-root');
  if (!container) return;

  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      ${projects.map(project => `
        <article class="bg-white border-2 border-black p-6 flex flex-col justify-between shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition duration-200">
          <div>
            <div class="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
              <span class="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">${project.category}</span>
              <span class="text-[10px] font-mono px-2 py-0.5 border border-black bg-gray-50 text-black uppercase">${project.status}</span>
            </div>
            <h3 class="text-xl font-black text-black tracking-tight mb-2 uppercase">${project.title}</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-6">${project.description}</p>
          </div>
          <div>
            <div class="flex flex-wrap gap-1.5 mb-6">
              ${project.tech.map(t => `<span class="bg-gray-100 text-black text-xs px-2 py-0.5 rounded-none font-mono border border-black/20">${t}</span>`).join('')}
            </div>
            <div class="flex items-center justify-between pt-4 border-t border-black/20 text-xs font-mono uppercase tracking-wider font-bold">
              <a href="${project.github}" target="_blank" class="text-black hover:text-blue-600 transition flex items-center gap-1">
                Source Code &rarr;
              </a>
              <a href="${project.demo}" class="text-gray-400 hover:text-black transition">
                Demo
              </a>
            </div>
          </div>
        </article>
      `).join('')}
    </div>
  `;
}