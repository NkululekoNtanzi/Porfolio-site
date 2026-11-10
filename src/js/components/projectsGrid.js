export function createProjectCard(project) {
    return `
        <div class="project-card border border-black/10 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
                <div class="flex justify-between items-start">
                    <span class="text-xs font-mono text-amber-700 font-bold uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                        ${project.category || 'Production System'}
                    </span>
                    <span class="text-xs font-mono text-green-600 font-bold">● Live on Vercel</span>
                </div>
                
                <h3 class="text-2xl font-black text-black mt-3">
                    <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="hover:underline">
                        ${project.title}
                    </a>
                </h3>
                
                <p class="text-sm text-gray-600 mt-2 leading-relaxed">
                    ${project.description}
                </p>
                
                <div class="flex flex-wrap gap-2 mt-4 font-mono text-xs">
                    ${(project.tags || []).map(tag => `<span class="bg-gray-100 text-gray-800 px-2.5 py-1 rounded-md">${tag}</span>`).join('')}
                </div>
            </div>

            <div class="flex items-center space-x-3 mt-6 pt-4 border-t border-black/10 font-mono text-xs">
                <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="bg-black text-white font-bold px-4 py-2.5 rounded-xl hover:bg-gray-800 transition flex items-center space-x-1.5">
                    <span>🚀 Live Demo</span>
                </a>
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="bg-gray-100 text-black font-bold px-4 py-2.5 rounded-xl hover:bg-gray-200 transition border border-black/10 flex items-center space-x-1.5">
                    <span>💻 GitHub Repo</span>
                </a>
            </div>
        </div>
    `;
}